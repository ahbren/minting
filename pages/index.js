import React, { useState, useEffect } from 'react';
import { useWeb3React } from "@web3-react/core"
import { injected } from "../components/wallet/connectors.js"


function Home() {

  const { active, account, library, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
      localStorage.setItem('isWalletConnected', true)
    } catch (ex) {
      console.log(ex)
    }
  }


  async function disconnect() {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', false)
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', true)
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])

  return (
    <div>
       <div>
        <head>
          <title>DAPE NFT</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="description" content="DAPES in the Metaverse" />
          <html lang="en"></html>
        </head>
      </div>
      <div class="h-screen relative">
      <img src="./bg-resized.jpg" class="object-cover w-full h-full" alt="Main DAPE NFT"></img>
      <div class="w-full h-full flex absolute top-0 items-center justify-center flex-col mt-20">
          <div class=" text-orange-500  text-7xl decoration-8 font-bold font-nimbus xl:text-9xl">DAPE</div>
          { active ?
          <div>
            <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect</button>
          </div> :
          <div>
            <button onClick={connect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect to MetaMask</button>
          </div>
      }
        
      
        </div>
     

        </div>
    
    </div>
  )
}

export default Home