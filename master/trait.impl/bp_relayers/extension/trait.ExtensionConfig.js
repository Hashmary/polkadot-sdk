(function() {var implementors = {
"pallet_bridge_relayers":[["impl&lt;ID, R, BCU, GI, MI, RI, P&gt; ExtensionConfig for <a class=\"struct\" href=\"pallet_bridge_relayers/extension/struct.WithGrandpaChainExtensionConfig.html\" title=\"struct pallet_bridge_relayers::extension::WithGrandpaChainExtensionConfig\">WithGrandpaChainExtensionConfig</a>&lt;ID, R, BCU, GI, MI, RI, P&gt;<div class=\"where\">where\n    ID: StaticStrProvider,\n    R: <a class=\"trait\" href=\"pallet_bridge_relayers/pallet/trait.Config.html\" title=\"trait pallet_bridge_relayers::pallet::Config\">BridgeRelayersConfig</a>&lt;RI&gt; + BridgeMessagesConfig&lt;MI, BridgedChain = BridgedChain&lt;R, GI&gt;&gt; + BridgeGrandpaConfig&lt;GI&gt;,\n    BCU: BatchCallUnpacker&lt;R&gt;,\n    GI: 'static,\n    MI: 'static,\n    RI: 'static,\n    P: Get&lt;TransactionPriority&gt;,\n    R::RuntimeCall: Dispatchable&lt;Info = DispatchInfo, PostInfo = PostDispatchInfo&gt; + BridgeGrandpaCallSubtype&lt;R, GI&gt; + BridgeMessagesCallSubType&lt;R, MI&gt;,</div>"],["impl&lt;ID, R, BCU, PI, MI, RI, P&gt; ExtensionConfig for <a class=\"struct\" href=\"pallet_bridge_relayers/extension/struct.WithParachainExtensionConfig.html\" title=\"struct pallet_bridge_relayers::extension::WithParachainExtensionConfig\">WithParachainExtensionConfig</a>&lt;ID, R, BCU, PI, MI, RI, P&gt;<div class=\"where\">where\n    ID: StaticStrProvider,\n    R: <a class=\"trait\" href=\"pallet_bridge_relayers/pallet/trait.Config.html\" title=\"trait pallet_bridge_relayers::pallet::Config\">BridgeRelayersConfig</a>&lt;RI&gt; + BridgeMessagesConfig&lt;MI&gt; + BridgeParachainsConfig&lt;PI&gt; + BridgeGrandpaConfig&lt;R::BridgesGrandpaPalletInstance&gt;,\n    BCU: BatchCallUnpacker&lt;R&gt;,\n    PI: 'static,\n    MI: 'static,\n    RI: 'static,\n    P: Get&lt;TransactionPriority&gt;,\n    R::RuntimeCall: Dispatchable&lt;Info = DispatchInfo, PostInfo = PostDispatchInfo&gt; + BridgeGrandpaCallSubtype&lt;R, R::BridgesGrandpaPalletInstance&gt; + BridgeParachainsCallSubtype&lt;R, PI&gt; + BridgeMessagesCallSubType&lt;R, MI&gt;,\n    &lt;R as BridgeMessagesConfig&lt;MI&gt;&gt;::BridgedChain: Parachain,</div>"],["impl&lt;ID, R, MI, RI, P&gt; ExtensionConfig for <a class=\"struct\" href=\"pallet_bridge_relayers/extension/struct.WithMessagesExtensionConfig.html\" title=\"struct pallet_bridge_relayers::extension::WithMessagesExtensionConfig\">WithMessagesExtensionConfig</a>&lt;ID, R, MI, RI, P&gt;<div class=\"where\">where\n    ID: StaticStrProvider,\n    R: <a class=\"trait\" href=\"pallet_bridge_relayers/pallet/trait.Config.html\" title=\"trait pallet_bridge_relayers::pallet::Config\">BridgeRelayersConfig</a>&lt;RI&gt; + BridgeMessagesConfig&lt;MI&gt;,\n    MI: 'static,\n    RI: 'static,\n    P: Get&lt;TransactionPriority&gt;,\n    R::RuntimeCall: Dispatchable&lt;Info = DispatchInfo, PostInfo = PostDispatchInfo&gt; + BridgeMessagesCallSubType&lt;R, MI&gt;,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()