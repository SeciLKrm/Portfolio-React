import React from 'react'
import CTA from './CTA'
import Me from '../assets/me.jpg'
import HeaderSocials from './HeaderSocial'


const  Header = () => {
  return (
    <header>
  <div className='container header__container' >
    <h5 > Hello  I 'm</h5>
    <h1 > Seçil Kurum</h1>
    <h5 className='text-light'>Frontend | React Developer</h5>
   <CTA />
   <HeaderSocials />
   <div  >
  <img src={Me} className='meImg' alt="" />
   </div>
   <a href="#contact" className='scroll__down'>Scroll Down</a>
  </div>
  
   
   
 
    </header>
  )
}

export default Header