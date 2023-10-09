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

#![cfg_attr(not(feature = "std"), no_std)]

use core::marker::PhantomData;

use frame_support::dispatch::DispatchResult;
// Re-export pallet items so that they can be accessed from the crate namespace.
pub use pallet::*;
use sp_runtime::DispatchError;

pub mod mock;
pub mod tests;

#[frame_support::pallet(dev_mode)]
pub mod pallet {

	use super::*;
	use frame_support::pallet_prelude::*;
	use frame_system::pallet_prelude::*;

	// this can be auto-generated from the macros
	#[derive(
		Clone,
		PartialEq,
		Eq,
		frame_support::pallet_prelude::Encode,
		frame_support::pallet_prelude::Decode,
		frame_support::pallet_prelude::TypeInfo,
	)]
	pub enum Task<T: Config> {
		Increment,
		Decrement,
		#[doc(hidden)]
		#[codec(skip)]
		__Ignore(PhantomData<T>, frame_support::Never),
	}

	// this can be auto-generated from the macros and will always be the same
	impl<T: Config> core::fmt::Debug for Task<T> {
		fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
			f.debug_struct("Task").field("value", self).finish()
		}
	}

	// we can automatically inject `InvalidTask` into an existing Error enum by finding it via
	// visitor pattern, otherwise we can just emit an error enum containing just our
	// `InvalidTask` variant. Alternatively we could just expect that `InvalidTask` is included
	// in the error enum, by convention, or we could use something like
	// `InvalidTransaction::Custom(1u8)` but this seems bad to me.
	#[pallet::error]
	pub enum Error<T> {
		InvalidTask,
		ValueOverflow,
		ValueUnderflow,
	}

	// this will be auto-generated from `#[pallet::tasks]`
	impl<T: Config> frame_support::traits::Task for Task<T>
	where
		T: TypeInfo,
	{
		type Enumeration = sp_std::vec::IntoIter<Task<T>>;

		fn iter() -> Self::Enumeration {
			sp_std::vec![Task::Increment, Task::Decrement].into_iter()
		}

		fn task_index(&self) -> u32 {
			match self {
				Task::Increment => 1,
				Task::Decrement => 2,
				Task::__Ignore(_, _) => unreachable!(),
			}
		}

		fn is_valid(&self) -> bool {
			let value = Value::<T>::get().unwrap();
			match self {
				Task::Increment => value < 255,
				Task::Decrement => value > 0,
				Task::__Ignore(_, _) => unreachable!(),
			}
		}

		fn run(&self) -> Result<(), DispatchError> {
			match self {
				Task::Increment => {
					// Get the value and check if it can be incremented
					let value = Value::<T>::get().unwrap_or_default();
					if value >= 255 {
						Err(Error::<T>::ValueOverflow.into())
					} else {
						let new_val = value.checked_add(1).ok_or(Error::<T>::ValueOverflow)?;
						Value::<T>::put(new_val);
						Pallet::<T>::deposit_event(Event::Incremented { new_val });
						Ok(())
					}
				},
				Task::Decrement => {
					// Get the value and check if it can be decremented
					let value = Value::<T>::get().unwrap_or_default();
					if value == 0 {
						Err(Error::<T>::ValueUnderflow.into())
					} else {
						let new_val = value.checked_sub(1).ok_or(Error::<T>::ValueUnderflow)?;
						Value::<T>::put(new_val);
						Pallet::<T>::deposit_event(Event::Decremented { new_val });
						Ok(())
					}
				},
				Task::__Ignore(_, _) => unreachable!(),
			}
		}

		fn weight(&self) -> Weight {
			Weight::default()
		}
	}

	#[pallet::config]
	pub trait Config: frame_system::Config {
		type RuntimeEvent: From<Event<Self>> + IsType<<Self as frame_system::Config>::RuntimeEvent>;
		type RuntimeTask: frame_support::traits::Task;
	}

	#[pallet::pallet]
	pub struct Pallet<T>(_);

	#[pallet::storage]
	#[pallet::getter(fn value)]
	pub type Value<T: Config> = StorageValue<_, u8>;

	#[pallet::call]
	impl<T: Config> Pallet<T>
	where
		T: TypeInfo,
	{
		pub fn increment(origin: OriginFor<T>) -> DispatchResult {
			ensure_root(origin)?;

			// Increment the value and emit an event
			let new_val = Value::<T>::get().unwrap_or(0).checked_add(1).ok_or("Value overflow")?;
			Value::<T>::put(new_val);
			Self::deposit_event(Event::Incremented { new_val });

			Ok(())
		}

		pub fn decrement(origin: OriginFor<T>) -> DispatchResult {
			ensure_root(origin)?;

			// Decrement the value and emit an event
			let new_val = Value::<T>::get().unwrap_or(0).checked_sub(1).ok_or("Value underflow")?;
			Value::<T>::put(new_val);
			Self::deposit_event(Event::Decremented { new_val });

			Ok(())
		}

		// this will be auto-generated by the macros and will always be the same
		pub fn do_task(origin: OriginFor<T>, task: crate::pallet::Task<T>) -> DispatchResult {
			use frame_support::traits::Task;
			ensure_root(origin)?;
			if task.is_valid() {
				task.run()
			} else {
				Err(Error::<T>::InvalidTask.into())
			}
		}
	}

	#[pallet::event]
	#[pallet::generate_deposit(pub(super) fn deposit_event)]
	pub enum Event<T: Config> {
		Incremented { new_val: u8 },
		Decremented { new_val: u8 },
	}
}
