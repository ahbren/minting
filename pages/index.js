import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
let Web3 = require('web3');

function Home() {

  const [web3, setWeb3] = useState(null)
  const [address, setAddress] = useState(null)
  const [contract, setContract] = useState(null)
  const [totalSupply, setTotalSupply] = useState(0)

  //let abi = [...] // Paste your ABI here
  let contractAddress = "YOUR_CONTRACT_ADDRESS"

  useEffect(() => {
    window.ethereum ?
      ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        setAddress(accounts[0])
        let w3 = new Web3(ethereum)
        setWeb3(w3)
        let c = new w3.eth.Contract(abi, contractAddress)
        setContract(c)
      }).catch((err) => console.log(err))
      : console.log("Please install MetaMask")
  }, [])


  //minting function
   const minting=()=>{
    let _price = web3.utils.toWei("1");
    let encoded = contract.methods.safeMint().encodeABI()

    let tx = {
        from: address,
       // to : YOUR_CONTRACT_ADDRESS,
        data : encoded,
        nonce: "0x00",
        value: web3.utils.numberToHex(_price)
    }

    let txHash = ethereum.request({
        method: 'eth_sendTransaction',
        params: [tx],
    }).then((hash) => {
        alert("You can now view your transaction with hash: " + hash)
    }).catch((err) => console.log(err))
    
    return txHash
}

  return (
    <div>
      Welcome to your homepage
    </div>
  )
}

export default Home