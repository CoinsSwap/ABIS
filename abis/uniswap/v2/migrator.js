export default [{
	"inputs": [{
			"internalType": "address",
			"name": "_factoryV1",
			"type": "address"
		},
		{
			"internalType": "address",
			"name": "_router",
			"type": "address"
		}
	],
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"inputs": [{
			"internalType": "address",
			"name": "token",
			"type": "address"
		},
		{
			"internalType": "uint256",
			"name": "amountTokenMin",
			"type": "uint256"
		},
		{
			"internalType": "uint256",
			"name": "amountETHMin",
			"type": "uint256"
		},
		{
			"internalType": "address",
			"name": "to",
			"type": "address"
		},
		{
			"internalType": "uint256",
			"name": "deadline",
			"type": "uint256"
		}
	],
	"name": "migrate",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function",
	"signature": "0xb7df1d25"
},
{
	"stateMutability": "payable",
	"type": "receive",
	"payable": true
}]
