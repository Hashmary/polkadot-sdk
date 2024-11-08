// Copyright (C) Parity Technologies (UK) Ltd.
// This file is part of Parity Bridges Common.

// Parity Bridges Common is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity Bridges Common is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity Bridges Common.  If not, see <http://www.gnu.org/licenses/>.

//! Autogenerated weights for pallet_xcm_bridge_hub
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2023-08-03, STEPS: `50`, REPEAT: `20`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `covid`, CPU: `11th Gen Intel(R) Core(TM) i7-11800H @ 2.30GHz`
//! EXECUTION: , WASM-EXECUTION: Compiled, CHAIN: Some("dev"), DB CACHE: 1024

// Executed Command:
// target/release/rip-bridge-node
// benchmark
// pallet
// --chain=dev
// --steps=50
// --repeat=20
// --pallet=pallet_xcm_bridge_hub_router
// --extrinsic=*
// --execution=wasm
// --wasm-execution=Compiled
// --heap-pages=4096
// --output=./modules/xcm-bridge-hub-router/src/weights.rs
// --template=./.maintain/bridge-weight-template.hbs

#![allow(clippy::all)]
#![allow(unused_parens)]
#![allow(unused_imports)]
#![allow(missing_docs)]

use frame_support::{
	traits::Get,
	weights::{constants::RocksDbWeight, Weight},
};
use sp_std::marker::PhantomData;

/// Weight functions needed for pallet_xcm_bridge_hub_router.
pub trait WeightInfo {
	fn open_bridge() -> Weight;
	fn close_bridge() -> Weight;
	fn update_notification_receiver() -> Weight;
}

// For backwards compatibility and tests
impl WeightInfo for () {
	fn open_bridge() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `204`
		//  Estimated: `6070`
		// Minimum execution time: 19_370_000 picoseconds.
		Weight::from_parts(19_928_000, 0)
			.saturating_add(Weight::from_parts(0, 6070))
			.saturating_add(RocksDbWeight::get().reads(2))
			.saturating_add(RocksDbWeight::get().writes(1))
	}
	fn close_bridge() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `204`
		//  Estimated: `6070`
		// Minimum execution time: 20_045_000 picoseconds.
		Weight::from_parts(20_861_000, 0)
			.saturating_add(Weight::from_parts(0, 6070))
			.saturating_add(RocksDbWeight::get().reads(2))
			.saturating_add(RocksDbWeight::get().writes(1))
	}
	fn update_notification_receiver() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `109`
		//  Estimated: `3530`
		// Minimum execution time: 12_179_000 picoseconds.
		Weight::from_parts(12_679_000, 0)
			.saturating_add(Weight::from_parts(0, 3530))
			.saturating_add(RocksDbWeight::get().reads(1))
			.saturating_add(RocksDbWeight::get().writes(1))
	}
}
