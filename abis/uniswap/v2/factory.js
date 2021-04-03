export default [{
	"inputs": [{
		"internalType": "address",
		"name": "_feeToSetter",
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
			"name": "token0",
			"type": "address"
		},
		{
			"indexed": true,
			"internalType": "address",
			"name": "token1",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "address",
			"name": "pair",
			"type": "address"
		},
		{
			"indexed": false,
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		}
	],
	"name": "PairCreated",
	"type": "event",
	"signature": "0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9"
},
{
	"constant": true,
	"inputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"name": "allPairs",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function",
	"signature": "0x1e3dd18b"
},
{
	"constant": true,
	"inputs": [],
	"name": "allPairsLength",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function",
	"signature": "0x574f2ba3"
},
{
	"constant": false,
	"inputs": [{
			"internalType": "address",
			"name": "tokenA",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "tokenB",
			"type": "address"
		}
	],
	"name": "createPair",
	"outputs": [{
		"internalType": "address",
		"name": "pair",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function",
	"signature": "0xc9c65396"
},
{
	"constant": true,
	"inputs": [],
	"name": "feeTo",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function",
	"signature": "0x017e7e58"
},
{
	"constant": true,
	"inputs": [],
	"name": "feeToSetter",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function",
	"signature": "0x094b7415"
},
{
	"constant": true,
	"inputs": [{
			"internalType": "address",
			"name": "",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "",
			"type": "address"
		}
	],
	"name": "getPair",
	"outputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}],
	"payable": false,
	"stateMutability": "view",
	"type": "function",
	"signature": "0xe6a43905"
},
{
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "_feeTo",
		"type": "address"
	}],
	"name": "setFeeTo",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function",
	"signature": "0xf46901ed"
},
{
	"constant": false,
	"inputs": [{
		"internalType": "address",
		"name": "_feeToSetter",
		"type": "address"
	}],
	"name": "setFeeToSetter",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function",
	"signature": "0xa2e74af6"
}]