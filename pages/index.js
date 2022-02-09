import React, { useState, useEffect } from 'react';
import { useWeb3React } from "@web3-react/core"
import { injected } from "../components/wallet/connectors.js"
import Image from 'next/image'

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
        }
        catch (ex) {
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
        <div class="w-full flex absolute top-0 grid grid-cols-2">
          <div class="pt-16 pl-20">
          <Image class="object-fill" alt="Discord Link" src={require('../public/navbarlogo.png')} />
          </div>
          <div class="flex justify-end">
            {
              account ?
                <div class="w-60 pt-20 pr-10">
                  <p class=" text-orange-500 text-sm">Connected As</p>
                  <p class=" text-orange-500 text-sm truncate">{account}</p>
                </div> :
                <div></div>
            }
          </div>
        </div>
        <img src="./bg-resized.jpg" class="object-cover w-full h-full" alt="Main DAPE NFT"></img>


        <div class="w-full h-full flex absolute top-0 items-center justify-center flex-col ">

          <div class=" text-orange-500  text-7xl decoration-8 font-bold font-nimbus xl:text-9xl">DAPE</div>
          <div class=" text-orange-500  text-7xl decoration-8 font-bold font-nimbus xl:text-3xl pb-10">Description here</div>
          {

            active ?


              <div class='flex flex-row space-x-4'>
                <button onClick={disconnect} className="py-2 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Mint</button>
                <button onClick={disconnect} className="py-2 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect</button>
              </div>


              :
              <div>
                <button onClick={connect} className="py-2 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect to MetaMask</button>
              </div>
          }


        </div>
        <div class="w-full flex absolute bottom-0 flex-row grid grid-cols-2">

          <div class="pl-16 pb-10">
            <div class=" w-30 text-orange-500 text-base decoration-8 font-bold font-nimbus ">Terms and condition</div>
            <div class=" w-30 text-orange-500 text-base decoration-8 font-bold font-nimbus ">Copyright DoodleApe</div>
          </div>
          <div class="align-baseline inset-x-0 relative flex items-center space-x-6 justify-end pr-10 pb-5">
            <a target="_blank" href="https://t.co/RKX1St52kX" aria-label='Discord' rel="noopener">
              <button aria-label='Discord Invite Link' class="bg-transparent font-semibold text-white inline-flex items-center space-x-2 rounded w-10 h-10 hover:bg-gray-100 transition ease-in-out delay-50">
                <Image class="object-fill" alt="Discord Link" src={require('../public/discord.png')} />
              </button>
            </a>
            <a target="_blank" href="https://twitter.com/dapenft" aria-label='Twitter' rel="noopener">
              <button aria-label="Twitter Social Media Link" class="bg-transparent font-semibold text-white inline-flex items-center space-x-2 rounded w-10 h-10 hover:bg-gray-100 transition ease-in-out delay-50">
                <Image alt="Twitter Link" src={require('../public/twitter.png')} />
              </button>
            </a>
            <a target="_blank" href="https://www.instagram.com/dapenft/" aria-label='Instagram' rel="noopener">
              <button aria-label="Instagram Social Media Link" class="bg-transparent font-semibold text-white inline-flex items-center space-x-2 rounded w-10 h-10 hover:bg-gray-100 transition ease-in-out delay-50">
                <Image alt="Instagram Link" src={require('../public/instagram.png')} />
              </button>
            </a>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home