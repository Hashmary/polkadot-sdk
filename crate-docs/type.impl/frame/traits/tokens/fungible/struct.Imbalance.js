(function() {var type_impls = {
"frame":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Imbalance%3CB,+OnDrop,+OppositeOnDrop%3E\" class=\"impl\"><a href=\"#impl-Default-for-Imbalance%3CB,+OnDrop,+OppositeOnDrop%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, OnDrop, OppositeOnDrop&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"frame/traits/tokens/trait.Balance.html\" title=\"trait frame::traits::tokens::Balance\">Balance</a>,\n    OnDrop: <a class=\"trait\" href=\"frame/traits/tokens/fungible/trait.HandleImbalanceDrop.html\" title=\"trait frame::traits::tokens::fungible::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;B&gt;,\n    OppositeOnDrop: <a class=\"trait\" href=\"frame/traits/tokens/fungible/trait.HandleImbalanceDrop.html\" title=\"trait frame::traits::tokens::fungible::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;B&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","frame::traits::tokens::fungible::Credit","frame::traits::tokens::fungible::Debt"],["<section id=\"impl-Eq-for-Imbalance%3CB,+OnDrop,+OppositeOnDrop%3E\" class=\"impl\"><a href=\"#impl-Eq-for-Imbalance%3CB,+OnDrop,+OppositeOnDrop%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, OnDrop, OppositeOnDrop&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"frame/traits/tokens/trait.Balance.html\" title=\"trait frame::traits::tokens::Balance\">Balance</a>,\n    OnDrop: <a class=\"trait\" href=\"frame/traits/tokens/fungible/trait.HandleImbalanceDrop.html\" title=\"trait frame::traits::tokens::fungible::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;B&gt;,\n    OppositeOnDrop: <a class=\"trait\" href=\"frame/traits/tokens/fungible/trait.HandleImbalanceDrop.html\" title=\"trait frame::traits::tokens::fungible::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;B&gt;,</span></h3></section>","Eq","frame::traits::tokens::fungible::Credit","frame::traits::tokens::fungible::Debt"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Imbalance%3CB%3E-for-Imbalance%3CB,+OnDrop,+OppositeOnDrop%3E\" class=\"impl\"><a href=\"#impl-Imbalance%3CB%3E-for-Imbalance%3CB,+OnDrop,+OppositeOnDrop%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, OnDrop, OppositeOnDrop&gt; <a class=\"trait\" href=\"frame/traits/trait.Imbalance.html\" title=\"trait frame::traits::Imbalance\">Imbalance</a>&lt;B&gt; for <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"frame/traits/tokens/trait.Balance.html\" title=\"trait frame::traits::tokens::Balance\">Balance</a>,\n    OnDrop: <a class=\"trait\" href=\"frame/traits/tokens/fungible/trait.HandleImbalanceDrop.html\" title=\"trait frame::traits::tokens::fungible::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;B&gt;,\n    OppositeOnDrop: <a class=\"trait\" href=\"frame/traits/tokens/fungible/trait.HandleImbalanceDrop.html\" title=\"trait frame::traits::tokens::fungible::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;B&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Opposite\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Opposite\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"frame/traits/trait.Imbalance.html#associatedtype.Opposite\" class=\"associatedtype\">Opposite</a> = <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OppositeOnDrop, OnDrop&gt;</h4></section></summary><div class='docblock'>The oppositely imbalanced type. They come in pairs.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.zero\" class=\"method trait-impl\"><a href=\"#method.zero\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#tymethod.zero\" class=\"fn\">zero</a>() -&gt; <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;</h4></section></summary><div class='docblock'>The zero imbalance. Can be destroyed with <code>drop_zero</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop_zero\" class=\"method trait-impl\"><a href=\"#method.drop_zero\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#tymethod.drop_zero\" class=\"fn\">drop_zero</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;&gt;</h4></section></summary><div class='docblock'>Drop an instance cleanly. Only works if its <code>self.value()</code> is zero.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.split\" class=\"method trait-impl\"><a href=\"#method.split\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#tymethod.split\" class=\"fn\">split</a>(\n    self,\n    amount: B\n) -&gt; (<a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;, <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;)</h4></section></summary><div class='docblock'>Consume <code>self</code> and return two independent instances; the first\nis guaranteed to be at most <code>amount</code> and the second will be the remainder.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extract\" class=\"method trait-impl\"><a href=\"#method.extract\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#tymethod.extract\" class=\"fn\">extract</a>(&amp;mut self, amount: B) -&gt; <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;</h4></section></summary><div class='docblock'>Mutate <code>self</code> by extracting a new instance with at most <code>amount</code> value, reducing <code>self</code>\naccordingly.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.merge\" class=\"method trait-impl\"><a href=\"#method.merge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#tymethod.merge\" class=\"fn\">merge</a>(\n    self,\n    other: <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;\n) -&gt; <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;</h4></section></summary><div class='docblock'>Consume <code>self</code> and an <code>other</code> to return a new instance that combines\nboth.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.subsume\" class=\"method trait-impl\"><a href=\"#method.subsume\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#tymethod.subsume\" class=\"fn\">subsume</a>(&amp;mut self, other: <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;)</h4></section></summary><div class='docblock'>Consume an <code>other</code> to mutate <code>self</code> into a new instance that combines\nboth.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.offset\" class=\"method trait-impl\"><a href=\"#method.offset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#tymethod.offset\" class=\"fn\">offset</a>(\n    self,\n    other: <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OppositeOnDrop, OnDrop&gt;\n) -&gt; <a class=\"enum\" href=\"frame/traits/enum.SameOrOther.html\" title=\"enum frame::traits::SameOrOther\">SameOrOther</a>&lt;<a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;, <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OppositeOnDrop, OnDrop&gt;&gt;</h4></section></summary><div class='docblock'>Consume self and along with an opposite counterpart to return\na combined result. <a href=\"frame/traits/trait.Imbalance.html#tymethod.offset\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.peek\" class=\"method trait-impl\"><a href=\"#method.peek\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#tymethod.peek\" class=\"fn\">peek</a>(&amp;self) -&gt; B</h4></section></summary><div class='docblock'>The raw value of self.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ration\" class=\"method trait-impl\"><a href=\"#method.ration\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#method.ration\" class=\"fn\">ration</a>(self, first: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>, second: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(Self, Self)</a><span class=\"where fmt-newline\">where\n    Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"frame/arithmetic/traits/trait.Saturating.html\" title=\"trait frame::arithmetic::traits::Saturating\">Saturating</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;Output = Balance&gt;,</span></h4></section></summary><div class='docblock'>Consume <code>self</code> and return two independent instances; the amounts returned will be in\napproximately the same ratio as <code>first</code>:<code>second</code>. <a href=\"frame/traits/trait.Imbalance.html#method.ration\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.split_merge\" class=\"method trait-impl\"><a href=\"#method.split_merge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#method.split_merge\" class=\"fn\">split_merge</a>(self, amount: Balance, others: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(Self, Self)</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(Self, Self)</a></h4></section></summary><div class='docblock'>Consume self and add its two components, defined by the first component’s balance,\nelement-wise to two pre-existing Imbalances. <a href=\"frame/traits/trait.Imbalance.html#method.split_merge\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ration_merge\" class=\"method trait-impl\"><a href=\"#method.ration_merge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#method.ration_merge\" class=\"fn\">ration_merge</a>(\n    self,\n    first: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>,\n    second: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>,\n    others: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(Self, Self)</a>\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(Self, Self)</a><span class=\"where fmt-newline\">where\n    Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"frame/arithmetic/traits/trait.Saturating.html\" title=\"trait frame::arithmetic::traits::Saturating\">Saturating</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;Output = Balance&gt;,</span></h4></section></summary><div class='docblock'>Consume self and add its two components, defined by the ratio <code>first</code>:<code>second</code>,\nelement-wise to two pre-existing Imbalances. <a href=\"frame/traits/trait.Imbalance.html#method.ration_merge\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.split_merge_into\" class=\"method trait-impl\"><a href=\"#method.split_merge_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#method.split_merge_into\" class=\"fn\">split_merge_into</a>(self, amount: Balance, others: &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(Self, Self)</a>)</h4></section></summary><div class='docblock'>Consume self and add its two components, defined by the first component’s balance,\nelement-wise into two pre-existing Imbalance refs. <a href=\"frame/traits/trait.Imbalance.html#method.split_merge_into\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ration_merge_into\" class=\"method trait-impl\"><a href=\"#method.ration_merge_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#method.ration_merge_into\" class=\"fn\">ration_merge_into</a>(self, first: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>, second: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>, others: &amp;mut <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(Self, Self)</a>)<span class=\"where fmt-newline\">where\n    Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"frame/arithmetic/traits/trait.Saturating.html\" title=\"trait frame::arithmetic::traits::Saturating\">Saturating</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;Output = Balance&gt;,</span></h4></section></summary><div class='docblock'>Consume self and add its two components, defined by the ratio <code>first</code>:<code>second</code>,\nelement-wise to two pre-existing Imbalances. <a href=\"frame/traits/trait.Imbalance.html#method.ration_merge_into\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.merge_into\" class=\"method trait-impl\"><a href=\"#method.merge_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#method.merge_into\" class=\"fn\">merge_into</a>(self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut Self</a>)</h4></section></summary><div class='docblock'>Consume self to mutate <code>other</code> so that it combines both. Just like <code>subsume</code>, only with\nreversed arguments.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.maybe_merge\" class=\"method trait-impl\"><a href=\"#method.maybe_merge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#method.maybe_merge\" class=\"fn\">maybe_merge</a>(self, other: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Consume <code>self</code> and maybe an <code>other</code> to return a new instance that combines\nboth.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.maybe_subsume\" class=\"method trait-impl\"><a href=\"#method.maybe_subsume\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.Imbalance.html#method.maybe_subsume\" class=\"fn\">maybe_subsume</a>(&amp;mut self, other: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;)</h4></section></summary><div class='docblock'>Maybe consume an <code>other</code> to mutate <code>self</code> into a new instance that combines\nboth.</div></details></div></details>","Imbalance<B>","frame::traits::tokens::fungible::Credit","frame::traits::tokens::fungible::Debt"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryDrop-for-Imbalance%3CB,+OnDrop,+OppositeOnDrop%3E\" class=\"impl\"><a href=\"#impl-TryDrop-for-Imbalance%3CB,+OnDrop,+OppositeOnDrop%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, OnDrop, OppositeOnDrop&gt; <a class=\"trait\" href=\"frame/traits/trait.TryDrop.html\" title=\"trait frame::traits::TryDrop\">TryDrop</a> for <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"frame/traits/tokens/trait.Balance.html\" title=\"trait frame::traits::tokens::Balance\">Balance</a>,\n    OnDrop: <a class=\"trait\" href=\"frame/traits/tokens/fungible/trait.HandleImbalanceDrop.html\" title=\"trait frame::traits::tokens::fungible::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;B&gt;,\n    OppositeOnDrop: <a class=\"trait\" href=\"frame/traits/tokens/fungible/trait.HandleImbalanceDrop.html\" title=\"trait frame::traits::tokens::fungible::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;B&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_drop\" class=\"method trait-impl\"><a href=\"#method.try_drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/traits/trait.TryDrop.html#tymethod.try_drop\" class=\"fn\">try_drop</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Drop an instance cleanly. Only works if its value represents “no-operation”.</p>\n</div></details></div></details>","TryDrop","frame::traits::tokens::fungible::Credit","frame::traits::tokens::fungible::Debt"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-Imbalance%3CB,+OnDrop,+OppositeOnDrop%3E\" class=\"impl\"><a href=\"#impl-Drop-for-Imbalance%3CB,+OnDrop,+OppositeOnDrop%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, OnDrop, OppositeOnDrop&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"frame/traits/tokens/trait.Balance.html\" title=\"trait frame::traits::tokens::Balance\">Balance</a>,\n    OnDrop: <a class=\"trait\" href=\"frame/traits/tokens/fungible/trait.HandleImbalanceDrop.html\" title=\"trait frame::traits::tokens::fungible::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;B&gt;,\n    OppositeOnDrop: <a class=\"trait\" href=\"frame/traits/tokens/fungible/trait.HandleImbalanceDrop.html\" title=\"trait frame::traits::tokens::fungible::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;B&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.75.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","frame::traits::tokens::fungible::Credit","frame::traits::tokens::fungible::Debt"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Imbalance%3CB,+OnDrop,+OppositeOnDrop%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-Imbalance%3CB,+OnDrop,+OppositeOnDrop%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, OnDrop, OppositeOnDrop&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"frame/traits/tokens/trait.Balance.html\" title=\"trait frame::traits::tokens::Balance\">Balance</a>,\n    OnDrop: <a class=\"trait\" href=\"frame/traits/tokens/fungible/trait.HandleImbalanceDrop.html\" title=\"trait frame::traits::tokens::fungible::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;B&gt;,\n    OppositeOnDrop: <a class=\"trait\" href=\"frame/traits/tokens/fungible/trait.HandleImbalanceDrop.html\" title=\"trait frame::traits::tokens::fungible::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;B&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","frame::traits::tokens::fungible::Credit","frame::traits::tokens::fungible::Debt"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Imbalance%3CB,+OnDrop,+OppositeOnDrop%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Imbalance%3CB,+OnDrop,+OppositeOnDrop%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, OnDrop, OppositeOnDrop&gt; <a class=\"trait\" href=\"frame/derive/trait.Debug.html\" title=\"trait frame::derive::Debug\">Debug</a> for <a class=\"struct\" href=\"frame/traits/tokens/fungible/struct.Imbalance.html\" title=\"struct frame::traits::tokens::fungible::Imbalance\">Imbalance</a>&lt;B, OnDrop, OppositeOnDrop&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"frame/traits/tokens/trait.Balance.html\" title=\"trait frame::traits::tokens::Balance\">Balance</a>,\n    OnDrop: <a class=\"trait\" href=\"frame/traits/tokens/fungible/trait.HandleImbalanceDrop.html\" title=\"trait frame::traits::tokens::fungible::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;B&gt;,\n    OppositeOnDrop: <a class=\"trait\" href=\"frame/traits/tokens/fungible/trait.HandleImbalanceDrop.html\" title=\"trait frame::traits::tokens::fungible::HandleImbalanceDrop\">HandleImbalanceDrop</a>&lt;B&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"frame/derive/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"frame/derive/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","frame::traits::tokens::fungible::Credit","frame::traits::tokens::fungible::Debt"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()