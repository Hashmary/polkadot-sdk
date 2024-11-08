searchState.loadedDescShard("pallet_collator_selection", 0, "Collator Selection pallet.\n<code>TypedGet</code> implementation to get the AccountId of the …\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nA module that is responsible for migration of storage for …\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nVersion 1 Migration This migration ensures that any …\nMigrate to v2. Should have been part of …\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\n<code>UncheckedMigrationToV2</code> wrapped in a <code>VersionedMigration</code>, …\nMigrate to V2.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAccount is already a candidate.\nAccount is already an Invulnerable.\nContains a variant per dispatchable extrinsic that this …\nFixed amount to deposit to become a collator.\nA new candidate joined.\nBond of a candidate updated.\nBasic information about a collation candidate.\nThe (community, limited) collation candidates. <code>Candidates</code> …\nA candidate was removed.\nAn account was replaced in the candidate list by another …\nConfiguration trait of this pallet.\nThe currency mechanism.\nNew deposit amount would be below the minimum candidacy …\nDesired number of candidates.\nThe <code>Error</code> enum of this pallet.\nThe <code>Event</code> enum of this pallet\nCan be used to configure the genesis state of this pallet.\nThe updated deposit amount is equal to the amount already …\nA convertor from collators id. Since this pallet does not …\nCould not insert in the candidate list.\nDeposit amount is too low to take the target’s slot in …\nAn account was unable to be added to the Invulnerables …\nCannot lower candidacy bond while occupying a future …\nA new Invulnerable was added.\nAn Invulnerable was removed.\nThe invulnerable, permissioned collators. This list must …\nLast block authored by collator.\nMaximum number of candidates that we should have.\nMaximum number of invulnerables.\nMinimum number eligible collators. Should always be …\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nThe candidacy bond was set.\nThe number of desired candidates was set.\nNew Invulnerables were set.\nAccount has no associated validator ID.\nAccount is not a candidate.\nAccount is not an Invulnerable.\nThe <code>Pallet</code> struct, the main type that implements traits …\nAccount Identifier from which the internal Pot is …\nCould not remove from the candidate list.\nOverarching event type.\nThe target account to be replaced in the candidate list is …\nLeaving would result in too few candidates.\nThe pallet has too many candidates.\nThere are too many Invulnerables.\nCould not update the candidate list.\nOrigin that can dictate updating parameters of this pallet.\nA stable ID for a validator.\nA conversion from account ID to validator ID.\nValidator ID is not yet registered.\nValidate a user is registered\nThe weight information of this pallet.\nGet a unique, inaccessible account ID from the <code>PotId</code>.\nAdd a new account <code>who</code> to the list of <code>Invulnerables</code> …\nAdd a new account <code>who</code> to the list of <code>Invulnerables</code> …\nAssemble the current set of candidates and invulnerables …\nReserved deposit.\nAuto-generated docs-only module listing all defined …\nEnsure the correctness of the state of this pallet.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nKicks out candidates that did not produce a block in the …\nDeregister <code>origin</code> as a collator candidate. Note that the …\nDeregister <code>origin</code> as a collator candidate. Note that the …\nCreate a call with the variant <code>add_invulnerable</code>.\nCreate a call with the variant <code>leave_intent</code>.\nCreate a call with the variant <code>register_as_candidate</code>.\nCreate a call with the variant <code>remove_invulnerable</code>.\nCreate a call with the variant <code>set_candidacy_bond</code>.\nCreate a call with the variant <code>set_desired_candidates</code>.\nCreate a call with the variant <code>set_invulnerables</code>.\nCreate a call with the variant <code>take_candidate_slot</code>.\nCreate a call with the variant <code>update_bond</code>.\nRegister this account as a collator candidate. The account …\nRegister this account as a collator candidate. The account …\nRemove an account <code>who</code> from the list of <code>Invulnerables</code> …\nRemove an account <code>who</code> from the list of <code>Invulnerables</code> …\nSet the candidacy bond amount.\nSet the candidacy bond amount.\nSet the ideal number of non-invulnerable collators. If …\nSet the ideal number of non-invulnerable collators. If …\nSet the list of invulnerable (fixed) collators. These …\nSet the list of invulnerable (fixed) collators. These …\nAuto-generated docs-only module listing all (public and …\nThe caller <code>origin</code> replaces a candidate <code>target</code> in the …\nThe caller <code>origin</code> replaces a candidate <code>target</code> in the …\nUpdate the candidacy bond of collator candidate <code>origin</code> to …\nUpdate the candidacy bond of collator candidate <code>origin</code> to …\nAccount identifier.\nAdd a new account <code>who</code> to the list of <code>Invulnerables</code> …\nDeregister <code>origin</code> as a collator candidate. Note that the …\nRegister this account as a collator candidate. The account …\nRemove an account <code>who</code> from the list of <code>Invulnerables</code> …\nSet the candidacy bond amount.\nSet the ideal number of non-invulnerable collators. If …\nSet the list of invulnerable (fixed) collators. These …\nThe caller <code>origin</code> replaces a candidate <code>target</code> in the …\nUpdate the candidacy bond of collator candidate <code>origin</code> to …\nFixed amount to deposit to become a collator.\nThe (community, limited) collation candidates. <code>Candidates</code> …\nDesired number of candidates.\nThe invulnerable, permissioned collators. This list must …\nLast block authored by collator.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWeights for pallet_collator_selection using the Substrate …\nStorage: Session NextKeys (r:1 w:0) Proof Skipped: Session …\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nStorage: CollatorSelection Invulnerables (r:1 w:1) Proof: …")