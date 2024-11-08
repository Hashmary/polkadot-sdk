searchState.loadedDescShard("bp_xcm_bridge_hub", 0, "Primitives of the xcm-bridge-hub pallet.\nBridge metadata.\nBridge identifier - used <strong>only</strong> for communicating with …\nLocations of bridge endpoints at both sides of the bridge.\nErrors that may happen when we check bridge locations.\nBridge state.\nBridge is closed. Associated lanes are also closed. After …\nDestination location is within the same global consensus.\nError that may be returned when suspending/resuming the …\nBridge destination is not supported (in general).\nBridge origin location is not supported.\nLocal XCM channel manager.\nOrigin or destination locations are not universal.\nBridge is opened. Associated lanes are also opened.\nBridge is suspended. Associated lanes are opened.\nDestination network is not the network we are bridged with.\nDestination location is unsupported. We only support …\nThe <code>LaneIdType</code> generator is not supported.\nThe version of XCM location argument is unsupported.\nEncoded XCM blob. We expect the bridge messages pallet to …\nA minimized version of <code>pallet_xcm_bridge_hub::Call</code> that …\nGetter for <code>bridge_destination_universal_location</code>\nSee <code>BridgeLocations::bridge_destination_universal_location</code>.\nGetter for <code>bridge_id</code>\nGiven XCM locations, generate lane id and universal …\nGetter for <code>bridge_origin_relative_location</code>\nRelative location of the bridge origin chain. This is …\nGetter for <code>bridge_origin_universal_location</code>\nSee <code>BridgeLocations::bridge_origin_universal_location</code>. …\nAccount with the reserved funds. Derived from …\nGenerates the exact same <code>LaneId</code> on the both bridge hubs.\n<code>pallet_xcm_bridge_hub::Call::close_bridge</code>\nReserved amount on the sovereign account of the sibling …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if the channel with given location is …\nMapping to the unique <code>LaneId</code>.\nCreate bridge identifier from two universal locations.\n<code>pallet_xcm_bridge_hub::Call::open_bridge</code>\nResume the previously suspended bridge, opened by given …\nCurrent bridge state.\nSuspend the bridge, opened by given origin.\nUniversal <code>InteriorLocation</code> from the bridged consensus.\nUniversal <code>InteriorLocation</code> from the bridged consensus.\nThe number of messages that we may prune in a single call.")