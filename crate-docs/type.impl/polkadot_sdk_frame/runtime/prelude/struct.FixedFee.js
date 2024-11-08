(function() {var type_impls = {
"polkadot_sdk_frame":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-WeightToFee-for-FixedFee%3CF,+T%3E\" class=\"impl\"><a href=\"#impl-WeightToFee-for-FixedFee%3CF,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const F: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>, T&gt; <a class=\"trait\" href=\"polkadot_sdk_frame/runtime/prelude/weights/trait.WeightToFee.html\" title=\"trait polkadot_sdk_frame::runtime::prelude::weights::WeightToFee\">WeightToFee</a> for <a class=\"struct\" href=\"polkadot_sdk_frame/runtime/prelude/struct.FixedFee.html\" title=\"struct polkadot_sdk_frame::runtime::prelude::FixedFee\">FixedFee</a>&lt;F, T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"polkadot_sdk_frame/arithmetic/traits/trait.BaseArithmetic.html\" title=\"trait polkadot_sdk_frame::arithmetic::traits::BaseArithmetic\">BaseArithmetic</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"polkadot_sdk_frame/arithmetic/traits/trait.Unsigned.html\" title=\"trait polkadot_sdk_frame::arithmetic::traits::Unsigned\">Unsigned</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Balance\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Balance\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polkadot_sdk_frame/runtime/prelude/weights/trait.WeightToFee.html#associatedtype.Balance\" class=\"associatedtype\">Balance</a> = T</h4></section></summary><div class='docblock'>The type that is returned as result from calculation.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.weight_to_fee\" class=\"method trait-impl\"><a href=\"#method.weight_to_fee\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_sdk_frame/runtime/prelude/weights/trait.WeightToFee.html#tymethod.weight_to_fee\" class=\"fn\">weight_to_fee</a>(_: &amp;<a class=\"struct\" href=\"polkadot_sdk_frame/runtime/prelude/weights/struct.Weight.html\" title=\"struct polkadot_sdk_frame::runtime::prelude::weights::Weight\">Weight</a>) -&gt; &lt;<a class=\"struct\" href=\"polkadot_sdk_frame/runtime/prelude/struct.FixedFee.html\" title=\"struct polkadot_sdk_frame::runtime::prelude::FixedFee\">FixedFee</a>&lt;F, T&gt; as <a class=\"trait\" href=\"polkadot_sdk_frame/runtime/prelude/weights/trait.WeightToFee.html\" title=\"trait polkadot_sdk_frame::runtime::prelude::weights::WeightToFee\">WeightToFee</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_sdk_frame/runtime/prelude/weights/trait.WeightToFee.html#associatedtype.Balance\" title=\"type polkadot_sdk_frame::runtime::prelude::weights::WeightToFee::Balance\">Balance</a></h4></section></summary><div class='docblock'>Calculates the fee from the passed <code>weight</code>.</div></details></div></details>","WeightToFee","polkadot_sdk_frame::runtime::prelude::NoFee"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()