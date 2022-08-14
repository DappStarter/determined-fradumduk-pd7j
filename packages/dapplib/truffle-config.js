require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad grid narrow flip turn'; 
let testAccounts = [
"0x636eb28fe12b681afa59efdef69591aa14542c18fb3edbec6355fe2dfd2ebbb6",
"0x13c03ff7c864ecf960d4798c77ff7dbc5eec86cecb7b4f8046ec6753b24ec9bc",
"0xcdf9106277e7f9921674ed9eedeb00ab75828697fc0574ee51cdca5e63ce57ca",
"0x88614689320f14cccc6ea5678cb06491bbc46318ed42e8c0341d3db40877ecc5",
"0xe80dd665d3fbcd5a3d7562c157977072cb4290075a182e41f4a94b2a64f7c31e",
"0x88408a366d009cd592f9d2ccd122646851979f4abfa50425970e80c7437556b9",
"0xba238a6ab1c4f215d8164aa927f1dc5abeeed339778e83501d14bf4505fbd7e4",
"0x7b5db97466038fcab9c5c9d56734803fd730844ff9337eac924aa76376b6af3b",
"0x6e67cd00ce703fc04ce6a248cef2adb4bc9aa9d3c87b02c377cbb6908ae4eb70",
"0x7533c2318ab1ba9a17e44f9110637719465d9151d2b5a5160956e1f55db21255"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


