// const hre = require("hardhat");

async function main() {
    // const [deployer] = await ethers.getSigners();
    const [deployer,FactoryRouterDeployer,_] = await ethers.getSigners();
    // const Token0 = await ethers.getContractFactory("Token0");
    // const token0Contract = await Token0.deploy();
    // console.log("Token0 address",token0Contract.address);

    // const Token1 = await ethers.getContractFactory("Token1");
    // const token1Contract = await Token1.deploy();
    // console.log("Token1 address",token1Contract.address);

    // const Factory = await ethers.getContractFactory("UniswapV2Factory");
    // const factoryContract = await Factory.connect(FactoryRouterDeployer).deploy(FactoryRouterDeployer.address);
    // console.log("factory address",factoryContract.address);

    const Router = await ethers.getContractFactory("UniswapV2Router02");
    const routerContract = await Router.connect(FactoryRouterDeployer).deploy("0x50028887D0b0Cb8644ba06f720d85a615aB93aC4","0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
    console.log("router address",routerContract.address);


    // const NFT_Staking = await ethers.getContractFactory("NFTStakingContract");
    // const NFT_Staking_Contract = await NFT_Staking.deploy();
    // console.log("NFT MarketPlace address",NFT_Staking_Contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });