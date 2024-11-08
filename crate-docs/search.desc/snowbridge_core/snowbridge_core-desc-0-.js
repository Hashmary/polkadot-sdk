searchState.loadedDescShard("snowbridge_core", 0, "Core\nMetadata to include in the instantiated ERC20 token …\nThe ID of an agent contract\nIdentifier for a message channel\nDetermine if a parachain is a system parachain or not.\nMaximum value.\nChannel for high-priority governance commands\nUnique identifier of a parachain.\nChannel for lower-priority governance commands\nType to lookup from.\nType to lookup into.\nLittle-endian large integer type 256-bit unsigned integer.\nComputes the absolute difference between self and other.\nID of the agent contract deployed on Ethereum\nConversion to u128 with overflow checking\nConversion to u32 with overflow checking\nConversion to u64 with overflow checking\nConversion to usize with overflow checking\nReturn if specific bit is set.\nReturn the least number of bits needed to represent the …\nReturn specific byte.\nChecked addition. Returns <code>None</code> if overflow occurred.\nChecked division. Returns <code>None</code> if <code>other == 0</code>.\nChecked multiplication. Returns <code>None</code> if overflow occurred.\nChecked negation. Returns <code>None</code> unless <code>self == 0</code>.\nChecked exponentiation. Returns <code>None</code> if overflow occurred.\nChecked modulus. Returns <code>None</code> if <code>other == 0</code>.\nChecked subtraction. Returns <code>None</code> if overflow occurred.\nReturns a pair <code>(self / other, self % other)</code>.\nCreate <code>10**n</code> as this type.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts from big endian representation bytes in memory.\nConvert from a decimal string.\nConverts from little endian representation bytes in memory.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nConverts a string slice in a given base to an integer. …\nMultiplies two 256-bit integers to produce full 512-bit …\nTypes for representing inbound messages\nCompute the highest <code>n</code> such that <code>n * n &lt;= self</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if a parachain is a system parachain, <code>false</code> …\nWhether this is zero.\nReturns the number of leading zeros in the binary …\nLocation\nAttempt a lookup.\nLow 2 words (u128)\nConversion to u32\nLow word (u64)\nThe maximum value which can be inhabited by this type.\nCreate an <code>Id</code>.\nOne (multiplicative identity) of this type.\nAddition which overflows and returns a flag if it does.\nMultiply with overflow, returning a flag if it does.\nNegation with overflow.\nFast exponentiation by squaring. Returns result and …\nSubtraction which underflows and returns a flag if it does.\nID of the parachain who will receive or send messages …\nFast exponentiation by squaring …\nAddition which saturates at the maximum value (Self::MAX).\nMultiplication which saturates at the maximum value..\nSubtraction which saturates at zero.\nWrite to the slice in big-endian format.\nWrite to the slice in little-endian format.\nReturns the number of trailing zeros in the binary …\nZero (additive identity) of this type.\nExecution header is missing\nUnable to verify the execution header with ancestry proof\nEvent log has an invalid format\nUnable to verify the transaction receipt with the provided …\nEvent log\nEvent log was not found in the verified transaction receipt\nA bridge message from the Gateway contract on Ethereum\nInclusion proof for a transaction receipt\nA trait for verifying inbound messages from Ethereum.\nEvent log emitted by Gateway contract\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nInclusion proof for a transaction receipt containing the …\nCreates an AgentId from a Location. An AgentId is a unique …\nThis looks like DescribeTerminus that was added to …\nDetermine if a parachain is a system parachain or not.\nUnique identifier of a parachain.\nConvert a token location (relative to Ethereum) to a …\nLittle-endian large integer type 256-bit unsigned integer.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if a parachain is a system parachain, <code>false</code> …\nBasic operating modes for a bridges module (Normal/Halted).\nThe pallet is halted. All non-governance operations are …\nNormal mode, when all operations are allowed.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nExecute a sub-command within an agent for a consensus …\nA Sub-command executable within an agent\nA command which is executable by the Gateway contract on …\nA meter that assigns a constant amount of gas for the …\nCreate an agent representing a consensus system on Polkadot\nCreate bidirectional messaging channel to a parachain\nFee for delivering message\nThe bridge has been halted for maintenance\nRepresentation of a call to the initializer of an …\nInvalid Channel\nAll the gas used for submitting a message to Ethereum, …\nA message which can be accepted by implementations of <code>/[</code>…\nMessage is too large to be safely executed on Ethereum\nMint foreign token from Polkadot\nNormal operations. Allow sending and receiving messages.\nThe operating mode of Channels and Gateway contract on …\nMessage which is awaiting processing in the MessageQueue …\nRegister foreign token from Polkadot\nReject outbound messages. This allows receiving governance …\nReasons why sending to Ethereum could not be initiated\nA trait for sending messages to Ethereum\nA trait for getting the local costs associated with …\nSet the global operating mode of the Gateway contract\nSet pricing parameters\nSet token fees of the Gateway contract\nTransfer ether from an agent contract to a recipient …\nTransfer ERC20 tokens\nTransfer ERC20 tokens\nUpdate the configuration of a channel\nUpgrade the Gateway contract\nEnqueued outbound messages need to be versioned to prevent …\nABI-encode the Command.\nABI-encode the sub-command\nThe message channel ID\nChannel ID\nThe stable ID for a receiving gateway contract\nCommand to execute in the Gateway contract\nSubmit the message ticket for eventual delivery to Ethereum\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nID for this message. One will be automatically generated …\nMessage ID\nCompute the enum variant index\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nFee to cover cost of processing the message locally\nThe local component of the message processing fees in …\nMeasures the maximum amount of gas a command payload will …\nTotal gas consumed at most, including verification &amp; …\nThe initializer is allowed to consume this much gas at …\nABI-encoded params of type <code>bytes</code> to pass to the initializer\nFee to cover cost processing the message remotely\nValidate an outbound message and return a tuple:\nThe amount of tokens to transfer\nThe recipient of the tokens\nAddress of the ERC20 token\nThe ID of the agent\nThe ID of the agent, derived from the <code>MultiLocation</code> of the …\nThe agent ID of the parachain\nThe agent ID\nID of the agent\nThe amount to transfer\nThe amount of tokens to transfer\nThe amount of tokens to mint\nThe ID of the channel\nThe ID of the channel\nThe sub-command to be executed\nThe fee(DOT) for the cost of creating asset on AssetHub\nNumber of decimal places\nAddress of the new implementation contract\nCodehash of the implementation contract\nOptionally invoke an initializer in the implementation …\nInitial operating mode\nThe new operating mode\nThe new operating mode\nName of the token\nThe recipient of the ether\nThe recipient of the tokens\nThe recipient of the newly minted tokens\nThe fee(Ether) for register token to discourage spamming\nShort symbol for the token\nAddress of the ERC20 token\nID for the token\nID for the token\nThe fee(DOT) for the cost of sending asset on AssetHub\nHolder for fixed point number implemented in …\nETH/DOT exchange rate\nEther (wei) fee per gas unit\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLocal reward in DOT\nFee multiplier\nRemote reward in ETH (wei)\nRelayer rewards\nTrait object presenting the ringbuffer interface.\nCheck if map contains a key\nCheck if map contains a key\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet the value of the key\nGet the value associated with key\nInsert a map entry.\nInsert a map entry.\nCalls <code>U::from(self)</code>.")