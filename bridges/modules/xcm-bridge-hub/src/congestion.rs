// Copyright 2019-2021 Parity Technologies (UK) Ltd.
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

//! The module contains utilities for handling congestion between the bridge hub and routers.

use sp_std::vec::Vec;
use sp_std::marker::PhantomData;
use codec::Encode;
use bp_xcm_bridge_hub::{BridgeId, LocalXcmChannelManager, Receiver};
use sp_runtime::traits::Convert;
use xcm::latest::{send_xcm, Location, SendXcm, Xcm};
use crate::{Config, Bridges, LOG_TARGET};

/// Switches the implementation of `LocalXcmChannelManager` based on the `local_origin`.
///
/// - `HereXcmChannelManager` is applied when the origin is `Here`.
/// - Otherwise, `LocalConsensusXcmChannelManager` is used.
///
/// This is useful when the `pallet-xcm-bridge-hub` needs to support both:
/// - A local router deployed on the same chain as the `pallet-xcm-bridge-hub`.
/// - A remote router deployed on a different chain than the `pallet-xcm-bridge-hub`.
pub struct HereOrLocalConsensusXcmChannelManager<Bridge, HereXcmChannelManager, LocalConsensusXcmChannelManager>(PhantomData<(Bridge, HereXcmChannelManager, LocalConsensusXcmChannelManager)>);
impl<Bridge: Encode + sp_std::fmt::Debug + Copy, HereXcmChannelManager: LocalXcmChannelManager<Bridge>, LocalConsensusXcmChannelManager: LocalXcmChannelManager<Bridge>> LocalXcmChannelManager<Bridge>
for HereOrLocalConsensusXcmChannelManager<Bridge, HereXcmChannelManager, LocalConsensusXcmChannelManager> {
    type Error = ();

    fn suspend_bridge(local_origin: &Location, bridge: Bridge) -> Result<(), Self::Error> {
        if local_origin.eq(&Location::here()) {
            HereXcmChannelManager::suspend_bridge(local_origin, bridge).map_err(|e| {
                log::error!(
                    target: LOG_TARGET,
					"HereXcmChannelManager::suspend_bridge error: {e:?} for local_origin: {:?} and bridge: {:?}",
					local_origin,
					bridge,
				);
                ()
            })
        } else {
            LocalConsensusXcmChannelManager::suspend_bridge(local_origin, bridge).map_err(|e| {
                log::error!(
                    target: LOG_TARGET,
					"LocalConsensusXcmChannelManager::suspend_bridge error: {e:?} for local_origin: {:?} and bridge: {:?}",
					local_origin,
					bridge,
				);
                ()
            })
        }
    }

    fn resume_bridge(local_origin: &Location, bridge: Bridge) -> Result<(), Self::Error> {
        if local_origin.eq(&Location::here()) {
            HereXcmChannelManager::resume_bridge(local_origin, bridge).map_err(|e| {
                log::error!(
                    target: LOG_TARGET,
					"HereXcmChannelManager::resume_bridge error: {e:?} for local_origin: {:?} and bridge: {:?}",
					local_origin,
					bridge,
				);
                ()
            })
        } else {
            LocalConsensusXcmChannelManager::resume_bridge(local_origin, bridge).map_err(|e| {
                log::error!(
                    target: LOG_TARGET,
					"LocalConsensusXcmChannelManager::resume_bridge error: {e:?} for local_origin: {:?} and bridge: {:?}",
					local_origin,
					bridge,
				);
                ()
            })
        }
    }
}

/// Manages the local XCM channels by sending XCM messages with the `report_bridge_status` extrinsic to the `local_origin`.
/// The `XcmProvider` type converts the encoded call to `XCM`, which is then sent by `XcmSender` to the `local_origin`.
/// This is useful, for example, when a router with `ExportMessage` is deployed on a different chain, and we want to control congestion by sending XCMs.
pub struct ReportBridgeStatusXcmChannelManager<T, I, XcmProvider, XcmSender>(PhantomData<(T, I, XcmProvider, XcmSender)>);
impl<T: Config<I>, I: 'static, XcmProvider: Convert<Vec<u8>, Xcm<()>>, XcmSender: SendXcm> ReportBridgeStatusXcmChannelManager<T, I, XcmProvider, XcmSender> {
    fn report_bridge_status(local_origin: &Location, bridge_id: BridgeId, is_congested: bool) -> Result<(), ()> {
        // check the bridge and get `maybe_notify` callback.
        let bridge = Bridges::<T, I>::get(&bridge_id).ok_or(())?;
        let Some(Receiver { pallet_index, call_index }) = bridge.maybe_notify else {
            // `local_origin` did not set `maybe_notify`, so nothing to notify, so it is ok.
            return Ok(())
        };

        // constructing expected call
        let remote_runtime_call = (pallet_index, call_index, bridge_id, is_congested);
        // construct XCM
        let xcm = XcmProvider::convert(remote_runtime_call.encode());
        log::trace!(
            target: LOG_TARGET,
			"ReportBridgeStatusXcmChannelManager is going to send status with is_congested: {:?} to the local_origin: {:?} and bridge: {:?} as xcm: {:?}",
            is_congested,
			local_origin,
		    bridge,
            xcm,
        );

        // send XCM
        send_xcm::<XcmSender>(local_origin.clone(), xcm)
            .map(|result| {
                log::warn!(
                    target: LOG_TARGET,
					"ReportBridgeStatusXcmChannelManager successfully sent status with is_congested: {:?} to the local_origin: {:?} and bridge: {:?} with result: {:?}",
                    is_congested,
					local_origin,
					bridge,
                    result,
				);
                ()
            })
            .map_err(|e| {
                log::error!(
                    target: LOG_TARGET,
					"ReportBridgeStatusXcmChannelManager failed to send status with is_congested: {:?} to the local_origin: {:?} and bridge: {:?} with error: {:?}",
                    is_congested,
					local_origin,
					bridge,
                    e,
				);
                ()
            })
    }
}
impl<T: Config<I>, I: 'static, XcmProvider: Convert<Vec<u8>, Xcm<()>>, XcmSender: SendXcm> LocalXcmChannelManager<BridgeId> for ReportBridgeStatusXcmChannelManager<T, I, XcmProvider, XcmSender> {
    type Error = ();

    fn suspend_bridge(local_origin: &Location, bridge: BridgeId) -> Result<(), Self::Error> {
        Self::report_bridge_status(local_origin, bridge, true)
    }

    fn resume_bridge(local_origin: &Location, bridge: BridgeId) -> Result<(), Self::Error> {
        Self::report_bridge_status(local_origin, bridge, false)
    }
}
