(function() {var type_impls = {
"asset_hub_rococo_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ContainsPair%3CAsset,+Location%3E-for-IsTrustedBridgedReserveLocationForConcreteAsset%3CUniversalLocation,+Reserves%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/assets_common/matching.rs.html#103-105\">source</a><a href=\"#impl-ContainsPair%3CAsset,+Location%3E-for-IsTrustedBridgedReserveLocationForConcreteAsset%3CUniversalLocation,+Reserves%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;UniversalLocation, Reserves&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, <a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt; for <a class=\"struct\" href=\"assets_common/matching/struct.IsTrustedBridgedReserveLocationForConcreteAsset.html\" title=\"struct assets_common::matching::IsTrustedBridgedReserveLocationForConcreteAsset\">IsTrustedBridgedReserveLocationForConcreteAsset</a>&lt;UniversalLocation, Reserves&gt;<span class=\"where fmt-newline\">where\n    UniversalLocation: Get&lt;<a class=\"enum\" href=\"staging_xcm/v4/junctions/enum.Junctions.html\" title=\"enum staging_xcm::v4::junctions::Junctions\">Junctions</a>&gt;,\n    Reserves: <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, <a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.contains\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/assets_common/matching.rs.html#107\">source</a><a href=\"#method.contains\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/traits/members/trait.ContainsPair.html#tymethod.contains\" class=\"fn\">contains</a>(asset: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, origin: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Return <code>true</code> if this “contains” the pair-value <code>(a, b)</code>.</div></details></div></details>","ContainsPair<Asset, Location>","asset_hub_rococo_runtime::xcm_config::bridging::to_westend::IsTrustedBridgedReserveLocationForConcreteAsset"]],
"asset_hub_westend_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ContainsPair%3CAsset,+Location%3E-for-IsTrustedBridgedReserveLocationForConcreteAsset%3CUniversalLocation,+Reserves%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/assets_common/matching.rs.html#103-105\">source</a><a href=\"#impl-ContainsPair%3CAsset,+Location%3E-for-IsTrustedBridgedReserveLocationForConcreteAsset%3CUniversalLocation,+Reserves%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;UniversalLocation, Reserves&gt; <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, <a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt; for <a class=\"struct\" href=\"assets_common/matching/struct.IsTrustedBridgedReserveLocationForConcreteAsset.html\" title=\"struct assets_common::matching::IsTrustedBridgedReserveLocationForConcreteAsset\">IsTrustedBridgedReserveLocationForConcreteAsset</a>&lt;UniversalLocation, Reserves&gt;<span class=\"where fmt-newline\">where\n    UniversalLocation: Get&lt;<a class=\"enum\" href=\"staging_xcm/v4/junctions/enum.Junctions.html\" title=\"enum staging_xcm::v4::junctions::Junctions\">Junctions</a>&gt;,\n    Reserves: <a class=\"trait\" href=\"frame_support/traits/members/trait.ContainsPair.html\" title=\"trait frame_support::traits::members::ContainsPair\">ContainsPair</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, <a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.contains\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/assets_common/matching.rs.html#107\">source</a><a href=\"#method.contains\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame_support/traits/members/trait.ContainsPair.html#tymethod.contains\" class=\"fn\">contains</a>(asset: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, origin: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Return <code>true</code> if this “contains” the pair-value <code>(a, b)</code>.</div></details></div></details>","ContainsPair<Asset, Location>","asset_hub_westend_runtime::xcm_config::bridging::to_rococo::IsTrustedBridgedReserveLocationForConcreteAsset"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()