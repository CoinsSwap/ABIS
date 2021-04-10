const abis = require('./dist/commonjs/abis')

console.log(Object.keys(abis));

console.log(Object.keys(abis['uniswap']));
console.log(Object.keys(abis['zrx']));
