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

//! Autogenerated weights for `pallet_election_provider_support_benchmarking`
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
// --pallet=pallet_election_provider_support_benchmarking
// --header=/__w/polkadot-sdk/polkadot-sdk/substrate/HEADER-APACHE2
// --output=/__w/polkadot-sdk/polkadot-sdk/substrate/frame/election-provider-support/benchmarking/src/weights.rs
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

/// Weight functions needed for `pallet_election_provider_support_benchmarking`.
pub trait WeightInfo {
	fn phragmen(v: u32, t: u32, d: u32, ) -> Weight;
	fn phragmms(v: u32, t: u32, d: u32, ) -> Weight;
}

/// Weights for `pallet_election_provider_support_benchmarking` using the Substrate node and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> WeightInfo for SubstrateWeight<T> {
	/// The range of component `v` is `[1000, 2000]`.
	/// The range of component `t` is `[500, 1000]`.
	/// The range of component `d` is `[5, 16]`.
	fn phragmen(v: u32, _t: u32, d: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 9_372_991_000 picoseconds.
		Weight::from_parts(9_428_531_000, 0)
			// Standard Error: 191_606
			.saturating_add(Weight::from_parts(8_025_828, 0).saturating_mul(v.into()))
			// Standard Error: 19_589_114
			.saturating_add(Weight::from_parts(1_997_875_350, 0).saturating_mul(d.into()))
	}
	/// The range of component `v` is `[1000, 2000]`.
	/// The range of component `t` is `[500, 1000]`.
	/// The range of component `d` is `[5, 16]`.
	fn phragmms(v: u32, _t: u32, d: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 6_118_210_000 picoseconds.
		Weight::from_parts(6_158_573_000, 0)
			// Standard Error: 160_262
			.saturating_add(Weight::from_parts(6_368_310, 0).saturating_mul(v.into()))
			// Standard Error: 16_384_656
			.saturating_add(Weight::from_parts(1_823_963_309, 0).saturating_mul(d.into()))
	}
}

// For backwards compatibility and tests.
impl WeightInfo for () {
	/// The range of component `v` is `[1000, 2000]`.
	/// The range of component `t` is `[500, 1000]`.
	/// The range of component `d` is `[5, 16]`.
	fn phragmen(v: u32, _t: u32, d: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 9_372_991_000 picoseconds.
		Weight::from_parts(9_428_531_000, 0)
			// Standard Error: 191_606
			.saturating_add(Weight::from_parts(8_025_828, 0).saturating_mul(v.into()))
			// Standard Error: 19_589_114
			.saturating_add(Weight::from_parts(1_997_875_350, 0).saturating_mul(d.into()))
	}
	/// The range of component `v` is `[1000, 2000]`.
	/// The range of component `t` is `[500, 1000]`.
	/// The range of component `d` is `[5, 16]`.
	fn phragmms(v: u32, _t: u32, d: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 6_118_210_000 picoseconds.
		Weight::from_parts(6_158_573_000, 0)
			// Standard Error: 160_262
			.saturating_add(Weight::from_parts(6_368_310, 0).saturating_mul(v.into()))
			// Standard Error: 16_384_656
			.saturating_add(Weight::from_parts(1_823_963_309, 0).saturating_mul(d.into()))
	}
}