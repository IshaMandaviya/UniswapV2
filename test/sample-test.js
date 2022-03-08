
const { expect } = require("chai");
const hre = require("hardhat");
// const { ethers } = require("hardhat");


describe("Uniswap V2", function () {
let token0Contract;
let token1Contract;
let factoryContract;
let routerContract;
let UniswapV2PairContract;
  
  it("deploy Contract", async function () {
    
    const [deployer,FactoryRouterDeployer,_] = await ethers.getSigners();
    const Token0 = await ethers.getContractFactory("Token0");
    token0Contract = await Token0.deploy();
    console.log("Token0 address",token0Contract.address);

    const Token1 = await ethers.getContractFactory("Token1");
    token1Contract = await Token1.deploy();
    console.log("Token1 address",token1Contract.address);

    // const UniswapV2Pair = await ethers.getContractFactory("UniswapV2Library");
    // UniswapV2PairContract = await UniswapV2Pair.connect(FactoryRouterDeployer).deploy();
    // console.log("factory address",UniswapV2PairContract.address);

    const Factory = await ethers.getContractFactory("UniswapV2Factory");
    factoryContract = await Factory.connect(FactoryRouterDeployer).deploy(FactoryRouterDeployer.address);
    console.log("factory address",factoryContract.address);

    const Router = await ethers.getContractFactory("UniswapV2Router02");
    routerContract = await Router.connect(FactoryRouterDeployer).deploy(factoryContract.address,"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
    console.log("router address",routerContract.address);
   
    await token0Contract.approve(routerContract.address,100000000000);
    await token1Contract.approve(routerContract.address,100000000000);
    // Transfer Some Token To staking contract to provide Rewards
    const token0=token0Contract.address;
    const token1=token1Contract.address;
    const amountADesired=10000000;
    const amountBDesired=150000000;
    const amountAMin=0;
    const amountBMin=0;
    const to=deployer.address;
    const timestamp=1678171154;
    // console.log(routerContract)
    // await routerContract.addLiquidity(token0,token1,amountADesired,amountBDesired,amountAMin,amountBMin,to,timestamp);
    
  }).timeout(300000);

  it("Add Token In liqudity", async function () {

    const [deployer, FactoryRouterDeployer] =  await hre.ethers.getSigners();
   
    // // approve Staling contract to access token
    // await myTokenContract.setApprovalForAll(NFTStakingContractAddress,true);
   
  }).timeout(300000);

  // it(" Stack your NFTS ", async function () {
  //   const [deployer, buyer] =  await hre.ethers.getSigners();

  //   // stack Your NFTs
  //   const amountToStack=100000000000;
  //   // stack your nfts
  //   await NFT_Staking_Contract.stakeYourNft(tokenAdress,1,amountToStack);
    
  // }).timeout(300000);

  // it(" UnStack your NFTS ", async function () {
    
  //   // Transfer Some Token To staking contract to provide Rewards
  //   const amountToStack=100000000000;
  //   await NFT_Staking_Contract.unstakeYourNft();
      
  // }).timeout(300000);

})