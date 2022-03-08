require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-ethers");
 const API_URL = "https://eth-ropsten.alchemyapi.io/v2/cMw5dxqeUCmZjtsd4Y1aUltDbvPSEMCk";
 const PRIVATE_KEY2 = "47bcf578791f0cb25db4e5c1273e93dd19c711c85ba64538e0c7072b8ce5859c";
 const PRIVATE_KEY  = "47bcf578791f0cb25db4e5c1273e93dd19c711c85ba64538e0c7072b8ce5859c";
module.exports = {
  defaultNetwork: "ropsten",
   networks: {
    hardhat: {
          chainId: 1337,
          allowUnlimitedContractSize: true
          },

     ropsten: {
       url: API_URL,
       allowUnlimitedContractSize: true,
       accounts: [`0x${PRIVATE_KEY}`,`0x${PRIVATE_KEY2}`],
       gas: 2100000,
      gasPrice: 8000000000
     },

   },
  solidity: {
    
    compilers: [
      {
        version: "0.5.12",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.8.4",
        settings: {},
      },
    ],
  },
  // networks: {
  //  
  //   // ropsten: {
  //   //   url: API_URL,
  //   //   accounts: [`0x${PRIVATE_KEY}`,`0x${PRIVATE_KEY2}`],
  //   //   gas: 2100000,
  //   //  gasPrice: 8000000000
  //   // },
  // }
};
