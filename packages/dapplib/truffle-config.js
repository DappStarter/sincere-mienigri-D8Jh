require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note remember coach hover enroll symptom squeeze'; 
let testAccounts = [
"0x06247f1da7399b23e08841b233abed4ef265f7201d397b47a22aa31a4455da49",
"0x68c138659bbfa7d399484d04f053126fcbf36a636406317aa0ccb4dfc6c564e8",
"0x0db471a62806aa540e9df8b489763679f9badc40d43067f910549a15117a5493",
"0x2da62778792167610421b028931f62ca1415fe1757f10fd66408e24e3f129583",
"0xdf17c512358294351d979cee69cab01980e7b7184077bd66b0feeca97321a5fd",
"0x6b5d2923ee65e1f0838e66462c61994a5cd46a3a7a390be41b667569dee9335a",
"0xe73ef8367585da62df0ac7fb5d9b24dc464b0c354441b14641c0063d5cce95d8",
"0x8a901a8797978d0e165128868e87c7c550bdfbf201b2a4fce31fc89a8100a7f2",
"0x492c8d750966be57efeba08ce8e7bc1295ebeaa475e6d5cf1b3ebb47c902a04c",
"0x74b07dfb6730b2c041b610a0ef064d6763de05a54b107bbc0c6584986d74b382"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

