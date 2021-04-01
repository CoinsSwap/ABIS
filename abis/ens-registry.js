export default [{
	"inputs": [{
		"internalType": "contract ENS",
		"name": "_old",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"anonymous": false,
	"inputs": [{
			"indexed": true,
			"internalType": "address",
			"name": "owner",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "address",
			"name": "operator",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "bool",
			"name": "approved",
			"type": "bool"
		}
	],
	"name": "ApprovalForAll",
	"type": "event",
	"signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
},
{
	"anonymous": false,
	"inputs": [{
			"indexed": true,
			"internalType": "bytes32",
			"name": "node",
			"type": "bytes32"
		},
		{
			"indexed": true,
			"internalType": "bytes32",
			"name": "label",
			"type": "bytes32"
		},
		{
			"indexed": false,
			"internalType": "address",
			"name": "owner",
			"type": "address"
		}
	],
	"name": "NewOwner",
	"type": "event",
	"signature": "0xce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e82"
},
{
	"anonymous": false,
	"inputs": [{
			"indexed": true,
			"internalType": "bytes32",
			"name": "node",
			"type": "bytes32"
		},
		{
			"indexed": false,
			"internalType": "address",
			"name": "resolver",
			"type": "address"
		}
	],
	"name": "NewResolver",
	"type": "event",
	"signature": "0x335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a0"
},
{
	"anonymous": false,
	"inputs": [{
			"indexed": true,
			"internalType": "bytes32",
			"name": "node",
			"type": "bytes32"
		},
		{
			"indexed": false,
			"internalType": "uint64",
			"name": "ttl",
			"type": "uint64"
		}
	],
	"name": "NewTTL",
	"type": "event",
	"signature": "0x1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa68"
},
{
	"anonymous": false,
	"inputs": [{
			"indexed": true,
			"internalType": "bytes32",
			"name": "node",
			"type": "bytes32"
		},
		{
			"indexed": false,
			"internalType": "address",
			"name": "owner",
			"type": "address"
		}
	],
	"name": "Transfer",
	"type": "event",
	"signature": "0xd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d266"
},
{
	"constant": true,
	"inputs": [{
			"internalType": "address",
			"name": "owner",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "operator",
			"type": "address"
		}
	],
	"name": "isApprovedForAll",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function",
	"signature": "0xe985e9c5"
},
{
	"constant": true,
	"inputs": [],
	"name": "old",
	"outputs": [{
		"internalType": "contract ENS",
		"name": "",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function",
	"signature": "0xb83f8663"
},
{
	"constant": true,
	"inputs": [{
		"internalType": "bytes32",
		"name": "node",
		"type": "bytes32"
	}],
	"name": "owner",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function",
	"signature": "0x02571be3"
},
{
	"constant": true,
	"inputs": [{
		"internalType": "bytes32",
		"name": "node",
		"type": "bytes32"
	}],
	"name": "recordExists",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function",
	"signature": "0xf79fe538"
},
{
	"constant": true,
	"inputs": [{
		"internalType": "bytes32",
		"name": "node",
		"type": "bytes32"
	}],
	"name": "resolver",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function",
	"signature": "0x0178b8bf"
},
{
	"constant": false,
	"inputs": [{
			"internalType": "address",
			"name": "operator",
			"type": "address"
		},
		{
			"internalType": "bool",
			"name": "approved",
			"type": "bool"
		}
	],
	"name": "setApprovalForAll",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function",
	"signature": "0xa22cb465"
},
{
	"constant": false,
	"inputs": [{
			"internalType": "bytes32",
			"name": "node",
			"type": "bytes32"
		},
		{
			"internalType": "address",
			"name": "owner",
			"type": "address"
		}
	],
	"name": "setOwner",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function",
	"signature": "0x5b0fc9c3"
},
{
	"constant": false,
	"inputs": [{
			"internalType": "bytes32",
			"name": "node",
			"type": "bytes32"
		},
		{
			"internalType": "address",
			"name": "owner",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "resolver",
			"type": "address"
		},
		{
			"internalType": "uint64",
			"name": "ttl",
			"type": "uint64"
		}
	],
	"name": "setRecord",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function",
	"signature": "0xcf408823"
},
{
	"constant": false,
	"inputs": [{
			"internalType": "bytes32",
			"name": "node",
			"type": "bytes32"
		},
		{
			"internalType": "address",
			"name": "resolver",
			"type": "address"
		}
	],
	"name": "setResolver",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function",
	"signature": "0x1896f70a"
},
{
	"constant": false,
	"inputs": [{
			"internalType": "bytes32",
			"name": "node",
			"type": "bytes32"
		},
		{
			"internalType": "bytes32",
			"name": "label",
			"type": "bytes32"
		},
		{
			"internalType": "address",
			"name": "owner",
			"type": "address"
		}
	],
	"name": "setSubnodeOwner",
	"outputs": [{
		"internalType": "bytes32",
		"name": "",
		"type": "bytes32"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function",
	"signature": "0x06ab5923"
},
{
	"constant": false,
	"inputs": [{
			"internalType": "bytes32",
			"name": "node",
			"type": "bytes32"
		},
		{
			"internalType": "bytes32",
			"name": "label",
			"type": "bytes32"
		},
		{
			"internalType": "address",
			"name": "owner",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "resolver",
			"type": "address"
		},
		{
			"internalType": "uint64",
			"name": "ttl",
			"type": "uint64"
		}
	],
	"name": "setSubnodeRecord",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function",
	"signature": "0x5ef2c7f0"
},
{
	"constant": false,
	"inputs": [{
			"internalType": "bytes32",
			"name": "node",
			"type": "bytes32"
		},
		{
			"internalType": "uint64",
			"name": "ttl",
			"type": "uint64"
		}
	],
	"name": "setTTL",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function",
	"signature": "0x14ab9038"
},
{
	"constant": true,
	"inputs": [{
		"internalType": "bytes32",
		"name": "node",
		"type": "bytes32"
	}],
	"name": "ttl",
	"outputs": [{
		"internalType": "uint64",
		"name": "",
		"type": "uint64"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function",
	"signature": "0x16a25cbd"
}]
