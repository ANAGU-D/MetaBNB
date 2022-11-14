import React from 'react'
import logo from '../images/logo.svg';

function Header() {
  return (
    <div className='header-container' class='pt-6  flex justify-between max-w-[100%] ml-[5%] ' >
    <img src={logo} alt='metalogo' class='w-40'/>
    <div>
        <nav>
            <ul  class='flex gap-x-8 font-RedRose font-normal text-[20px]'>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Place to stay</a></li>
                <li><a href='/'>NFTs</a></li>
                <li><a href='/'>Community</a></li>
            </ul>
        </nav>
    </div>
    <button class='flex  px-4 py-2 rounded-md text-white text-xs mr-[10%]'>Connect wallet</button>
    </div>
  )
}

export default Header
