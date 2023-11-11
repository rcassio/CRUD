const fs = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');

const secrets = JSON.parse(
  fs.readFileSync('.secrets').toString().trim()
);

module.exports = {
  networks: {
    sepolia: {
      provider: () =>
        new HDWalletProvider(
          secrets.seed,
          `https://sepolia.infura.io/v3/${secrets.projectId}`
        ),
      network_id: "11155111",
    }
  },
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
}