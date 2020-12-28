'use strict'
require('dotenv').config()
const { toWad, toBN, fromWad, wad4human } = require("@decentral.ee/web3-helpers")
const HDWalletProvider = require("@truffle/hdwallet-provider")
let provider = new HDWalletProvider(process.env.GOERLI_MNEMONIC, process.env.GOERLI_PROVIDER_URL, 0, 10, true)
const Web3 = require('web3')
const web3 = new Web3(provider)
let bob = provider.addresses[0]
let alice = provider.addresses[1]
console.log("Address of bob", bob)
console.log("Address of alice", alice)
const SuperfluidSDK = require("@superfluid-finance/ethereum-contracts");

// daiaddress '0x88271d333C72e51516B67f5567c728E702b3eeE8'

let sf
let dai
let daix
let balanceOfBob
(async () => {
    sf = new SuperfluidSDK.Framework({
    chainId: 5,
    //version: "master",
    version: "0.1.2-preview-20201014",
    web3Provider: provider
    })
    await sf.initialize()
    const daiAddress = await sf.resolver.get("tokens.fDAI")
    console.log("fDai Address:", daiAddress)
    dai = await sf.contracts.TestToken.at(daiAddress)
    const daixWrapper = await sf.getERC20Wrapper(dai)
    daix = await sf.contracts.ISuperToken.at(daixWrapper.wrapperAddress)
    dai.balanceOf(bob).then( 
        balance => {
            balanceOfBob = wad4human(balance)
            console.log("Bob's fDai balance:", balanceOfBob)
        }
    ).catch( err => console.log(err) )
})();


web3.eth.getBalance(bob, async (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    let balance = web3.utils.fromWei(result, "ether")
    console.log("Bob's Balance ETH" + balance )
})
