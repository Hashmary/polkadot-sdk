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

//! Autogenerated weights for `pallet_beefy_mmr`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 32.0.0
//! DATE: 2024-10-09, STEPS: `50`, REPEAT: `20`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `a4847292742a`, CPU: `Intel(R) Xeon(R) CPU @ 2.60GHz`
//! WASM-EXECUTION: `Compiled`, CHAIN: `None`, DB CACHE: `1024`

// Executed Command:
// frame-omni-bencher
// v1
// benchmark
// pallet
// --extrinsic=*
// --runtime=target/release/wbuild/kitchensink-runtime/kitchensink_runtime.wasm
// --pallet=pallet_beefy_mmr
// --header=/__w/polkadot-sdk/polkadot-sdk/substrate/HEADER-APACHE2
// --output=/__w/polkadot-sdk/polkadot-sdk/substrate/frame/beefy-mmr/src/weights.rs
// --wasm-execution=compiled
// --steps=50
// --repeat=20
// --heap-pages=4096
// --template=substrate/.maintain/frame-weight-template.hbs
// --no-storage-info
// --no-min-squares
// --no-median-slopes
// --genesis-builder-policy=none
// --exclude-pallets=pallet_xcm,pallet_xcm_benchmarks::fungible,pallet_xcm_benchmarks::generic,pallet_nomination_pools,pallet_remark,pallet_transaction_storage

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]
#![allow(missing_docs)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use core::marker::PhantomData;

/// Weight functions needed for `pallet_beefy_mmr`.
pub trait WeightInfo {
	fn extract_validation_context() -> Weight;
	fn read_peak() -> Weight;
	fn n_items_proof_is_non_canonical(n: u32, ) -> Weight;
}

/// Weights for `pallet_beefy_mmr` using the Substrate node and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> WeightInfo for SubstrateWeight<T> {
	/// Storage: `System::BlockHash` (r:1 w:0)
	/// Proof: `System::BlockHash` (`max_values`: None, `max_size`: Some(44), added: 2519, mode: `MaxEncodedLen`)
	fn extract_validation_context() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `69`
		//  Estimated: `3509`
		// Minimum execution time: 9_257_000 picoseconds.
		Weight::from_parts(9_500_000, 3509)
			.saturating_add(T::DbWeight::get().reads(1_u64))
	}
	/// Storage: `Mmr::Nodes` (r:1 w:0)
	/// Proof: `Mmr::Nodes` (`max_values`: None, `max_size`: Some(40), added: 2515, mode: `MaxEncodedLen`)
	fn read_peak() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `129`
		//  Estimated: `3505`
		// Minimum execution time: 6_216_000 picoseconds.
		Weight::from_parts(6_394_000, 3505)
			.saturating_add(T::DbWeight::get().reads(1_u64))
	}
	/// Storage: `Mmr::RootHash` (r:1 w:0)
	/// Proof: `Mmr::RootHash` (`max_values`: Some(1), `max_size`: Some(32), added: 527, mode: `MaxEncodedLen`)
	/// Storage: `Mmr::NumberOfLeaves` (r:1 w:0)
	/// Proof: `Mmr::NumberOfLeaves` (`max_values`: Some(1), `max_size`: Some(8), added: 503, mode: `MaxEncodedLen`)
	/// The range of component `n` is `[2, 512]`.
	fn n_items_proof_is_non_canonical(n: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `121`
		//  Estimated: `1517`
		// Minimum execution time: 12_165_000 picoseconds.
		Weight::from_parts(22_314_201, 1517)
			// Standard Error: 2_775
			.saturating_add(Weight::from_parts(1_145_769, 0).saturating_mul(n.into()))
			.saturating_add(T::DbWeight::get().reads(2_u64))
	}
}

// For backwards compatibility and tests.
impl WeightInfo for () {
	/// Storage: `System::BlockHash` (r:1 w:0)
	/// Proof: `System::BlockHash` (`max_values`: None, `max_size`: Some(44), added: 2519, mode: `MaxEncodedLen`)
	fn extract_validation_context() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `69`
		//  Estimated: `3509`
		// Minimum execution time: 9_257_000 picoseconds.
		Weight::from_parts(9_500_000, 3509)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
	}
	/// Storage: `Mmr::Nodes` (r:1 w:0)
	/// Proof: `Mmr::Nodes` (`max_values`: None, `max_size`: Some(40), added: 2515, mode: `MaxEncodedLen`)
	fn read_peak() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `129`
		//  Estimated: `3505`
		// Minimum execution time: 6_216_000 picoseconds.
		Weight::from_parts(6_394_000, 3505)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
	}
	/// Storage: `Mmr::RootHash` (r:1 w:0)
	/// Proof: `Mmr::RootHash` (`max_values`: Some(1), `max_size`: Some(32), added: 527, mode: `MaxEncodedLen`)
	/// Storage: `Mmr::NumberOfLeaves` (r:1 w:0)
	/// Proof: `Mmr::NumberOfLeaves` (`max_values`: Some(1), `max_size`: Some(8), added: 503, mode: `MaxEncodedLen`)
	/// The range of component `n` is `[2, 512]`.
	fn n_items_proof_is_non_canonical(n: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `121`
		//  Estimated: `1517`
		// Minimum execution time: 12_165_000 picoseconds.
		Weight::from_parts(22_314_201, 1517)
			// Standard Error: 2_775
			.saturating_add(Weight::from_parts(1_145_769, 0).saturating_mul(n.into()))
			.saturating_add(RocksDbWeight::get().reads(2_u64))
	}
}