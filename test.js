'use strict'
console.log("🏁 Start ~/tbot/test.js")
require('dotenv').config()
const { toWad, toBN, fromWad, wad4human } = require("@decentral.ee/web3-helpers")
const HDWalletProvider = require("@truffle/hdwallet-provider")
const TruffleContract = require("@truffle/contract")
let provider = new HDWalletProvider(process.env.GOERLI_MNEMONIC, process.env.GOERLI_PROVIDER_URL, 0, 10, true)
const Web3 = require('web3')
const web3 = new Web3(provider)
let bob = provider.addresses[0]
let alice = provider.addresses[1]
console.log("Address of bob", bob)
console.log("Address of alice", alice)
// const SuperfluidSDK = require("./js-sdk")
const SuperfluidSDK = require("@superfluid-finance/ethereum-contracts");
const sf = new SuperfluidSDK.Framework({ version: "0.1.2-preview-20201014-fix6", web3Provider: provider, isTruffle: false })
sf.initialize()

// // const account = web3.eth.accounts.create()
// // console.log(web3.eth.personal._provider.addresses[0])
// // web3.eth.getBalance(bob, async (err, result) => {
// //     if (err) {
// //         console.log(err);
// //         return;
// //     }
// //     let balance = web3.utils.fromWei(result, "ether");
// //     console.log(balance + " ETH");
// // });


const daiaddress = '0x88271d333C72e51516B67f5567c728E702b3eeE8'
// console.log("daiaddress: " , daiaddress)
const SuperfluidABI = require("./build/abi")
// const contractNames = Object.keys(SuperfluidABI)
// console.log(contractNames)
// let contracts = TruffleContract({
//         contractName: i,
//         abi: SuperfluidABI[i]
//     })


let Dai = sf.contracts.TestToken.at("tokens.fDAI")//.then( res => res).catch(err => console.log(err))
//...




const dai = () => {
    Dai
    .then(ok => {
        return ok
    })
    .catch(err => {
        console.error(err)
    })
}
// console.log(typeof dai)
// const wrapper = sf.getERC20Wrapper(dai)
/*To enjoy later also in bot.js*/
// web3.eth.getBalance(bob, async (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     let balance = web3.utils.fromWei(result, "ether")
//     console.log(balance + " ETH")
// })
