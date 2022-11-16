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
import buttomL from '../images/ButtomL.svg';

function Body() {
  return (
    <div>
      <div id='Top-container' class='flex flex-row pt-[10%] w-[100%] ml-[5%]'>
        <div id='Top-left' class='w-[50%]'>
        <h1 id='ftext'class='font-normal text-[50px] text-gray-600'>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
        <p id='stext' class='text-black-600 w-[95%] mt-[3%] leading-[35px] text-[20px] text-[#434343] font-normal'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <div className='Search-Container' clas='flex flex-row tm-[3%] ml-[4%]'>
          <input type='seach' placeholder='Search for location' class='w-[50%] p-[1.4%] rounded-l-lg border-2 border-gray-200 mt-[3%]' />
          <button class='text-[white] p-[1.5%] rounded-r-lg w-[40%] px-[1%] my-[1%] mt-[5%]'>Search</button>
        </div>
        </div>
        <div id='Top-right' class='w-[50%] mt-[-2%] ml-[4%]'>
          <img src={left1} alt='right'class='w-[65%]'/>
        </div>
      </div>

      <div id='demacation' class='flex flex-row w-[100%] h-[5%] justify-between mt-[3%] bg-[#A02279] p-[1%]'>
          <img src={MBToken} alt='MBToken' class='ml-[9%] w-[10%]'/>
          <img src={MetaMask} alt='MetaMask' class='w-[10%]'/>
          <img src={OpenSea} alt='Opensea' class='mr-[15%] w-[10%]'/>
        </div>

        <div id='Middle-container' class='mt-[3%]'>
          <h1 id='inspiration' class='justify-center text-center font-[700] text-[30px] pb-[1%]'>Inspiration for your next adventure</h1>
          <div id='pageone'class='grid sm:gap-2 grid-cols-1 md:gap-2 grid-cols-3 lg:grid-cols-4 gap-2  pb-[4%] ml-[9%] mr-[9%]'>
            <div class='mt-[5%] w-[95%]'><img src={Frameone} alt='Frame one'/></div>
            <div class='mt-[5%] w-[95%]'><img src={frametwo} alt='Frame two'/></div>
            <div class='mt-[5%] w-[95%]'><img src={framethree} alt='Frame three'/></div>
            <div class='mt-[5%] w-[95%]'><img src={framfour} alt='Frame four'/></div>
            <div class='mt-[5%] w-[95%]'><img src={framfive} alt='Frame five'/></div>
            <div class='mt-[5%] w-[95%]'><img src={framsix} alt='Frame six'/></div>
            <div class='mt-[5%] w-[95%]'><img src={framseven} alt='Frame seven'/></div>
            <div class='mt-[5%] w-[95%]'><img src={frameight} alt='Frame eight'/></div>
          </div>
          <div className='Buttom-Container' class='w-[100%] h-[100%] flex flex-row bg-[#A02279] pt-[3%] pl-[5%] pb-[10%]'>
            <div class='w-[50%]pl-[5%] flex flex-col' id='buttomR'>
              <h1 class='font-[700] text-[48px] pt-[5%] w-[70%] leading-[59.95px] pt-[15%] text-[white] pl-[5%]'>Metabnb NFTs</h1>
              <p class='font-normal text-[white] pl-[5%] w-[50%] mt-[3%]'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
              <div className='btn' class='bg-[white] w-[20%] p-[1%] flex mt-[3%] ml-[5%] py-2 rounded-md text-xs text-center text-[#A02279]' ><p class='text-center justify-center ml-[20%]'>Learn more</p></div>
            </div>

            <div class='p-[5%]'id='buttomR'>
              <img class='flex ml-[-50%] w-[704px] justify-center'src={buttomL} alt='good'/>
            </div>
          </div>
        </div>
{/* lg:grid gap-4 grid-row-4 grid-cols-4 sm:gap-4 grid-row-1 grid-cols-1  */}
    </div>
    
  ) 
}

export default Body
