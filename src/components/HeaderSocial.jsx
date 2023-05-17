import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
    <a href="https://www.linkedin.com/in/secilkurum/" target='_blank' > <BsLinkedin/> </a>
    <a href="https://github.com/SeciLKrm" target='_blank'> <FaGithub/>  </a>
    <a href="https://www.instagram.com/sclkrmm" target='_blank'><BsInstagram/>  </a>
    </div>
  )
}

export default HeaderSocial