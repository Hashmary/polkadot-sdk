searchState.loadedDescShard("sc_consensus_grandpa", 0, "Integration of the GRANDPA finality gadget into substrate.\nIdentity of a Grandpa authority.\nThe grandpa crypto scheme defined via the keypair type.\nA set of authorities.\nTracks historical authority set changes. We store the …\nA descriptor for an authority set hard fork. These are …\nA custom voting rule that guarantees that our vote is …\nThe requested block is not covered by authority set …\nThe requested block has not yet been finalized.\nArithmetic necessary for a block number.\nA blockchain error.\nA catch up message for this chain’s block type.\nErrors originating from the client.\nCould not complete a round on disk.\nA trait that includes all the client functionalities …\nA commit message for this chain’s block type.\nA compact commit message for this chain’s block type.\nConfiguration for the GRANDPA service\nErrors that can occur while voting in GRANDPA.\nFinality for block B is proved by providing:\nErrors occurring when trying to prove finality\nFinality proof provider for serving network requests.\nProvider for the Grandpa authority set configured on the …\nAn error within grandpa.\nAPIs for integrating the GRANDPA finality gadget into …\nA block-import handler for GRANDPA.\nA GRANDPA justification for block finality, it includes a …\nThe sending half of the Grandpa justification channel(s).\nThe receiving half of the Grandpa justification channel.\nParameters used to run Grandpa.\nLink between the block importer and the background voter.\nA GRANDPA message for a substrate chain.\nA network error.\nA precommit message for this chain’s block type.\nA precommit message.\nA prevote message for this chain’s block type.\nA prevote message.\nA primary propose message for this chain’s block type.\nA primary proposal message.\nA runtime api request failed.\nAn invariant has been violated (e.g. not finalizing …\nA scheduled change of authority set.\nA shared authority set.\nShared voter state for querying.\nA signed message.\nCould not sign outgoing message\nA custom voting rule that limits votes towards 3/4 of the …\nA timer failed to fire.\nA trait for custom voting rules in GRANDPA.\nA future returned by a <code>VotingRule</code> to restrict a given …\nA builder of a composite voting rule that applies a set of …\nAdd a new voting rule to the builder.\nAdd all given voting rules to the builder.\nAuthentication data for the commit.\nThe authorities in the new set.\nClone the inner <code>AuthoritySetChanges</code>.\nThe base hash. See struct docs.\nThe base number. See struct docs.\nFetch the justification for the latest block finalized by …\nThe block hash and number at which the hard fork should be …\nThe hash of block F for which justification is provided.\nMake block importer and link half necessary to tie the …\nMake block importer and link half necessary to tie the …\nReturn a new <code>VotingRule</code> that applies all of the previously …\nClone the inner <code>AuthoritySet</code>.\nConfiguration for the GRANDPA service.\nGet the current authorities and their weights (for the …\nGet current GRANDPA authority set id.\nDecode a GRANDPA justification and validate the commit and …\nThe number of blocks to delay.\nCreate a new empty <code>SharedVoterState</code> instance.\nCheck whether the given finalized block number enacts any …\nChecks the given header for a consensus digest signalling …\nChecks the given header for a consensus digest signalling …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a GRANDPA justification from the given commit. This …\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGenerates a proof of key ownership for the given authority …\nGet the authority set at the genesis block.\nThe expected duration for a message to be gossiped across …\nGet the current GRANDPA authorities and weights. This …\nReturns the configuration value to put in …\nThe Id of the signer\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns an iterator over all historical authority set …\nJustification of the block F.\nThe GRANDPA justification for block finality.\nJustification generation period (in blocks). GRANDPA will …\nGet the receiving end of justification notifications.\nThe keystore that manages the keys of this node.\nThe latest block number that was finalized before this …\nA link to the block import worker.\nThe role of the local node (i.e. authority, full-node or …\nThe internal message which has been signed.\nSome local identifier of the voter.\nThe Network instance.\nReturn a new voting rule builder using the given backend.\nCreate new finality proof provider using:\nCreate new finality proof provider for the service using:\nThe new authorities after the change, along with their …\nHandle for interacting with <code>Notifications</code>.\nWhether the GRANDPA observer protocol is live on the …\nOffchain transaction pool factory.\nPrecommits for target block or any block after it that …\nPrecommits for target block or any block after it that …\nPrecommits for target block or any block after it that …\nPrevotes for target block or any block after it that …\nThe prometheus metrics registry.\nChain specific GRANDPA protocol name. See …\nName of the notifications protocol used by GRANDPA.\nProve finality for the given block number by returning a …\nProve finality for the given block number by returning a …\nContains a number of data transfer objects for reporting …\nRestrict the given <code>current_target</code> vote, returning the …\nReverts protocol aux data to at most the last finalized …\nRound number.\nRun a GRANDPA observer as a task, the observer will …\nRun a GRANDPA voter as a task. Provide configuration and a …\nGet the current set ID. This is incremented every time the …\nThe new authority set id.\nGet the shared authority set.\nThe voter state is exposed at an RPC endpoint.\nThe signature on the message.\nSubmits an unsigned extrinsic to report an equivocation. …\nEvent stream for syncing-related events.\nThe target block number and hash that this justifications …\nThe target block’s hash.\nThe target block’s hash.\nThe target block’s hash.\nThe target block’s hash.\nThe target block’s hash.\nThe target block’s number\nThe target block’s number.\nThe target block’s number\nThe target block’s number.\nThe target block’s number.\nTelemetryHandle instance.\nTelemetryHandle instance.\nThe set of headers in the range (B; F] that we believe are …\nValidate the commit and the votes’ ancestry proofs.\nGet the inner <code>VoterState</code> instance.\nA voting rule used to potentially restrict target votes.\nUtilities for generating and verifying GRANDPA warp sync …\nBasic data struct for the state of a round.\nBasic data struct for the current state of the voter in a …\nVoting rounds running in the background.\nThe current best voting round.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCurrent weight of the precommits.\nThe identities of nodes that have cast precommits so far.\nCurrent weight of the prevotes.\nThe identities of nodes that have cast prevotes so far.\nThe threshold voter weight.\nTotal weight of all votes.\nClient backend error.\nDecoding error.\nWarp proof processing error.\nInvalid warp proof.\nInvalid request data.\nMissing header or authority set change data.\nImplements network API for warp sync.\nA proof of an authority set change.\nAn accumulated proof of multiple authority set changes.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nThe last block that the given authority set finalized. …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA justification for the header above which proves its …\nCreate a new instance for a given backend and authority …")