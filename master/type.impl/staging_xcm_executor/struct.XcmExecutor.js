(function() {var type_impls = {
"pallet_xcm_benchmarks":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ExecuteXcm%3C%3CConfig+as+Config%3E::RuntimeCall%3E-for-XcmExecutor%3CConfig%3E\" class=\"impl\"><a href=\"#impl-ExecuteXcm%3C%3CConfig+as+Config%3E::RuntimeCall%3E-for-XcmExecutor%3CConfig%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Config&gt; ExecuteXcm&lt;&lt;Config as Config&gt;::RuntimeCall&gt; for XcmExecutor&lt;Config&gt;<div class=\"where\">where\n    Config: Config,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Prepared\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Prepared\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Prepared</a> = WeighedMessage&lt;&lt;Config as Config&gt;::RuntimeCall&gt;</h4></section><section id=\"method.prepare\" class=\"method trait-impl\"><a href=\"#method.prepare\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">prepare</a>(\n    message: Xcm&lt;&lt;Config as Config&gt;::RuntimeCall&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;XcmExecutor&lt;Config&gt; as ExecuteXcm&lt;&lt;Config as Config&gt;::RuntimeCall&gt;&gt;::Prepared, Xcm&lt;&lt;Config as Config&gt;::RuntimeCall&gt;&gt;</h4></section><section id=\"method.execute\" class=\"method trait-impl\"><a href=\"#method.execute\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">execute</a>(\n    origin: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;Location&gt;,\n    _: WeighedMessage&lt;&lt;Config as Config&gt;::RuntimeCall&gt;,\n    id: &amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.array.html\">32</a>],\n    weight_credit: Weight,\n) -&gt; Outcome</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.charge_fees\" class=\"method trait-impl\"><a href=\"#method.charge_fees\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">charge_fees</a>(origin: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;Location&gt;, fees: Assets) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, Error&gt;</h4></section></summary><div class='docblock'>Deduct some <code>fees</code> to the sovereign account of the given <code>location</code> and place them as per\nthe convention for fees.</div></details><section id=\"method.prepare_and_execute\" class=\"method trait-impl\"><a href=\"#method.prepare_and_execute\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">prepare_and_execute</a>(\n    origin: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;Location&gt;,\n    message: Xcm&lt;Call&gt;,\n    id: &amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.array.html\">32</a>],\n    weight_limit: Weight,\n    weight_credit: Weight,\n) -&gt; Outcome</h4></section></div></details>","ExecuteXcm<<Config as Config>::RuntimeCall>","pallet_xcm_benchmarks::ExecutorOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-XcmAssetTransfers-for-XcmExecutor%3CConfig%3E\" class=\"impl\"><a href=\"#impl-XcmAssetTransfers-for-XcmExecutor%3CConfig%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Config&gt; XcmAssetTransfers for XcmExecutor&lt;Config&gt;<div class=\"where\">where\n    Config: Config,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.IsReserve\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.IsReserve\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">IsReserve</a> = &lt;Config as Config&gt;::IsReserve</h4></section></summary><div class='docblock'>Combinations of (Asset, Location) pairs which we trust as reserves. Meaning\nreserve-based-transfers are to be used for assets matching this filter.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.IsTeleporter\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.IsTeleporter\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">IsTeleporter</a> = &lt;Config as Config&gt;::IsTeleporter</h4></section></summary><div class='docblock'>Combinations of (Asset, Location) pairs which we trust as teleporters. Meaning teleports are\nto be used for assets matching this filter.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.AssetTransactor\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.AssetTransactor\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">AssetTransactor</a> = &lt;Config as Config&gt;::AssetTransactor</h4></section></summary><div class='docblock'>How to withdraw and deposit an asset.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.determine_for\" class=\"method trait-impl\"><a href=\"#method.determine_for\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">determine_for</a>(asset: &amp;Asset, dest: &amp;Location) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;TransferType, Error&gt;</h4></section></summary><div class='docblock'>Determine transfer type to be used for transferring <code>asset</code> from local chain to <code>dest</code>.</div></details></div></details>","XcmAssetTransfers","pallet_xcm_benchmarks::ExecutorOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-XcmExecutor%3CConfig%3E\" class=\"impl\"><a href=\"#impl-XcmExecutor%3CConfig%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Config&gt; XcmExecutor&lt;Config&gt;<div class=\"where\">where\n    Config: Config,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.holding\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">holding</a>(&amp;self) -&gt; &amp;AssetsInHolding</h4></section><section id=\"method.set_holding\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_holding</a>(&amp;mut self, v: AssetsInHolding)</h4></section><section id=\"method.holding_limit\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">holding_limit</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.set_holding_limit\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_holding_limit</a>(&amp;mut self, v: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a>)</h4></section><section id=\"method.origin\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">origin</a>(&amp;self) -&gt; &amp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Location&gt;</h4></section><section id=\"method.set_origin\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_origin</a>(&amp;mut self, v: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Location&gt;)</h4></section><section id=\"method.original_origin\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">original_origin</a>(&amp;self) -&gt; &amp;Location</h4></section><section id=\"method.set_original_origin\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_original_origin</a>(&amp;mut self, v: Location)</h4></section><section id=\"method.trader\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">trader</a>(&amp;self) -&gt; &amp;&lt;Config as Config&gt;::Trader</h4></section><section id=\"method.set_trader\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_trader</a>(&amp;mut self, v: &lt;Config as Config&gt;::Trader)</h4></section><section id=\"method.error\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">error</a>(&amp;self) -&gt; &amp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u32.html\">u32</a>, Error)&gt;</h4></section><section id=\"method.set_error\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_error</a>(&amp;mut self, v: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u32.html\">u32</a>, Error)&gt;)</h4></section><section id=\"method.total_surplus\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">total_surplus</a>(&amp;self) -&gt; &amp;Weight</h4></section><section id=\"method.set_total_surplus\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_total_surplus</a>(&amp;mut self, v: Weight)</h4></section><section id=\"method.total_refunded\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">total_refunded</a>(&amp;self) -&gt; &amp;Weight</h4></section><section id=\"method.set_total_refunded\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_total_refunded</a>(&amp;mut self, v: Weight)</h4></section><section id=\"method.error_handler\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">error_handler</a>(&amp;self) -&gt; &amp;Xcm&lt;&lt;Config as Config&gt;::RuntimeCall&gt;</h4></section><section id=\"method.set_error_handler\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_error_handler</a>(&amp;mut self, v: Xcm&lt;&lt;Config as Config&gt;::RuntimeCall&gt;)</h4></section><section id=\"method.error_handler_weight\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">error_handler_weight</a>(&amp;self) -&gt; &amp;Weight</h4></section><section id=\"method.set_error_handler_weight\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_error_handler_weight</a>(&amp;mut self, v: Weight)</h4></section><section id=\"method.appendix\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">appendix</a>(&amp;self) -&gt; &amp;Xcm&lt;&lt;Config as Config&gt;::RuntimeCall&gt;</h4></section><section id=\"method.set_appendix\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_appendix</a>(&amp;mut self, v: Xcm&lt;&lt;Config as Config&gt;::RuntimeCall&gt;)</h4></section><section id=\"method.appendix_weight\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">appendix_weight</a>(&amp;self) -&gt; &amp;Weight</h4></section><section id=\"method.set_appendix_weight\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_appendix_weight</a>(&amp;mut self, v: Weight)</h4></section><section id=\"method.transact_status\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">transact_status</a>(&amp;self) -&gt; &amp;MaybeErrorCode</h4></section><section id=\"method.set_transact_status\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_transact_status</a>(&amp;mut self, v: MaybeErrorCode)</h4></section><section id=\"method.fees_mode\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">fees_mode</a>(&amp;self) -&gt; &amp;FeesMode</h4></section><section id=\"method.set_fees_mode\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_fees_mode</a>(&amp;mut self, v: FeesMode)</h4></section><section id=\"method.fees\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">fees</a>(&amp;self) -&gt; &amp;AssetsInHolding</h4></section><section id=\"method.set_fees\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_fees</a>(&amp;mut self, value: AssetsInHolding)</h4></section><section id=\"method.topic\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">topic</a>(&amp;self) -&gt; &amp;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.array.html\">32</a>]&gt;</h4></section><section id=\"method.set_topic\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_topic</a>(&amp;mut self, v: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.array.html\">32</a>]&gt;)</h4></section><section id=\"method.asset_claimer\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">asset_claimer</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Location&gt;</h4></section><section id=\"method.set_message_weight\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">set_message_weight</a>(&amp;mut self, weight: Weight)</h4></section></div></details>",0,"pallet_xcm_benchmarks::ExecutorOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-XcmExecutor%3CConfig%3E\" class=\"impl\"><a href=\"#impl-XcmExecutor%3CConfig%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Config&gt; XcmExecutor&lt;Config&gt;<div class=\"where\">where\n    Config: Config,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(\n    origin: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;Location&gt;,\n    message_id: [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.array.html\">32</a>],\n) -&gt; XcmExecutor&lt;Config&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.post_process\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">post_process</a>(self, xcm_weight: Weight) -&gt; Outcome</h4></section></summary><div class=\"docblock\"><p>Execute any final operations after having executed the XCM message.\nThis includes refunding surplus weight, trapping extra holding funds, and returning any\nerrors during execution.</p>\n</div></details><section id=\"method.bench_process\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">bench_process</a>(\n    &amp;mut self,\n    xcm: Xcm&lt;&lt;Config as Config&gt;::RuntimeCall&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, ExecutorError&gt;</h4></section><section id=\"method.bench_post_process\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">bench_post_process</a>(self, xcm_weight: Weight) -&gt; Outcome</h4></section></div></details>",0,"pallet_xcm_benchmarks::ExecutorOf"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()