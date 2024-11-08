(function() {var type_impls = {
"pallet_revive_eth_rpc":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Config-for-SrcChainConfig\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_revive_eth_rpc/subxt_client.rs.html#38-59\">source</a><a href=\"#impl-Config-for-SrcChainConfig\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Config for <a class=\"enum\" href=\"pallet_revive_eth_rpc/subxt_client/enum.SrcChainConfig.html\" title=\"enum pallet_revive_eth_rpc::subxt_client::SrcChainConfig\">SrcChainConfig</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Hash\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Hash\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Hash</a> = H256</h4></section></summary><div class='docblock'>The output of the <code>Hasher</code> function.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.AccountId\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.AccountId\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">AccountId</a> = &lt;PolkadotConfig as Config&gt;::AccountId</h4></section></summary><div class='docblock'>The account ID type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Address\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Address\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Address</a> = &lt;PolkadotConfig as Config&gt;::Address</h4></section></summary><div class='docblock'>The address type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Signature\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Signature\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Signature</a> = &lt;PolkadotConfig as Config&gt;::Signature</h4></section></summary><div class='docblock'>The signature type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Hasher\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Hasher\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Hasher</a> = <a class=\"struct\" href=\"pallet_revive_eth_rpc/subxt_client/struct.BlakeTwo256.html\" title=\"struct pallet_revive_eth_rpc::subxt_client::BlakeTwo256\">BlakeTwo256</a></h4></section></summary><div class='docblock'>The hashing system (algorithm) being used in the runtime (e.g. Blake2).</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Header\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Header\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Header</a> = SubstrateHeader&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u32.html\">u32</a>, <a class=\"struct\" href=\"pallet_revive_eth_rpc/subxt_client/struct.BlakeTwo256.html\" title=\"struct pallet_revive_eth_rpc::subxt_client::BlakeTwo256\">BlakeTwo256</a>&gt;</h4></section></summary><div class='docblock'>The block header.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.AssetId\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.AssetId\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">AssetId</a> = &lt;PolkadotConfig as Config&gt;::AssetId</h4></section></summary><div class='docblock'>This is used to identify an asset in the <code>ChargeAssetTxPayment</code> signed extension.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.ExtrinsicParams\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.ExtrinsicParams\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">ExtrinsicParams</a> = AnyOf&lt;<a class=\"enum\" href=\"pallet_revive_eth_rpc/subxt_client/enum.SrcChainConfig.html\" title=\"enum pallet_revive_eth_rpc::subxt_client::SrcChainConfig\">SrcChainConfig</a>, (CheckSpecVersion, CheckTxVersion, CheckNonce, CheckGenesis&lt;<a class=\"enum\" href=\"pallet_revive_eth_rpc/subxt_client/enum.SrcChainConfig.html\" title=\"enum pallet_revive_eth_rpc::subxt_client::SrcChainConfig\">SrcChainConfig</a>&gt;, CheckMortality&lt;<a class=\"enum\" href=\"pallet_revive_eth_rpc/subxt_client/enum.SrcChainConfig.html\" title=\"enum pallet_revive_eth_rpc::subxt_client::SrcChainConfig\">SrcChainConfig</a>&gt;, ChargeAssetTxPayment&lt;<a class=\"enum\" href=\"pallet_revive_eth_rpc/subxt_client/enum.SrcChainConfig.html\" title=\"enum pallet_revive_eth_rpc::subxt_client::SrcChainConfig\">SrcChainConfig</a>&gt;, ChargeTransactionPayment, CheckMetadataHash)&gt;</h4></section></summary><div class='docblock'>This type defines the extrinsic extra and additional parameters.</div></details></div></details>","Config","pallet_revive_eth_rpc::client::SubstrateBlockNumber","pallet_revive_eth_rpc::client::SubstrateBlockHash"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()