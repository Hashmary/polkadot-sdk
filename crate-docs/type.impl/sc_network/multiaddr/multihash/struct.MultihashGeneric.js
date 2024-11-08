(function() {var type_impls = {
"sc_network":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MultihashGeneric%3CS%3E\" class=\"impl\"><a href=\"#impl-MultihashGeneric%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const S: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.wrap\" class=\"method\"><h4 class=\"code-header\">pub const fn <a href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html#tymethod.wrap\" class=\"fn\">wrap</a>(code: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>, input_digest: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;, <a class=\"enum\" href=\"sc_network/multiaddr/multihash/enum.Error.html\" title=\"enum sc_network::multiaddr::multihash::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Wraps the digest in a multihash.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.code\" class=\"method\"><h4 class=\"code-header\">pub const fn <a href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html#tymethod.code\" class=\"fn\">code</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>Returns the code of the multihash.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method\"><h4 class=\"code-header\">pub const fn <a href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html#tymethod.size\" class=\"fn\">size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a></h4></section></summary><div class=\"docblock\"><p>Returns the size of the digest.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.digest\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html#tymethod.digest\" class=\"fn\">digest</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Returns the digest.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.read\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html#tymethod.read\" class=\"fn\">read</a>&lt;R&gt;(r: R) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;, <a class=\"enum\" href=\"sc_network/multiaddr/multihash/enum.Error.html\" title=\"enum sc_network::multiaddr::multihash::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,\n    <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class=\"docblock\"><p>Reads a multihash from a byte stream.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_bytes\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html#tymethod.from_bytes\" class=\"fn\">from_bytes</a>(bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;, <a class=\"enum\" href=\"sc_network/multiaddr/multihash/enum.Error.html\" title=\"enum sc_network::multiaddr::multihash::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class=\"docblock\"><p>Parses a multihash from a bytes.</p>\n<p>You need to make sure the passed in bytes have the correct length. The digest length\nneeds to match the <code>size</code> value of the multihash.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html#tymethod.write\" class=\"fn\">write</a>&lt;W&gt;(&amp;self, w: W) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"sc_network/multiaddr/multihash/enum.Error.html\" title=\"enum sc_network::multiaddr::multihash::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</span></h4></section></summary><div class=\"docblock\"><p>Writes a multihash to a byte stream.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_bytes\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html#tymethod.to_bytes\" class=\"fn\">to_bytes</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Returns the bytes of a multihash.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.truncate\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html#tymethod.truncate\" class=\"fn\">truncate</a>(&amp;self, size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>) -&gt; <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;</h4></section></summary><div class=\"docblock\"><p>Truncates the multihash to the given size. It’s up to the caller to ensure that the new size\nis secure (cryptographically) to use.</p>\n<p>If the new size is larger than the current size, this method does nothing.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>multihash::{Code, MultihashDigest};\n\n<span class=\"kw\">let </span>hash = Code::Sha3_256.digest(<span class=\"string\">b&quot;Hello world!&quot;</span>).truncate(<span class=\"number\">20</span>);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.resize\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html#tymethod.resize\" class=\"fn\">resize</a>&lt;const R: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt;(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;R&gt;, <a class=\"enum\" href=\"sc_network/multiaddr/multihash/enum.Error.html\" title=\"enum sc_network::multiaddr::multihash::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Resizes the backing multihash buffer. This function fails if the hash digest is larger than\nthe target size.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>multihash::{Code, MultihashDigest, MultihashGeneric};\n\n<span class=\"kw\">let </span>hash = Code::Sha3_256.digest(<span class=\"string\">b&quot;Hello world!&quot;</span>);\n<span class=\"kw\">let </span>large_hash: MultihashGeneric&lt;<span class=\"number\">32</span>&gt; = hash.resize().unwrap();</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_inner\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html#tymethod.into_inner\" class=\"fn\">into_inner</a>(self) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">S</a>], <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>)</h4></section></summary><div class=\"docblock\"><p>Decomposes struct, useful when needing a <code>Sized</code> array or moving all the data into another type</p>\n<p>It is recommended to use <code>digest()</code> <code>code()</code> and <code>size()</code> for most cases</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>multihash::{Code, MultihashDigest};\n<span class=\"kw\">struct </span>Foo&lt;<span class=\"kw\">const </span>S: usize&gt; {\n    arr: [u8; S],\n    len: usize,\n}\n\n<span class=\"kw\">let </span>hash = Code::Sha3_256.digest(<span class=\"string\">b&quot;Hello world!&quot;</span>);\n<span class=\"kw\">let </span>(.., arr, size) = hash.into_inner();\n<span class=\"kw\">let </span>foo = Foo { arr, len: size <span class=\"kw\">as </span>usize };</code></pre></div>\n</div></details></div></details>",0,"sc_network::multiaddr::multihash::Multihash"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-MultihashGeneric%3CS%3E\" class=\"impl\"><a href=\"#impl-Debug-for-MultihashGeneric%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const S: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sc_network::multiaddr::multihash::Multihash"],["<section id=\"impl-StructuralEq-for-MultihashGeneric%3CS%3E\" class=\"impl\"><a href=\"#impl-StructuralEq-for-MultihashGeneric%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const S: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;</h3></section>","StructuralEq","sc_network::multiaddr::multihash::Multihash"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-MultihashGeneric%3CS%3E\" class=\"impl\"><a href=\"#impl-Default-for-MultihashGeneric%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const S: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.75.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","sc_network::multiaddr::multihash::Multihash"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-MultihashGeneric%3CS%3E\" class=\"impl\"><a href=\"#impl-Clone-for-MultihashGeneric%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const S: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sc_network::multiaddr::multihash::Multihash"],["<section id=\"impl-Eq-for-MultihashGeneric%3CS%3E\" class=\"impl\"><a href=\"#impl-Eq-for-MultihashGeneric%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const S: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;</h3></section>","Eq","sc_network::multiaddr::multihash::Multihash"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialOrd-for-MultihashGeneric%3CS%3E\" class=\"impl\"><a href=\"#impl-PartialOrd-for-MultihashGeneric%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const S: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> for <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.partial_cmp\" class=\"method trait-impl\"><a href=\"#method.partial_cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\" class=\"fn\">partial_cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt;</h4></section></summary><div class='docblock'>This method returns an ordering between <code>self</code> and <code>other</code> values if one exists. <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialOrd.html#tymethod.partial_cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.lt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#1122\">source</a></span><a href=\"#method.lt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialOrd.html#method.lt\" class=\"fn\">lt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;</code> operator. <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialOrd.html#method.lt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.le\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#1139\">source</a></span><a href=\"#method.le\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialOrd.html#method.le\" class=\"fn\">le</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests less than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&lt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialOrd.html#method.le\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.gt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#1155\">source</a></span><a href=\"#method.gt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialOrd.html#method.gt\" class=\"fn\">gt</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;</code> operator. <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialOrd.html#method.gt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ge\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#1172\">source</a></span><a href=\"#method.ge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialOrd.html#method.ge\" class=\"fn\">ge</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests greater than or equal to (for <code>self</code> and <code>other</code>) and is used by the <code>&gt;=</code>\noperator. <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialOrd.html#method.ge\">Read more</a></div></details></div></details>","PartialOrd","sc_network::multiaddr::multihash::Multihash"],["<section id=\"impl-Copy-for-MultihashGeneric%3CS%3E\" class=\"impl\"><a href=\"#impl-Copy-for-MultihashGeneric%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const S: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;</h3></section>","Copy","sc_network::multiaddr::multihash::Multihash"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Ord-for-MultihashGeneric%3CS%3E\" class=\"impl\"><a href=\"#impl-Ord-for-MultihashGeneric%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const S: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.cmp\" class=\"method trait-impl\"><a href=\"#method.cmp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Ord.html#tymethod.cmp\" class=\"fn\">cmp</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a></h4></section></summary><div class='docblock'>This method returns an <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\"><code>Ordering</code></a> between <code>self</code> and <code>other</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Ord.html#tymethod.cmp\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#826-828\">source</a></span><a href=\"#method.max\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Ord.html#method.max\" class=\"fn\">max</a>(self, other: Self) -&gt; Self<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Compares and returns the maximum of two values. <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Ord.html#method.max\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.21.0\">1.21.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#846-848\">source</a></span><a href=\"#method.min\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Ord.html#method.min\" class=\"fn\">min</a>(self, other: Self) -&gt; Self<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Compares and returns the minimum of two values. <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Ord.html#method.min\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clamp\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.50.0\">1.50.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#871-874\">source</a></span><a href=\"#method.clamp\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Ord.html#method.clamp\" class=\"fn\">clamp</a>(self, min: Self, max: Self) -&gt; Self<span class=\"where fmt-newline\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a>,</span></h4></section></summary><div class='docblock'>Restrict a value to a certain interval. <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Ord.html#method.clamp\">Read more</a></div></details></div></details>","Ord","sc_network::multiaddr::multihash::Multihash"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq%3CMultihashGeneric%3CB%3E%3E-for-MultihashGeneric%3CA%3E\" class=\"impl\"><a href=\"#impl-PartialEq%3CMultihashGeneric%3CB%3E%3E-for-MultihashGeneric%3CA%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const A: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>, const B: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;B&gt;&gt; for <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;A&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;B&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq<Multihash<B>>","sc_network::multiaddr::multihash::Multihash"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-MultihashGeneric%3CS%3E\" class=\"impl\"><a href=\"#impl-Hash-for-MultihashGeneric%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const S: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;S&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;T&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut T</a>)<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</span></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#242-244\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut H</a>)<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","sc_network::multiaddr::multihash::Multihash"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CPeerId%3E-for-MultihashGeneric%3C64%3E\" class=\"impl\"><a href=\"#impl-From%3CPeerId%3E-for-MultihashGeneric%3C64%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"sc_network/struct.PeerId.html\" title=\"struct sc_network::PeerId\">PeerId</a>&gt; for <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;64&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(peer_id: <a class=\"struct\" href=\"sc_network/struct.PeerId.html\" title=\"struct sc_network::PeerId\">PeerId</a>) -&gt; <a class=\"struct\" href=\"sc_network/multiaddr/multihash/struct.MultihashGeneric.html\" title=\"struct sc_network::multiaddr::multihash::MultihashGeneric\">Multihash</a>&lt;64&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<PeerId>","sc_network::multiaddr::multihash::Multihash"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()