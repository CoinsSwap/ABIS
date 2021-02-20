export default [
    {
        inputs: [
            {
                name: '_stakingContract',
                type: 'address',
            },
        ],
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                name: 'target',
                type: 'address',
                indexed: true,
            },
            {
                name: 'caller',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'AuthorizedAddressAdded',
        outputs: [],
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                name: 'target',
                type: 'address',
                indexed: true,
            },
            {
                name: 'caller',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'AuthorizedAddressRemoved',
        outputs: [],
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                name: 'previousOwner',
                type: 'address',
                indexed: true,
            },
            {
                name: 'newOwner',
                type: 'address',
                indexed: true,
            },
        ],
        name: 'OwnershipTransferred',
        outputs: [],
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                name: 'newStakingContractAddress',
                type: 'address',
                indexed: false,
            },
        ],
        name: 'StakingContractAttachedToProxy',
        outputs: [],
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [],
        name: 'StakingContractDetachedFromProxy',
        outputs: [],
        type: 'event',
    },
    {
        inputs: [],
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'fallback',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'target',
                type: 'address',
            },
        ],
        name: 'addAuthorizedAddress',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'index_0',
                type: 'uint256',
            },
        ],
        name: 'aggregatedStatsByEpoch',
        outputs: [
            {
                name: 'rewardsAvailable',
                type: 'uint256',
            },
            {
                name: 'numPoolsToFinalize',
                type: 'uint256',
            },
            {
                name: 'totalFeesCollected',
                type: 'uint256',
            },
            {
                name: 'totalWeightedStake',
                type: 'uint256',
            },
            {
                name: 'totalRewardsFinalized',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'assertValidStorageParams',
        outputs: [],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: '_stakingContract',
                type: 'address',
            },
        ],
        name: 'attachStakingContract',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'index_0',
                type: 'uint256',
            },
        ],
        name: 'authorities',
        outputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'index_0',
                type: 'address',
            },
        ],
        name: 'authorized',
        outputs: [
            {
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'data',
                type: 'bytes[]',
            },
        ],
        name: 'batchExecute',
        outputs: [
            {
                name: 'batchReturnData',
                type: 'bytes[]',
            },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'cobbDouglasAlphaDenominator',
        outputs: [
            {
                name: '',
                type: 'uint32',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'cobbDouglasAlphaNumerator',
        outputs: [
            {
                name: '',
                type: 'uint32',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'currentEpoch',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'currentEpochStartTimeInSeconds',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [],
        name: 'detachStakingContract',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'epochDurationInSeconds',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getAuthorizedAddresses',
        outputs: [
            {
                name: '',
                type: 'address[]',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'lastPoolId',
        outputs: [
            {
                name: '',
                type: 'bytes32',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'minimumPoolStake',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'owner',
        outputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'index_0',
                type: 'address',
            },
        ],
        name: 'poolIdByMaker',
        outputs: [
            {
                name: '',
                type: 'bytes32',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'index_0',
                type: 'bytes32',
            },
            {
                name: 'index_1',
                type: 'uint256',
            },
        ],
        name: 'poolStatsByEpoch',
        outputs: [
            {
                name: 'feesCollected',
                type: 'uint256',
            },
            {
                name: 'weightedStake',
                type: 'uint256',
            },
            {
                name: 'membersStake',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'target',
                type: 'address',
            },
        ],
        name: 'removeAuthorizedAddress',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'target',
                type: 'address',
            },
            {
                name: 'index',
                type: 'uint256',
            },
        ],
        name: 'removeAuthorizedAddressAtIndex',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'rewardDelegatedStakeWeight',
        outputs: [
            {
                name: '',
                type: 'uint32',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'index_0',
                type: 'bytes32',
            },
        ],
        name: 'rewardsByPoolId',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'stakingContract',
        outputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'index_0',
                type: 'address',
            },
        ],
        name: 'validExchanges',
        outputs: [
            {
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'wethReservedForPoolRewards',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    }
]
