require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config();
require("@nomicfoundation/hardhat-ignition-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  ignition: {
    modules: [
      'ignition/modules/Dappazon.js'
    ]
  },
  networks:{
    sepolia:{ 
      url:`https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts:[`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
