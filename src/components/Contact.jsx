import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp}  from 'react-icons/bs'
const Contact = () => {


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
  <h2>Contact Me</h2>
  <div className='container contact__container'>
      <div className='contact__options'>
         <article className='contact__option'>
       <MdOutlineEmail className='contact__option-icon' />
        <h4>Email</h4>
        <h5>secilkurum10@gmail.com</h5>
        <a href="mailto:secilkurum10@gmail.com" target='__blank'>Send a Message</a>
         </article>

         <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon' />
 <h4>Whatsapp</h4>
 <h5>+905544347324</h5>
 <a href="https://api.whatsapp.com/send?phone=+905544347324" target='__blank'>Send a Message </a>
  </article>
      </div>
</div>
      </section>
  )
}

export default Contact