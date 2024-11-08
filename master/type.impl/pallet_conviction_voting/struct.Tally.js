(function() {var type_impls = {
"pallet_conviction_voting":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Tally%3CVotes,+Total%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#36\">source</a><a href=\"#impl-Clone-for-Tally%3CVotes,+Total%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Votes: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + TypeInfo + Codec, Total&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"pallet_conviction_voting/struct.Tally.html\" title=\"struct pallet_conviction_voting::Tally\">Tally</a>&lt;Votes, Total&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#36\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","pallet_conviction_voting::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Tally%3CVotes,+Total%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#39\">source</a><a href=\"#impl-Debug-for-Tally%3CVotes,+Total%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Votes: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + TypeInfo + Codec, Total&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pallet_conviction_voting/struct.Tally.html\" title=\"struct pallet_conviction_voting::Tally\">Tally</a>&lt;Votes, Total&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#39\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","pallet_conviction_voting::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-Tally%3CVotes,+Total%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#42\">source</a><a href=\"#impl-Decode-for-Tally%3CVotes,+Total%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Votes, Total&gt; Decode for <a class=\"struct\" href=\"pallet_conviction_voting/struct.Tally.html\" title=\"struct pallet_conviction_voting::Tally\">Tally</a>&lt;Votes, Total&gt;<div class=\"where\">where\n    Votes: Decode + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + TypeInfo + Codec,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;Total&gt;: Decode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#42\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy: Input&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Error&gt;</h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.81.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","pallet_conviction_voting::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-Tally%3CVotes,+Total%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#41\">source</a><a href=\"#impl-Encode-for-Tally%3CVotes,+Total%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Votes, Total&gt; Encode for <a class=\"struct\" href=\"pallet_conviction_voting/struct.Tally.html\" title=\"struct pallet_conviction_voting::Tally\">Tally</a>&lt;Votes, Total&gt;<div class=\"where\">where\n    Votes: Encode + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + TypeInfo + Codec,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;Total&gt;: Encode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#41\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#41\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>,\n)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","pallet_conviction_voting::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MaxEncodedLen-for-Tally%3CVotes,+Total%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#43\">source</a><a href=\"#impl-MaxEncodedLen-for-Tally%3CVotes,+Total%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Votes, Total&gt; MaxEncodedLen for <a class=\"struct\" href=\"pallet_conviction_voting/struct.Tally.html\" title=\"struct pallet_conviction_voting::Tally\">Tally</a>&lt;Votes, Total&gt;<div class=\"where\">where\n    Votes: MaxEncodedLen + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + TypeInfo + Codec,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_encoded_len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#43\">source</a><a href=\"#method.max_encoded_len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">max_encoded_len</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Upper bound, in bytes, of the maximum encoded size of this item.</div></details></div></details>","MaxEncodedLen","pallet_conviction_voting::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Tally%3CVotes,+Total%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#37\">source</a><a href=\"#impl-PartialEq-for-Tally%3CVotes,+Total%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Votes: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + TypeInfo + Codec, Total&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"pallet_conviction_voting/struct.Tally.html\" title=\"struct pallet_conviction_voting::Tally\">Tally</a>&lt;Votes, Total&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#37\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/cmp.rs.html#262\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","pallet_conviction_voting::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Tally%3CVotes,+Total%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#101-217\">source</a><a href=\"#impl-Tally%3CVotes,+Total%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Votes: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + AtLeast32BitUnsigned + TypeInfo + Codec, Total: Get&lt;Votes&gt;&gt; <a class=\"struct\" href=\"pallet_conviction_voting/struct.Tally.html\" title=\"struct pallet_conviction_voting::Tally\">Tally</a>&lt;Votes, Total&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_vote\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#107-115\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_conviction_voting/struct.Tally.html#tymethod.from_vote\" class=\"fn\">from_vote</a>(vote: <a class=\"struct\" href=\"pallet_conviction_voting/struct.Vote.html\" title=\"struct pallet_conviction_voting::Vote\">Vote</a>, balance: Votes) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new tally.</p>\n</div></details><section id=\"method.from_parts\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#117-128\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_conviction_voting/struct.Tally.html#tymethod.from_parts\" class=\"fn\">from_parts</a>(\n    ayes_with_conviction: Votes,\n    nays_with_conviction: Votes,\n    ayes: Votes,\n) -&gt; Self</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.add\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#131-161\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_conviction_voting/struct.Tally.html#tymethod.add\" class=\"fn\">add</a>(&amp;mut self, vote: <a class=\"enum\" href=\"pallet_conviction_voting/enum.AccountVote.html\" title=\"enum pallet_conviction_voting::AccountVote\">AccountVote</a>&lt;Votes&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Add an account’s vote into the tally.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.remove\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#164-194\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_conviction_voting/struct.Tally.html#tymethod.remove\" class=\"fn\">remove</a>(&amp;mut self, vote: <a class=\"enum\" href=\"pallet_conviction_voting/enum.AccountVote.html\" title=\"enum pallet_conviction_voting::AccountVote\">AccountVote</a>&lt;Votes&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Remove an account’s vote from the tally.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.increase\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#197-205\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_conviction_voting/struct.Tally.html#tymethod.increase\" class=\"fn\">increase</a>(&amp;mut self, approve: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a>, delegations: <a class=\"struct\" href=\"pallet_conviction_voting/struct.Delegations.html\" title=\"struct pallet_conviction_voting::Delegations\">Delegations</a>&lt;Votes&gt;)</h4></section></summary><div class=\"docblock\"><p>Increment some amount of votes.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reduce\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#208-216\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_conviction_voting/struct.Tally.html#tymethod.reduce\" class=\"fn\">reduce</a>(&amp;mut self, approve: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a>, delegations: <a class=\"struct\" href=\"pallet_conviction_voting/struct.Delegations.html\" title=\"struct pallet_conviction_voting::Delegations\">Delegations</a>&lt;Votes&gt;)</h4></section></summary><div class=\"docblock\"><p>Decrement some amount of votes.</p>\n</div></details></div></details>",0,"pallet_conviction_voting::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-Tally%3CVotes,+Total%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#40\">source</a><a href=\"#impl-TypeInfo-for-Tally%3CVotes,+Total%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Votes, Total&gt; TypeInfo for <a class=\"struct\" href=\"pallet_conviction_voting/struct.Tally.html\" title=\"struct pallet_conviction_voting::Tally\">Tally</a>&lt;Votes, Total&gt;<div class=\"where\">where\n    Votes: TypeInfo + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + TypeInfo + Codec,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;Total&gt;: TypeInfo + 'static,\n    Total: 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"struct\" href=\"pallet_conviction_voting/struct.Tally.html\" title=\"struct pallet_conviction_voting::Tally\">Tally</a>&lt;Votes, Total&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#40\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","pallet_conviction_voting::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-VoteTally%3CVotes,+Class%3E-for-Tally%3CVotes,+Total%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#58-99\">source</a><a href=\"#impl-VoteTally%3CVotes,+Class%3E-for-Tally%3CVotes,+Total%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Votes: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + AtLeast32BitUnsigned + TypeInfo + Codec, Total: Get&lt;Votes&gt;, Class&gt; VoteTally&lt;Votes, Class&gt; for <a class=\"struct\" href=\"pallet_conviction_voting/struct.Tally.html\" title=\"struct pallet_conviction_voting::Tally\">Tally</a>&lt;Votes, Total&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#64-66\">source</a><a href=\"#method.new\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">new</a>(_: Class) -&gt; Self</h4></section></summary><div class='docblock'>Initializes a new tally.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ayes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#68-70\">source</a><a href=\"#method.ayes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">ayes</a>(&amp;self, _: Class) -&gt; Votes</h4></section></summary><div class='docblock'>Returns the number of positive votes for the tally.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.support\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#72-74\">source</a><a href=\"#method.support\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">support</a>(&amp;self, _: Class) -&gt; Perbill</h4></section></summary><div class='docblock'>Returns the approval ratio (positive to total votes) for the tally, without multipliers\n(e.g. conviction, ranks, etc.).</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.approval\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#76-78\">source</a><a href=\"#method.approval\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">approval</a>(&amp;self, _: Class) -&gt; Perbill</h4></section></summary><div class='docblock'>Returns the approval ratio (positive to total votes) for the tally.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.unanimity\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#81-83\">source</a><a href=\"#method.unanimity\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">unanimity</a>(_: Class) -&gt; Self</h4></section></summary><div class='docblock'>Returns an instance of the tally representing a unanimous approval, for benchmarking\npurposes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.rejection\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#86-88\">source</a><a href=\"#method.rejection\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">rejection</a>(_: Class) -&gt; Self</h4></section></summary><div class='docblock'>Returns an instance of the tally representing a rejecting state, for benchmarking purposes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_requirements\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#91-95\">source</a><a href=\"#method.from_requirements\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">from_requirements</a>(support: Perbill, approval: Perbill, _: Class) -&gt; Self</h4></section></summary><div class='docblock'>Returns an instance of the tally given some <code>approval</code> and <code>support</code>, for benchmarking\npurposes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.setup\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#98\">source</a><a href=\"#method.setup\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">setup</a>(_: Class, _: Perbill)</h4></section></summary><div class='docblock'>A function that should be called before any use of the <code>runtime-benchmarks</code> gated functions\nof the <code>VoteTally</code> trait. <a>Read more</a></div></details></div></details>","VoteTally<Votes, Class>","pallet_conviction_voting::TallyOf"],["<section id=\"impl-EncodeLike-for-Tally%3CVotes,+Total%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#41\">source</a><a href=\"#impl-EncodeLike-for-Tally%3CVotes,+Total%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Votes, Total&gt; EncodeLike for <a class=\"struct\" href=\"pallet_conviction_voting/struct.Tally.html\" title=\"struct pallet_conviction_voting::Tally\">Tally</a>&lt;Votes, Total&gt;<div class=\"where\">where\n    Votes: Encode + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + TypeInfo + Codec,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;Total&gt;: Encode,</div></h3></section>","EncodeLike","pallet_conviction_voting::TallyOf"],["<section id=\"impl-Eq-for-Tally%3CVotes,+Total%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_conviction_voting/types.rs.html#47\">source</a><a href=\"#impl-Eq-for-Tally%3CVotes,+Total%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Votes: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + TypeInfo + Codec, Total&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"pallet_conviction_voting/struct.Tally.html\" title=\"struct pallet_conviction_voting::Tally\">Tally</a>&lt;Votes, Total&gt;</h3></section>","Eq","pallet_conviction_voting::TallyOf"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()