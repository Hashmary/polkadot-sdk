searchState.loadedDescShard("pallet_session", 0, "Session Pallet\nWraps the author-scraping logic for consensus engines that …\nAll the key type ids this session handler can process.\nEnds the session after a fixed period of blocks.\nHandler for session life cycle events.\nA trait for managing creation of new validator set.\nDecides whether the session should be ended.\n<code>SessionHandler</code> for tests that use <code>UintAuthorityId</code> as <code>Keys</code>.\nEnd the session.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nAn opt-in utility for tracking historical sessions in …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPlan a new session, and optionally provide the new …\nSame as <code>new_session</code>, but it this should only be called at …\nA notification for end of the session.\nA validator got disabled. Act accordingly until a new …\nThe given validator set will be used for the genesis …\nSession set has changed; act appropriately. Note that this …\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nReturn <code>true</code> if the session should be ended.\nStart an already planned session.\nAutogenerated weights for <code>pallet_session</code>\nA tuple of the validator’s ID and their full …\nAn <code>SessionManager</code> implementation that wraps an inner <code>I</code> and …\nA trie instance for checking and generating proofs.\nSpecialization of the crate-level <code>SessionManager</code> which …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf there was a validator set change, its returns the set …\nOff-chain logic for creating a proof based data provided …\nOn-chain logic to store a validator-set for deferred …\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nProve the full verification data for a given key and key …\nAccess the underlying trie root.\nKeep the newest <code>n</code> items, and prune all items older than …\nCreate a proof based on the data available in the …\nAttempt to prune anything that is older than <code>first_to_keep</code> …\nStore the validator set associated to the <em>current</em> session …\nStore the validator-set associated to the <code>session_index</code> to …\nContains a variant per dispatchable extrinsic that this …\nConfiguration trait of this pallet.\nFull identification of the validator.\nA conversion from validator ID to full identification.\nMapping from historical session indices to session-data …\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nThe <code>Pallet</code> struct, the main type that implements traits …\nThe range of historical sessions we store. [first, last)\nAuto-generated docs-only module listing all defined …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nAn auto-generated getter for <code>HistoricalSessions</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPrune historical stored session roots up to (but not …\nAuto-generated docs-only module listing all (public and …\nMapping from historical session indices to session-data …\nThe range of historical sessions we store. [first, last)\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nVersion 1.\nMigrate the entire storage of this pallet to a new prefix.\nSome checks for after migration. This can be linked to …\nSome checks prior to migration. This can be linked to …\nContains a variant per dispatchable extrinsic that this …\nConfiguration trait of this pallet.\nCurrent index of the session.\nIndices of disabled validators.\nRegistered duplicate key.\nError for the session pallet.\nThe <code>Event</code> enum of this pallet\nCan be used to configure the genesis state of this pallet.\nInvalid ownership proof.\nThe owner of a key. The key is the <code>KeyTypeId</code> + the encoded …\nThe keys.\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nNew session has happened. Note that the argument is the …\nThe next session keys for a validator.\nSomething that can predict the next session rotation. This …\nKey setting account is not live, so it’s impossible to …\nNo associated validator ID for account.\nNo keys are associated with this account.\nThe <code>Pallet</code> struct, the main type that implements traits …\nTrue if the underlying economic identities or weighting …\nThe queued keys for the next session. When the next …\nThe overarching event type.\nHandler when a session has changed.\nHandler for managing new session.\nIndicator for when to end the session.\nA stable ID for a validator.\nA conversion from account ID to validator ID.\nThe current set of validators.\nWeight information for extrinsics in this pallet.\nPublic function to access the current session index.\nDisable the validator identified by <code>c</code>. (If using with the …\nDisable the validator of index <code>i</code>, returns <code>false</code> if the …\nPublic function to access the disabled validators.\nAuto-generated docs-only module listing all defined …\nThis session pallet always calls new_session and …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nQuery the owner of a session key by returning the owner’…\nInitial list of validator at genesis representing by their …\nCreate a call with the variant <code>purge_keys</code>.\nCreate a call with the variant <code>set_keys</code>.\nList of (AccountId, ValidatorId, Keys) that will be …\nCalled when a block is initialized. Will rotate session if …\nRemoves any session key(s) of the function caller.\nRemoves any session key(s) of the function caller.\nPublic function to access the queued keys.\nMove on to next session. Register new validator set and …\nSets the session key(s) of the function caller to <code>keys</code>. …\nSets the session key(s) of the function caller to <code>keys</code>. …\nAuto-generated docs-only module listing all (public and …\nUpgrade the key type from some old type to a new type. …\nPublic function to access the current set of validators.\nRemoves any session key(s) of the function caller.\nSets the session key(s) of the function caller to <code>keys</code>. …\nCurrent index of the session.\nIndices of disabled validators.\nThe owner of a key. The key is the <code>KeyTypeId</code> + the encoded …\nThe next session keys for a validator.\nTrue if the underlying economic identities or weighting …\nThe queued keys for the next session. When the next …\nThe current set of validators.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWeights for <code>pallet_session</code> using the Substrate node and …\nWeight functions needed for <code>pallet_session</code>.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nStorage: <code>Staking::Ledger</code> (r:1 w:0) Proof: <code>Staking::Ledger</code> (…\nStorage: <code>Staking::Ledger</code> (r:1 w:0) Proof: <code>Staking::Ledger</code> (…")