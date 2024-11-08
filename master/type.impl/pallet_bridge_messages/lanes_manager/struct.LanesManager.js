(function() {var type_impls = {
"bridge_hub_test_utils":[],
"pallet_xcm_bridge_hub":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-LanesManager%3CT,+I%3E\" class=\"impl\"><a href=\"#impl-Default-for-LanesManager%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for LanesManager&lt;T, I&gt;<div class=\"where\">where\n    T: Config&lt;I&gt;,\n    I: 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; LanesManager&lt;T, I&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","pallet_xcm_bridge_hub::pallet::LanesManagerOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LanesManager%3CT,+I%3E\" class=\"impl\"><a href=\"#impl-LanesManager%3CT,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I&gt; LanesManager&lt;T, I&gt;<div class=\"where\">where\n    T: Config&lt;I&gt;,\n    I: 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>() -&gt; LanesManager&lt;T, I&gt;</h4></section></summary><div class=\"docblock\"><p>Create new lanes manager.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_inbound_lane\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">create_inbound_lane</a>(\n    &amp;self,\n    lane_id: &lt;T as Config&lt;I&gt;&gt;::LaneId,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;InboundLane&lt;RuntimeInboundLaneStorage&lt;T, I&gt;&gt;, LanesManagerError&gt;</h4></section></summary><div class=\"docblock\"><p>Create new inbound lane in <code>Opened</code> state.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_outbound_lane\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">create_outbound_lane</a>(\n    &amp;self,\n    lane_id: &lt;T as Config&lt;I&gt;&gt;::LaneId,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;OutboundLane&lt;RuntimeOutboundLaneStorage&lt;T, I&gt;&gt;, LanesManagerError&gt;</h4></section></summary><div class=\"docblock\"><p>Create new outbound lane in <code>Opened</code> state.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.active_inbound_lane\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">active_inbound_lane</a>(\n    &amp;self,\n    lane_id: &lt;T as Config&lt;I&gt;&gt;::LaneId,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;InboundLane&lt;RuntimeInboundLaneStorage&lt;T, I&gt;&gt;, LanesManagerError&gt;</h4></section></summary><div class=\"docblock\"><p>Get existing inbound lane, checking that it is in usable state.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.active_outbound_lane\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">active_outbound_lane</a>(\n    &amp;self,\n    lane_id: &lt;T as Config&lt;I&gt;&gt;::LaneId,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;OutboundLane&lt;RuntimeOutboundLaneStorage&lt;T, I&gt;&gt;, LanesManagerError&gt;</h4></section></summary><div class=\"docblock\"><p>Get existing outbound lane, checking that it is in usable state.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.any_state_inbound_lane\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">any_state_inbound_lane</a>(\n    &amp;self,\n    lane_id: &lt;T as Config&lt;I&gt;&gt;::LaneId,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;InboundLane&lt;RuntimeInboundLaneStorage&lt;T, I&gt;&gt;, LanesManagerError&gt;</h4></section></summary><div class=\"docblock\"><p>Get existing inbound lane without any additional state checks.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.any_state_outbound_lane\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">any_state_outbound_lane</a>(\n    &amp;self,\n    lane_id: &lt;T as Config&lt;I&gt;&gt;::LaneId,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;OutboundLane&lt;RuntimeOutboundLaneStorage&lt;T, I&gt;&gt;, LanesManagerError&gt;</h4></section></summary><div class=\"docblock\"><p>Get existing outbound lane without any additional state checks.</p>\n</div></details></div></details>",0,"pallet_xcm_bridge_hub::pallet::LanesManagerOf"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()