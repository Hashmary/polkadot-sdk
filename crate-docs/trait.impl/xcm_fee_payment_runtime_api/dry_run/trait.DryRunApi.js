(function() {var implementors = {
"asset_hub_rococo_runtime":[["impl&lt;__SrApiBlock__: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>, RuntimeApiImplCall: <a class=\"trait\" href=\"sp_api/trait.CallApiAt.html\" title=\"trait sp_api::CallApiAt\">CallApiAt</a>&lt;__SrApiBlock__&gt; + 'static&gt; <a class=\"trait\" href=\"xcm_fee_payment_runtime_api/dry_run/trait.DryRunApi.html\" title=\"trait xcm_fee_payment_runtime_api::dry_run::DryRunApi\">DryRunApi</a>&lt;__SrApiBlock__, <a class=\"enum\" href=\"asset_hub_rococo_runtime/enum.RuntimeCall.html\" title=\"enum asset_hub_rococo_runtime::RuntimeCall\">RuntimeCall</a>, <a class=\"enum\" href=\"asset_hub_rococo_runtime/enum.RuntimeEvent.html\" title=\"enum asset_hub_rococo_runtime::RuntimeEvent\">RuntimeEvent</a>, <a class=\"enum\" href=\"asset_hub_rococo_runtime/enum.OriginCaller.html\" title=\"enum asset_hub_rococo_runtime::OriginCaller\">OriginCaller</a>&gt; for <a class=\"struct\" href=\"asset_hub_rococo_runtime/struct.RuntimeApiImpl.html\" title=\"struct asset_hub_rococo_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;__SrApiBlock__, RuntimeApiImplCall&gt;<div class=\"where\">where\n    RuntimeApiImplCall::<a class=\"associatedtype\" href=\"sp_api/trait.CallApiAt.html#associatedtype.StateBackend\" title=\"type sp_api::CallApiAt::StateBackend\">StateBackend</a>: <a class=\"trait\" href=\"sp_state_machine/backend/trait.Backend.html\" title=\"trait sp_state_machine::backend::Backend\">StateBackend</a>&lt;<a class=\"type\" href=\"sp_runtime/traits/type.HashingFor.html\" title=\"type sp_runtime::traits::HashingFor\">HashingFor</a>&lt;__SrApiBlock__&gt;&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;'static RuntimeApiImplCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"enum\" href=\"asset_hub_rococo_runtime/enum.OriginCaller.html\" title=\"enum asset_hub_rococo_runtime::OriginCaller\">OriginCaller</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"asset_hub_rococo_runtime/enum.RuntimeCall.html\" title=\"enum asset_hub_rococo_runtime::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"xcm_fee_payment_runtime_api/dry_run/struct.CallDryRunEffects.html\" title=\"struct xcm_fee_payment_runtime_api::dry_run::CallDryRunEffects\">CallDryRunEffects</a>&lt;<a class=\"enum\" href=\"asset_hub_rococo_runtime/enum.RuntimeEvent.html\" title=\"enum asset_hub_rococo_runtime::RuntimeEvent\">RuntimeEvent</a>&gt;, <a class=\"enum\" href=\"xcm_fee_payment_runtime_api/dry_run/enum.Error.html\" title=\"enum xcm_fee_payment_runtime_api::dry_run::Error\">Error</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"staging_xcm/enum.VersionedLocation.html\" title=\"enum staging_xcm::VersionedLocation\">VersionedLocation</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"staging_xcm/enum.VersionedXcm.html\" title=\"enum staging_xcm::VersionedXcm\">VersionedXcm</a>&lt;<a class=\"enum\" href=\"asset_hub_rococo_runtime/enum.RuntimeCall.html\" title=\"enum asset_hub_rococo_runtime::RuntimeCall\">RuntimeCall</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"xcm_fee_payment_runtime_api/dry_run/struct.XcmDryRunEffects.html\" title=\"struct xcm_fee_payment_runtime_api::dry_run::XcmDryRunEffects\">XcmDryRunEffects</a>&lt;<a class=\"enum\" href=\"asset_hub_rococo_runtime/enum.RuntimeEvent.html\" title=\"enum asset_hub_rococo_runtime::RuntimeEvent\">RuntimeEvent</a>&gt;, <a class=\"enum\" href=\"xcm_fee_payment_runtime_api/dry_run/enum.Error.html\" title=\"enum xcm_fee_payment_runtime_api::dry_run::Error\">Error</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    __SrApiBlock__::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</div>"]],
"asset_hub_westend_runtime":[["impl&lt;__SrApiBlock__: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>, RuntimeApiImplCall: <a class=\"trait\" href=\"sp_api/trait.CallApiAt.html\" title=\"trait sp_api::CallApiAt\">CallApiAt</a>&lt;__SrApiBlock__&gt; + 'static&gt; <a class=\"trait\" href=\"xcm_fee_payment_runtime_api/dry_run/trait.DryRunApi.html\" title=\"trait xcm_fee_payment_runtime_api::dry_run::DryRunApi\">DryRunApi</a>&lt;__SrApiBlock__, <a class=\"enum\" href=\"asset_hub_westend_runtime/enum.RuntimeCall.html\" title=\"enum asset_hub_westend_runtime::RuntimeCall\">RuntimeCall</a>, <a class=\"enum\" href=\"asset_hub_westend_runtime/enum.RuntimeEvent.html\" title=\"enum asset_hub_westend_runtime::RuntimeEvent\">RuntimeEvent</a>, <a class=\"enum\" href=\"asset_hub_westend_runtime/enum.OriginCaller.html\" title=\"enum asset_hub_westend_runtime::OriginCaller\">OriginCaller</a>&gt; for <a class=\"struct\" href=\"asset_hub_westend_runtime/struct.RuntimeApiImpl.html\" title=\"struct asset_hub_westend_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;__SrApiBlock__, RuntimeApiImplCall&gt;<div class=\"where\">where\n    RuntimeApiImplCall::<a class=\"associatedtype\" href=\"sp_api/trait.CallApiAt.html#associatedtype.StateBackend\" title=\"type sp_api::CallApiAt::StateBackend\">StateBackend</a>: <a class=\"trait\" href=\"sp_state_machine/backend/trait.Backend.html\" title=\"trait sp_state_machine::backend::Backend\">StateBackend</a>&lt;<a class=\"type\" href=\"sp_runtime/traits/type.HashingFor.html\" title=\"type sp_runtime::traits::HashingFor\">HashingFor</a>&lt;__SrApiBlock__&gt;&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;'static RuntimeApiImplCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"enum\" href=\"asset_hub_westend_runtime/enum.OriginCaller.html\" title=\"enum asset_hub_westend_runtime::OriginCaller\">OriginCaller</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"asset_hub_westend_runtime/enum.RuntimeCall.html\" title=\"enum asset_hub_westend_runtime::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"xcm_fee_payment_runtime_api/dry_run/struct.CallDryRunEffects.html\" title=\"struct xcm_fee_payment_runtime_api::dry_run::CallDryRunEffects\">CallDryRunEffects</a>&lt;<a class=\"enum\" href=\"asset_hub_westend_runtime/enum.RuntimeEvent.html\" title=\"enum asset_hub_westend_runtime::RuntimeEvent\">RuntimeEvent</a>&gt;, <a class=\"enum\" href=\"xcm_fee_payment_runtime_api/dry_run/enum.Error.html\" title=\"enum xcm_fee_payment_runtime_api::dry_run::Error\">Error</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"staging_xcm/enum.VersionedLocation.html\" title=\"enum staging_xcm::VersionedLocation\">VersionedLocation</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"staging_xcm/enum.VersionedXcm.html\" title=\"enum staging_xcm::VersionedXcm\">VersionedXcm</a>&lt;<a class=\"enum\" href=\"asset_hub_westend_runtime/enum.RuntimeCall.html\" title=\"enum asset_hub_westend_runtime::RuntimeCall\">RuntimeCall</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"xcm_fee_payment_runtime_api/dry_run/struct.XcmDryRunEffects.html\" title=\"struct xcm_fee_payment_runtime_api::dry_run::XcmDryRunEffects\">XcmDryRunEffects</a>&lt;<a class=\"enum\" href=\"asset_hub_westend_runtime/enum.RuntimeEvent.html\" title=\"enum asset_hub_westend_runtime::RuntimeEvent\">RuntimeEvent</a>&gt;, <a class=\"enum\" href=\"xcm_fee_payment_runtime_api/dry_run/enum.Error.html\" title=\"enum xcm_fee_payment_runtime_api::dry_run::Error\">Error</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    __SrApiBlock__::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</div>"]],
"penpal_runtime":[["impl&lt;__SrApiBlock__: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>, RuntimeApiImplCall: <a class=\"trait\" href=\"sp_api/trait.CallApiAt.html\" title=\"trait sp_api::CallApiAt\">CallApiAt</a>&lt;__SrApiBlock__&gt; + 'static&gt; <a class=\"trait\" href=\"xcm_fee_payment_runtime_api/dry_run/trait.DryRunApi.html\" title=\"trait xcm_fee_payment_runtime_api::dry_run::DryRunApi\">DryRunApi</a>&lt;__SrApiBlock__, <a class=\"enum\" href=\"penpal_runtime/enum.RuntimeCall.html\" title=\"enum penpal_runtime::RuntimeCall\">RuntimeCall</a>, <a class=\"enum\" href=\"penpal_runtime/enum.RuntimeEvent.html\" title=\"enum penpal_runtime::RuntimeEvent\">RuntimeEvent</a>, <a class=\"enum\" href=\"penpal_runtime/enum.OriginCaller.html\" title=\"enum penpal_runtime::OriginCaller\">OriginCaller</a>&gt; for <a class=\"struct\" href=\"penpal_runtime/struct.RuntimeApiImpl.html\" title=\"struct penpal_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;__SrApiBlock__, RuntimeApiImplCall&gt;<div class=\"where\">where\n    RuntimeApiImplCall::<a class=\"associatedtype\" href=\"sp_api/trait.CallApiAt.html#associatedtype.StateBackend\" title=\"type sp_api::CallApiAt::StateBackend\">StateBackend</a>: <a class=\"trait\" href=\"sp_state_machine/backend/trait.Backend.html\" title=\"trait sp_state_machine::backend::Backend\">StateBackend</a>&lt;<a class=\"type\" href=\"sp_runtime/traits/type.HashingFor.html\" title=\"type sp_runtime::traits::HashingFor\">HashingFor</a>&lt;__SrApiBlock__&gt;&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;'static RuntimeApiImplCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"enum\" href=\"penpal_runtime/enum.OriginCaller.html\" title=\"enum penpal_runtime::OriginCaller\">OriginCaller</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"penpal_runtime/enum.RuntimeCall.html\" title=\"enum penpal_runtime::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"xcm_fee_payment_runtime_api/dry_run/struct.CallDryRunEffects.html\" title=\"struct xcm_fee_payment_runtime_api::dry_run::CallDryRunEffects\">CallDryRunEffects</a>&lt;<a class=\"enum\" href=\"penpal_runtime/enum.RuntimeEvent.html\" title=\"enum penpal_runtime::RuntimeEvent\">RuntimeEvent</a>&gt;, <a class=\"enum\" href=\"xcm_fee_payment_runtime_api/dry_run/enum.Error.html\" title=\"enum xcm_fee_payment_runtime_api::dry_run::Error\">Error</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"staging_xcm/enum.VersionedLocation.html\" title=\"enum staging_xcm::VersionedLocation\">VersionedLocation</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"staging_xcm/enum.VersionedXcm.html\" title=\"enum staging_xcm::VersionedXcm\">VersionedXcm</a>&lt;<a class=\"enum\" href=\"penpal_runtime/enum.RuntimeCall.html\" title=\"enum penpal_runtime::RuntimeCall\">RuntimeCall</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"xcm_fee_payment_runtime_api/dry_run/struct.XcmDryRunEffects.html\" title=\"struct xcm_fee_payment_runtime_api::dry_run::XcmDryRunEffects\">XcmDryRunEffects</a>&lt;<a class=\"enum\" href=\"penpal_runtime/enum.RuntimeEvent.html\" title=\"enum penpal_runtime::RuntimeEvent\">RuntimeEvent</a>&gt;, <a class=\"enum\" href=\"xcm_fee_payment_runtime_api/dry_run/enum.Error.html\" title=\"enum xcm_fee_payment_runtime_api::dry_run::Error\">Error</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    __SrApiBlock__::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</div>"]],
"rococo_runtime":[["impl&lt;__SrApiBlock__: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>, RuntimeApiImplCall: <a class=\"trait\" href=\"sp_api/trait.CallApiAt.html\" title=\"trait sp_api::CallApiAt\">CallApiAt</a>&lt;__SrApiBlock__&gt; + 'static&gt; <a class=\"trait\" href=\"xcm_fee_payment_runtime_api/dry_run/trait.DryRunApi.html\" title=\"trait xcm_fee_payment_runtime_api::dry_run::DryRunApi\">DryRunApi</a>&lt;__SrApiBlock__, <a class=\"enum\" href=\"rococo_runtime/enum.RuntimeCall.html\" title=\"enum rococo_runtime::RuntimeCall\">RuntimeCall</a>, <a class=\"enum\" href=\"rococo_runtime/enum.RuntimeEvent.html\" title=\"enum rococo_runtime::RuntimeEvent\">RuntimeEvent</a>, <a class=\"enum\" href=\"rococo_runtime/enum.OriginCaller.html\" title=\"enum rococo_runtime::OriginCaller\">OriginCaller</a>&gt; for <a class=\"struct\" href=\"rococo_runtime/struct.RuntimeApiImpl.html\" title=\"struct rococo_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;__SrApiBlock__, RuntimeApiImplCall&gt;<div class=\"where\">where\n    RuntimeApiImplCall::<a class=\"associatedtype\" href=\"sp_api/trait.CallApiAt.html#associatedtype.StateBackend\" title=\"type sp_api::CallApiAt::StateBackend\">StateBackend</a>: <a class=\"trait\" href=\"sp_state_machine/backend/trait.Backend.html\" title=\"trait sp_state_machine::backend::Backend\">StateBackend</a>&lt;<a class=\"type\" href=\"sp_runtime/traits/type.HashingFor.html\" title=\"type sp_runtime::traits::HashingFor\">HashingFor</a>&lt;__SrApiBlock__&gt;&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;'static RuntimeApiImplCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"enum\" href=\"rococo_runtime/enum.OriginCaller.html\" title=\"enum rococo_runtime::OriginCaller\">OriginCaller</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"rococo_runtime/enum.RuntimeCall.html\" title=\"enum rococo_runtime::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"xcm_fee_payment_runtime_api/dry_run/struct.CallDryRunEffects.html\" title=\"struct xcm_fee_payment_runtime_api::dry_run::CallDryRunEffects\">CallDryRunEffects</a>&lt;<a class=\"enum\" href=\"rococo_runtime/enum.RuntimeEvent.html\" title=\"enum rococo_runtime::RuntimeEvent\">RuntimeEvent</a>&gt;, <a class=\"enum\" href=\"xcm_fee_payment_runtime_api/dry_run/enum.Error.html\" title=\"enum xcm_fee_payment_runtime_api::dry_run::Error\">Error</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"staging_xcm/enum.VersionedLocation.html\" title=\"enum staging_xcm::VersionedLocation\">VersionedLocation</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"staging_xcm/enum.VersionedXcm.html\" title=\"enum staging_xcm::VersionedXcm\">VersionedXcm</a>&lt;<a class=\"enum\" href=\"rococo_runtime/enum.RuntimeCall.html\" title=\"enum rococo_runtime::RuntimeCall\">RuntimeCall</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"xcm_fee_payment_runtime_api/dry_run/struct.XcmDryRunEffects.html\" title=\"struct xcm_fee_payment_runtime_api::dry_run::XcmDryRunEffects\">XcmDryRunEffects</a>&lt;<a class=\"enum\" href=\"rococo_runtime/enum.RuntimeEvent.html\" title=\"enum rococo_runtime::RuntimeEvent\">RuntimeEvent</a>&gt;, <a class=\"enum\" href=\"xcm_fee_payment_runtime_api/dry_run/enum.Error.html\" title=\"enum xcm_fee_payment_runtime_api::dry_run::Error\">Error</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    __SrApiBlock__::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</div>"]],
"westend_runtime":[["impl&lt;__SrApiBlock__: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>, RuntimeApiImplCall: <a class=\"trait\" href=\"sp_api/trait.CallApiAt.html\" title=\"trait sp_api::CallApiAt\">CallApiAt</a>&lt;__SrApiBlock__&gt; + 'static&gt; <a class=\"trait\" href=\"xcm_fee_payment_runtime_api/dry_run/trait.DryRunApi.html\" title=\"trait xcm_fee_payment_runtime_api::dry_run::DryRunApi\">DryRunApi</a>&lt;__SrApiBlock__, <a class=\"enum\" href=\"westend_runtime/enum.RuntimeCall.html\" title=\"enum westend_runtime::RuntimeCall\">RuntimeCall</a>, <a class=\"enum\" href=\"westend_runtime/enum.RuntimeEvent.html\" title=\"enum westend_runtime::RuntimeEvent\">RuntimeEvent</a>, <a class=\"enum\" href=\"westend_runtime/enum.OriginCaller.html\" title=\"enum westend_runtime::OriginCaller\">OriginCaller</a>&gt; for <a class=\"struct\" href=\"westend_runtime/struct.RuntimeApiImpl.html\" title=\"struct westend_runtime::RuntimeApiImpl\">RuntimeApiImpl</a>&lt;__SrApiBlock__, RuntimeApiImplCall&gt;<div class=\"where\">where\n    RuntimeApiImplCall::<a class=\"associatedtype\" href=\"sp_api/trait.CallApiAt.html#associatedtype.StateBackend\" title=\"type sp_api::CallApiAt::StateBackend\">StateBackend</a>: <a class=\"trait\" href=\"sp_state_machine/backend/trait.Backend.html\" title=\"trait sp_state_machine::backend::Backend\">StateBackend</a>&lt;<a class=\"type\" href=\"sp_runtime/traits/type.HashingFor.html\" title=\"type sp_runtime::traits::HashingFor\">HashingFor</a>&lt;__SrApiBlock__&gt;&gt;,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;'static RuntimeApiImplCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    <a class=\"enum\" href=\"westend_runtime/enum.OriginCaller.html\" title=\"enum westend_runtime::OriginCaller\">OriginCaller</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"westend_runtime/enum.RuntimeCall.html\" title=\"enum westend_runtime::RuntimeCall\">RuntimeCall</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"xcm_fee_payment_runtime_api/dry_run/struct.CallDryRunEffects.html\" title=\"struct xcm_fee_payment_runtime_api::dry_run::CallDryRunEffects\">CallDryRunEffects</a>&lt;<a class=\"enum\" href=\"westend_runtime/enum.RuntimeEvent.html\" title=\"enum westend_runtime::RuntimeEvent\">RuntimeEvent</a>&gt;, <a class=\"enum\" href=\"xcm_fee_payment_runtime_api/dry_run/enum.Error.html\" title=\"enum xcm_fee_payment_runtime_api::dry_run::Error\">Error</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"staging_xcm/enum.VersionedLocation.html\" title=\"enum staging_xcm::VersionedLocation\">VersionedLocation</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"staging_xcm/enum.VersionedXcm.html\" title=\"enum staging_xcm::VersionedXcm\">VersionedXcm</a>&lt;<a class=\"enum\" href=\"westend_runtime/enum.RuntimeCall.html\" title=\"enum westend_runtime::RuntimeCall\">RuntimeCall</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"xcm_fee_payment_runtime_api/dry_run/struct.XcmDryRunEffects.html\" title=\"struct xcm_fee_payment_runtime_api::dry_run::XcmDryRunEffects\">XcmDryRunEffects</a>&lt;<a class=\"enum\" href=\"westend_runtime/enum.RuntimeEvent.html\" title=\"enum westend_runtime::RuntimeEvent\">RuntimeEvent</a>&gt;, <a class=\"enum\" href=\"xcm_fee_payment_runtime_api/dry_run/enum.Error.html\" title=\"enum xcm_fee_payment_runtime_api::dry_run::Error\">Error</a>&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    __SrApiBlock__::<a class=\"associatedtype\" href=\"sp_runtime/traits/trait.Block.html#associatedtype.Header\" title=\"type sp_runtime::traits::Block::Header\">Header</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()