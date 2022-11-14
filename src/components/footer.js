import React from 'react'
import metalogo from '../images/metalogo.svg';
import  facebook from '../images/facebbok.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import footerr from '../images/footerr.svg';
import copyright from '../images/copyright.svg';

function Footer() {
  return (
    <div>
      <div className='Footer-Container' class='flex flex-col h-[30%] w-[100%] bg-[black ]'>
        <div className='footer-left'>
            <img src={metalogo} alt='metlogo'/>
            <div clss='flex flex-row'>
                <img src={facebook} alt='facebook'/>
                <img src={instagram} alt='instgrm'/>
                <img src={twitter} alt='twitter'/>
            </div>
            <div>
            <img src={copyright} alt='copyright'/>
            </div>
        </div>

        <div className='Footer-right'>
        <img src={footerr} alt='footer'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
