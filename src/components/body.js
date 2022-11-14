import React from 'react'
import left1 from '../images/left1.svg'
import MBToken from '../images/MBToken.svg'
import MetaMask from '../images/MetaMask.svg'
import OpenSea from '../images/OpenSea.svg'
import Frameone from '../images/Frame1.svg';
import frametwo from '../images/Frame2.svg'
import framethree from '../images/Frame3.svg'
import framfour from '../images/Frame4.svg'
import framfive from '../images/Frame5.svg'
import framsix from '../images/Frame6.svg'
import framseven from '../images/Frame7.svg'
import frameight from '../images/Frame8.svg'
import buttomL from '../images/buttomL.svg';

function Body() {
  return (
    <div>
      <div claasName='Top-container' class='flex flex-row pt-[10%] w-[100%] ml-[5%]'>
        <div className='Top-left' class='w-[50%]'>
        <h1 class='font-normal text-[50px] text-gray-600'>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
        <p class='text-black-600 w-[95%] mt-[3%] leading-[35px] text-[24px]'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <div className='Search-Container' clas='flex flex-row tm-[3%]'>
          <input type='seach' placeholder='Search for location' class='w-[70%]'/>
          <button class='text-white-600'>Search</button>
        </div>
        </div>
        <div className='Top-right' class='w-[50%]'>
          <img src={left1} alt='right'/>
        </div>
      </div>

      <div className='demacation' class='flex flex-row w-[100%] h-[5%] justify-between mt-[3%] bg-[#A02279]'>
          <img src={MBToken} alt='MBToken' class='lm-[5%]'/>
          <img src={MetaMask} alt='MetaMask'/>
          <img src={OpenSea} alt='Opensea'/>
        </div>

        <div className='Middle-container' class='mt-[2%]'>
          <h1 class='justify-center text-center font-[700] text-[30px]'>Inspiration for your next adventure</h1>
          <div class='grid sm:gap-4 grid-row-1 grid-cols-1'>
            <div class='mt-[5%]'><img src={Frameone} alt='Frame one'/></div>
            <div class='mt-[5%]'><img src={Frameone} alt='Frame one'/></div>
            <div class='mt-[5%]'><img src={Frameone} alt='Frame one'/></div>
            <div class='mt-[5%]'><img src={Frameone} alt='Frame one'/></div>
            <div class='mt-[5%]'><img src={Frameone} alt='Frame one'/></div>
            <div class='mt-[5%]'><img src={Frameone} alt='Frame one'/></div>
            <div class='mt-[5%]'><img src={Frameone} alt='Frame one'/></div>
            <div class='mt-[5%]'><img src={Frameone} alt='Frame one'/></div>
          </div>
          <div className='Buttom-Container' class='w-[100%] h-[100%] flex flex-row bg-[#A02279]'>
            <div class='w-[50%]pl-[5%] flex flex-col'>
              <h1 class='font-[700] text-[48px] pt-[5%] w-[50%] leading-[59.95px] pt-[5%] '>Metabnb NFTs</h1>
              <p class='font-normal'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
              <div className='btn' class='bg-[white] w-[40%] p-[1%]'>Learn more</div>
            </div>

            <div>
              <img class='flex pl-[5%]'src={buttomL} alt='good'/>
            </div>
          </div>
        </div>
{/* lg:grid gap-4 grid-row-4 grid-cols-4 sm:gap-4 grid-row-1 grid-cols-1  */}
    </div>
    
  ) 
}

export default Body
