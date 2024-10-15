// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! A crate that hosts a common definitions that are relevant for the pallet-revive.

use crate::H160;
use alloc::vec::Vec;
use codec::{Decode, Encode, MaxEncodedLen};
use frame_support::{dispatch::DispatchInfo, weights::Weight};
use pallet_revive_uapi::ReturnFlags;
use scale_info::TypeInfo;
use sp_runtime::{
	traits::{Saturating, Zero},
	DispatchError, RuntimeDebug,
};

/// Result type of a `bare_call` or `bare_instantiate` call as well as `ContractsApi::call` and
/// `ContractsApi::instantiate`.
///
/// It contains the execution result together with some auxiliary information.
///
/// #Note
///
/// It has been extended to include `events` at the end of the struct while not bumping the
/// `ContractsApi` version. Therefore when SCALE decoding a `ContractResult` its trailing data
/// should be ignored to avoid any potential compatibility issues.
#[derive(Clone, Eq, PartialEq, Encode, Decode, RuntimeDebug, TypeInfo)]
pub struct ContractResult<R, Balance, EventRecord> {
	/// How much weight was consumed during execution.
	pub gas_consumed: Weight,
	/// How much weight is required as gas limit in order to execute this call.
	///
	/// This value should be used to determine the weight limit for on-chain execution.
	///
	/// # Note
	///
	/// This can only different from [`Self::gas_consumed`] when weight pre charging
	/// is used. Currently, only `seal_call_runtime` makes use of pre charging.
	/// Additionally, any `seal_call` or `seal_instantiate` makes use of pre-charging
	/// when a non-zero `gas_limit` argument is supplied.
	pub gas_required: Weight,
	/// How much balance was paid by the origin into the contract's deposit account in order to
	/// pay for storage.
	///
	/// The storage deposit is never actually charged from the origin in case of [`Self::result`]
	/// is `Err`. This is because on error all storage changes are rolled back including the
	/// payment of the deposit.
	pub storage_deposit: StorageDeposit<Balance>,
	/// An optional debug message. This message is only filled when explicitly requested
	/// by the code that calls into the contract. Otherwise it is empty.
	///
	/// The contained bytes are valid UTF-8. This is not declared as `String` because
	/// this type is not allowed within the runtime.
	///
	/// Clients should not make any assumptions about the format of the buffer.
	/// They should just display it as-is. It is **not** only a collection of log lines
	/// provided by a contract but a formatted buffer with different sections.
	///
	/// # Note
	///
	/// The debug message is never generated during on-chain execution. It is reserved for
	/// RPC calls.
	pub trace: Vec<u8>,
	/// The execution result of the wasm code.
	pub result: Result<R, DispatchError>,
	/// The events that were emitted during execution. It is an option as event collection is
	/// optional.
	pub events: Option<Vec<EventRecord>>,
}

/// The result of the execution of a `eth_transact` call.
pub struct EthContractResultDetails<Balance> {
	/// The kind of transaction that was executed.
	pub transact_kind: EthTransactKind,
	/// The call's dispatch info.
	pub dispatch_info: DispatchInfo,
	/// Length of the encoded call.
	pub len: u32,
	/// Gas limit of the transaction.
	pub gas_limit: Weight,
	/// Storage deposit charged.
	pub storage_deposit: Balance,
	/// The execution result.
	pub result: Result<Vec<u8>, DispatchError>,
}

impl<Balance: From<u32>> EthContractResultDetails<Balance> {
	/// Map to a EthContractResult, using the provided compute_fee function.
	///
	/// # Parameters
	///
	/// - `compute_fee`: A function that takes the length of the encoded call, the dispatch info and
	///   the tip and returns the fee.
	pub fn map(
		self,
		compute_fee: impl FnOnce(u32, &DispatchInfo, Balance) -> Balance,
	) -> EthContractResult<Balance> {
		EthContractResult {
			transact_kind: self.transact_kind,
			result: self.result,
			gas_limit: self.gas_limit,
			storage_deposit: self.storage_deposit,
			fee: compute_fee(self.len, &self.dispatch_info, 0.into()),
		}
	}
}

/// Similar to `EthContractResultDetails` but with the fee instead of dispatch info and len.
#[derive(Clone, Eq, PartialEq, Encode, Decode, RuntimeDebug, TypeInfo)]
pub struct EthContractResult<Balance> {
	/// The kind of transaction that was executed.
	pub transact_kind: EthTransactKind,
	/// The fee charged for the execution.
	pub fee: Balance,
	/// Gas limit of the transaction.
	pub gas_limit: Weight,
	/// Storage deposit charged.
	pub storage_deposit: Balance,
	/// The execution result.
	pub result: Result<Vec<u8>, DispatchError>,
}

/// Result type of a `bare_code_upload` call.
pub type CodeUploadResult<Balance> = Result<CodeUploadReturnValue<Balance>, DispatchError>;

/// Result type of a `get_storage` call.
pub type GetStorageResult = Result<Option<Vec<u8>>, ContractAccessError>;

/// The possible errors that can happen querying the storage of a contract.
#[derive(Copy, Clone, Eq, PartialEq, Encode, Decode, MaxEncodedLen, RuntimeDebug, TypeInfo)]
pub enum ContractAccessError {
	/// The given address doesn't point to a contract.
	DoesntExist,
	/// Storage key cannot be decoded from the provided input data.
	KeyDecodingFailed,
}

/// Output of a contract call or instantiation which ran to completion.
#[derive(Clone, PartialEq, Eq, Encode, Decode, RuntimeDebug, TypeInfo, Default)]
pub struct ExecReturnValue {
	/// Flags passed along by `seal_return`. Empty when `seal_return` was never called.
	pub flags: ReturnFlags,
	/// Buffer passed along by `seal_return`. Empty when `seal_return` was never called.
	pub data: Vec<u8>,
}

impl ExecReturnValue {
	/// The contract did revert all storage changes.
	pub fn did_revert(&self) -> bool {
		self.flags.contains(ReturnFlags::REVERT)
	}
}

/// Describes the type of an [`crate::Call::eth_transact`] call.
#[derive(Clone, Copy, PartialEq, Eq, Encode, Decode, RuntimeDebug, TypeInfo)]
pub enum EthTransactKind {
	/// A Call to an existing contract.
	Call,
	/// The instantiation of a new contract.
	InstantiateWithCode {
		#[codec(compact)]
		code_len: u32,
		#[codec(compact)]
		data_len: u32,
	},
}

/// The result of a successful contract instantiation.
#[derive(Clone, PartialEq, Eq, Encode, Decode, RuntimeDebug, TypeInfo)]
pub struct InstantiateReturnValue {
	/// The output of the called constructor.
	pub result: ExecReturnValue,
	/// The address of the new contract.
	pub addr: H160,
}

/// The result of successfully uploading a contract.
#[derive(Clone, PartialEq, Eq, Encode, Decode, MaxEncodedLen, RuntimeDebug, TypeInfo)]
pub struct CodeUploadReturnValue<Balance> {
	/// The key under which the new code is stored.
	pub code_hash: sp_core::H256,
	/// The deposit that was reserved at the caller. Is zero when the code already existed.
	pub deposit: Balance,
}

/// Reference to an existing code hash or a new wasm module.
#[derive(Clone, Eq, PartialEq, Encode, Decode, RuntimeDebug, TypeInfo)]
pub enum Code {
	/// A wasm module as raw bytes.
	Upload(Vec<u8>),
	/// The code hash of an on-chain wasm blob.
	Existing(sp_core::H256),
}

/// The amount of balance that was either charged or refunded in order to pay for storage.
#[derive(
	Clone, Eq, PartialEq, Ord, PartialOrd, Encode, Decode, MaxEncodedLen, RuntimeDebug, TypeInfo,
)]
pub enum StorageDeposit<Balance> {
	/// The transaction reduced storage consumption.
	///
	/// This means that the specified amount of balance was transferred from the involved
	/// deposit accounts to the origin.
	Refund(Balance),
	/// The transaction increased storage consumption.
	///
	/// This means that the specified amount of balance was transferred from the origin
	/// to the involved deposit accounts.
	Charge(Balance),
}

impl<Balance: Zero> Default for StorageDeposit<Balance> {
	fn default() -> Self {
		Self::Charge(Zero::zero())
	}
}

impl<Balance: Zero + Copy> StorageDeposit<Balance> {
	/// Returns how much balance is charged or `0` in case of a refund.
	pub fn charge_or_zero(&self) -> Balance {
		match self {
			Self::Charge(amount) => *amount,
			Self::Refund(_) => Zero::zero(),
		}
	}

	pub fn is_zero(&self) -> bool {
		match self {
			Self::Charge(amount) => amount.is_zero(),
			Self::Refund(amount) => amount.is_zero(),
		}
	}
}

impl<Balance> StorageDeposit<Balance>
where
	Balance: Saturating + Ord + Copy,
{
	/// This is essentially a saturating signed add.
	pub fn saturating_add(&self, rhs: &Self) -> Self {
		use StorageDeposit::*;
		match (self, rhs) {
			(Charge(lhs), Charge(rhs)) => Charge(lhs.saturating_add(*rhs)),
			(Refund(lhs), Refund(rhs)) => Refund(lhs.saturating_add(*rhs)),
			(Charge(lhs), Refund(rhs)) =>
				if lhs >= rhs {
					Charge(lhs.saturating_sub(*rhs))
				} else {
					Refund(rhs.saturating_sub(*lhs))
				},
			(Refund(lhs), Charge(rhs)) =>
				if lhs > rhs {
					Refund(lhs.saturating_sub(*rhs))
				} else {
					Charge(rhs.saturating_sub(*lhs))
				},
		}
	}

	/// This is essentially a saturating signed sub.
	pub fn saturating_sub(&self, rhs: &Self) -> Self {
		use StorageDeposit::*;
		match (self, rhs) {
			(Charge(lhs), Refund(rhs)) => Charge(lhs.saturating_add(*rhs)),
			(Refund(lhs), Charge(rhs)) => Refund(lhs.saturating_add(*rhs)),
			(Charge(lhs), Charge(rhs)) =>
				if lhs >= rhs {
					Charge(lhs.saturating_sub(*rhs))
				} else {
					Refund(rhs.saturating_sub(*lhs))
				},
			(Refund(lhs), Refund(rhs)) =>
				if lhs > rhs {
					Refund(lhs.saturating_sub(*rhs))
				} else {
					Charge(rhs.saturating_sub(*lhs))
				},
		}
	}

	/// If the amount of deposit (this type) is constrained by a `limit` this calculates how
	/// much balance (if any) is still available from this limit.
	///
	/// # Note
	///
	/// In case of a refund the return value can be larger than `limit`.
	pub fn available(&self, limit: &Balance) -> Balance {
		use StorageDeposit::*;
		match self {
			Charge(amount) => limit.saturating_sub(*amount),
			Refund(amount) => limit.saturating_add(*amount),
		}
	}
}

/// Determines whether events should be collected during execution.
#[derive(
	Copy, Clone, PartialEq, Eq, RuntimeDebug, Decode, Encode, MaxEncodedLen, scale_info::TypeInfo,
)]
pub enum CollectEvents {
	/// Collect events.
	///
	/// # Note
	///
	/// Events should only be collected when called off-chain, as this would otherwise
	/// collect all the Events emitted in the block so far and put them into the PoV.
	///
	/// **Never** use this mode for on-chain execution.
	UnsafeCollect,
	/// Skip event collection.
	Skip,
}

/// Determines whether debug messages will be collected.
#[derive(
	Copy, Clone, PartialEq, Eq, RuntimeDebug, Decode, Encode, MaxEncodedLen, scale_info::TypeInfo,
)]
pub enum DebugInfo {
	/// Collect debug messages.
	/// # Note
	///
	/// This should only ever be set to `UnsafeDebug` when executing as an RPC because
	/// it adds allocations and could be abused to drive the runtime into an OOM panic.
	UnsafeDebug,
	/// Skip collection of debug messages.
	Skip,
}
