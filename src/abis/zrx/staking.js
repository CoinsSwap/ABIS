export default [
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
              name: 'epoch',
              type: 'uint256',
              indexed: true,
          },
          {
              name: 'numPoolsToFinalize',
              type: 'uint256',
              indexed: false,
          },
          {
              name: 'rewardsAvailable',
              type: 'uint256',
              indexed: false,
          },
          {
              name: 'totalFeesCollected',
              type: 'uint256',
              indexed: false,
          },
          {
              name: 'totalWeightedStake',
              type: 'uint256',
              indexed: false,
          },
      ],
      name: 'EpochEnded',
      outputs: [],
      type: 'event',
  },
  {
      anonymous: false,
      inputs: [
          {
              name: 'epoch',
              type: 'uint256',
              indexed: true,
          },
          {
              name: 'rewardsPaid',
              type: 'uint256',
              indexed: false,
          },
          {
              name: 'rewardsRemaining',
              type: 'uint256',
              indexed: false,
          },
      ],
      name: 'EpochFinalized',
      outputs: [],
      type: 'event',
  },
  {
      anonymous: false,
      inputs: [
          {
              name: 'exchangeAddress',
              type: 'address',
              indexed: false,
          },
      ],
      name: 'ExchangeAdded',
      outputs: [],
      type: 'event',
  },
  {
      anonymous: false,
      inputs: [
          {
              name: 'exchangeAddress',
              type: 'address',
              indexed: false,
          },
      ],
      name: 'ExchangeRemoved',
      outputs: [],
      type: 'event',
  },
  {
      anonymous: false,
      inputs: [
          {
              name: 'makerAddress',
              type: 'address',
              indexed: true,
          },
          {
              name: 'poolId',
              type: 'bytes32',
              indexed: true,
          },
      ],
      name: 'MakerStakingPoolSet',
      outputs: [],
      type: 'event',
  },
  {
      anonymous: false,
      inputs: [
          {
              name: 'staker',
              type: 'address',
              indexed: true,
          },
          {
              name: 'amount',
              type: 'uint256',
              indexed: false,
          },
          {
              name: 'fromStatus',
              type: 'uint8',
              indexed: false,
          },
          {
              name: 'fromPool',
              type: 'bytes32',
              indexed: true,
          },
          {
              name: 'toStatus',
              type: 'uint8',
              indexed: false,
          },
          {
              name: 'toPool',
              type: 'bytes32',
              indexed: true,
          },
      ],
      name: 'MoveStake',
      outputs: [],
      type: 'event',
  },
  {
      anonymous: false,
      inputs: [
          {
              name: 'poolId',
              type: 'bytes32',
              indexed: true,
          },
          {
              name: 'oldOperatorShare',
              type: 'uint32',
              indexed: false,
          },
          {
              name: 'newOperatorShare',
              type: 'uint32',
              indexed: false,
          },
      ],
      name: 'OperatorShareDecreased',
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
              name: 'epochDurationInSeconds',
              type: 'uint256',
              indexed: false,
          },
          {
              name: 'rewardDelegatedStakeWeight',
              type: 'uint32',
              indexed: false,
          },
          {
              name: 'minimumPoolStake',
              type: 'uint256',
              indexed: false,
          },
          {
              name: 'cobbDouglasAlphaNumerator',
              type: 'uint256',
              indexed: false,
          },
          {
              name: 'cobbDouglasAlphaDenominator',
              type: 'uint256',
              indexed: false,
          },
      ],
      name: 'ParamsSet',
      outputs: [],
      type: 'event',
  },
  {
      anonymous: false,
      inputs: [
          {
              name: 'epoch',
              type: 'uint256',
              indexed: true,
          },
          {
              name: 'poolId',
              type: 'bytes32',
              indexed: true,
          },
          {
              name: 'operatorReward',
              type: 'uint256',
              indexed: false,
          },
          {
              name: 'membersReward',
              type: 'uint256',
              indexed: false,
          },
      ],
      name: 'RewardsPaid',
      outputs: [],
      type: 'event',
  },
  {
      anonymous: false,
      inputs: [
          {
              name: 'staker',
              type: 'address',
              indexed: true,
          },
          {
              name: 'amount',
              type: 'uint256',
              indexed: false,
          },
      ],
      name: 'Stake',
      outputs: [],
      type: 'event',
  },
  {
      anonymous: false,
      inputs: [
          {
              name: 'poolId',
              type: 'bytes32',
              indexed: false,
          },
          {
              name: 'operator',
              type: 'address',
              indexed: false,
          },
          {
              name: 'operatorShare',
              type: 'uint32',
              indexed: false,
          },
      ],
      name: 'StakingPoolCreated',
      outputs: [],
      type: 'event',
  },
  {
      anonymous: false,
      inputs: [
          {
              name: 'epoch',
              type: 'uint256',
              indexed: true,
          },
          {
              name: 'poolId',
              type: 'bytes32',
              indexed: true,
          },
      ],
      name: 'StakingPoolEarnedRewardsInEpoch',
      outputs: [],
      type: 'event',
  },
  {
      anonymous: false,
      inputs: [
          {
              name: 'staker',
              type: 'address',
              indexed: true,
          },
          {
              name: 'amount',
              type: 'uint256',
              indexed: false,
          },
      ],
      name: 'Unstake',
      outputs: [],
      type: 'event',
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
      constant: false,
      inputs: [
          {
              name: 'addr',
              type: 'address',
          },
      ],
      name: 'addExchangeAddress',
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
      inputs: [
          {
              name: 'poolId',
              type: 'bytes32',
          },
          {
              name: 'member',
              type: 'address',
          },
      ],
      name: 'computeRewardBalanceOfDelegator',
      outputs: [
          {
              name: 'reward',
              type: 'uint256',
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
              name: 'poolId',
              type: 'bytes32',
          },
      ],
      name: 'computeRewardBalanceOfOperator',
      outputs: [
          {
              name: 'reward',
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
              name: 'operatorShare',
              type: 'uint32',
          },
          {
              name: 'addOperatorAsMaker',
              type: 'bool',
          },
      ],
      name: 'createStakingPool',
      outputs: [
          {
              name: 'poolId',
              type: 'bytes32',
          },
      ],
      payable: false,
      stateMutability: 'nonpayable',
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
      inputs: [
          {
              name: 'poolId',
              type: 'bytes32',
          },
          {
              name: 'newOperatorShare',
              type: 'uint32',
          },
      ],
      name: 'decreaseStakingPoolOperatorShare',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
  },
  {
      constant: false,
      inputs: [],
      name: 'endEpoch',
      outputs: [
          {
              name: '',
              type: 'uint256',
          },
      ],
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
      constant: false,
      inputs: [
          {
              name: 'poolId',
              type: 'bytes32',
          },
      ],
      name: 'finalizePool',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
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
      name: 'getCurrentEpochEarliestEndTimeInSeconds',
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
      inputs: [
          {
              name: 'stakeStatus',
              type: 'uint8',
          },
      ],
      name: 'getGlobalStakeByStatus',
      outputs: [
          {
              name: 'balance',
              type: 'tuple',
              components: [
                  {
                      name: 'currentEpoch',
                      type: 'uint64',
                  },
                  {
                      name: 'currentEpochBalance',
                      type: 'uint96',
                  },
                  {
                      name: 'nextEpochBalance',
                      type: 'uint96',
                  },
              ],
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
              name: 'staker',
              type: 'address',
          },
          {
              name: 'stakeStatus',
              type: 'uint8',
          },
      ],
      name: 'getOwnerStakeByStatus',
      outputs: [
          {
              name: 'balance',
              type: 'tuple',
              components: [
                  {
                      name: 'currentEpoch',
                      type: 'uint64',
                  },
                  {
                      name: 'currentEpochBalance',
                      type: 'uint96',
                  },
                  {
                      name: 'nextEpochBalance',
                      type: 'uint96',
                  },
              ],
          },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
  },
  {
      constant: true,
      inputs: [],
      name: 'getParams',
      outputs: [
          {
              name: '_epochDurationInSeconds',
              type: 'uint256',
          },
          {
              name: '_rewardDelegatedStakeWeight',
              type: 'uint32',
          },
          {
              name: '_minimumPoolStake',
              type: 'uint256',
          },
          {
              name: '_cobbDouglasAlphaNumerator',
              type: 'uint32',
          },
          {
              name: '_cobbDouglasAlphaDenominator',
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
              name: 'staker',
              type: 'address',
          },
          {
              name: 'poolId',
              type: 'bytes32',
          },
      ],
      name: 'getStakeDelegatedToPoolByOwner',
      outputs: [
          {
              name: 'balance',
              type: 'tuple',
              components: [
                  {
                      name: 'currentEpoch',
                      type: 'uint64',
                  },
                  {
                      name: 'currentEpochBalance',
                      type: 'uint96',
                  },
                  {
                      name: 'nextEpochBalance',
                      type: 'uint96',
                  },
              ],
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
              name: 'poolId',
              type: 'bytes32',
          },
      ],
      name: 'getStakingPool',
      outputs: [
          {
              name: '',
              type: 'tuple',
              components: [
                  {
                      name: 'operator',
                      type: 'address',
                  },
                  {
                      name: 'operatorShare',
                      type: 'uint32',
                  },
              ],
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
              name: 'poolId',
              type: 'bytes32',
          },
      ],
      name: 'getStakingPoolStatsThisEpoch',
      outputs: [
          {
              name: '',
              type: 'tuple',
              components: [
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
              name: 'staker',
              type: 'address',
          },
      ],
      name: 'getTotalStake',
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
      inputs: [
          {
              name: 'poolId',
              type: 'bytes32',
          },
      ],
      name: 'getTotalStakeDelegatedToPool',
      outputs: [
          {
              name: 'balance',
              type: 'tuple',
              components: [
                  {
                      name: 'currentEpoch',
                      type: 'uint64',
                  },
                  {
                      name: 'currentEpochBalance',
                      type: 'uint96',
                  },
                  {
                      name: 'nextEpochBalance',
                      type: 'uint96',
                  },
              ],
          },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
  },
  {
      constant: true,
      inputs: [],
      name: 'getWethContract',
      outputs: [
          {
              name: 'wethContract',
              type: 'address',
          },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
  },
  {
      constant: true,
      inputs: [],
      name: 'getZrxVault',
      outputs: [
          {
              name: 'zrxVault',
              type: 'address',
          },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
  },
  {
      constant: false,
      inputs: [],
      name: 'init',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
  },
  {
      constant: false,
      inputs: [
          {
              name: 'poolId',
              type: 'bytes32',
          },
      ],
      name: 'joinStakingPoolAsMaker',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
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
      constant: false,
      inputs: [
          {
              name: 'from',
              type: 'tuple',
              components: [
                  {
                      name: 'status',
                      type: 'uint8',
                  },
                  {
                      name: 'poolId',
                      type: 'bytes32',
                  },
              ],
          },
          {
              name: 'to',
              type: 'tuple',
              components: [
                  {
                      name: 'status',
                      type: 'uint8',
                  },
                  {
                      name: 'poolId',
                      type: 'bytes32',
                  },
              ],
          },
          {
              name: 'amount',
              type: 'uint256',
          },
      ],
      name: 'moveStake',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
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
      constant: false,
      inputs: [
          {
              name: 'makerAddress',
              type: 'address',
          },
          {
              name: 'payerAddress',
              type: 'address',
          },
          {
              name: 'protocolFee',
              type: 'uint256',
          },
      ],
      name: 'payProtocolFee',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
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
      constant: false,
      inputs: [
          {
              name: 'addr',
              type: 'address',
          },
      ],
      name: 'removeExchangeAddress',
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
      constant: false,
      inputs: [
          {
              name: '_epochDurationInSeconds',
              type: 'uint256',
          },
          {
              name: '_rewardDelegatedStakeWeight',
              type: 'uint32',
          },
          {
              name: '_minimumPoolStake',
              type: 'uint256',
          },
          {
              name: '_cobbDouglasAlphaNumerator',
              type: 'uint32',
          },
          {
              name: '_cobbDouglasAlphaDenominator',
              type: 'uint32',
          },
      ],
      name: 'setParams',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
  },
  {
      constant: false,
      inputs: [
          {
              name: 'amount',
              type: 'uint256',
          },
      ],
      name: 'stake',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
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
      constant: false,
      inputs: [
          {
              name: 'amount',
              type: 'uint256',
          },
      ],
      name: 'unstake',
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
  },
  {
      constant: false,
      inputs: [
          {
              name: 'poolId',
              type: 'bytes32',
          },
      ],
      name: 'withdrawDelegatorRewards',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
  }
]
