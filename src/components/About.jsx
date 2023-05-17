import React from 'react'
import ME from '../assets/mee.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
<h5>Get To Know</h5>
<h2>About Me</h2>

<div className='container about__container'>
<div className='about__me'>
  <div className='about__me-image'>
    <img src={ME} alt="About Image" className='image-me' />

  </div>
</div>
<div className='about__content'>
 <div className='about__cards'>
  <article className='about__card'>
    <FaAward className =''about__icon/> 
    <h5>Experience</h5>
    <small>0+</small>
     </article>
     <article className='about__card'>
  <VscFolderLibrary className =''about__icon/> 
  <h5>Projects</h5>
  <small>25+</small>
   </article>
 </div>
 <p> I'm based in Balıkesir/Turkey. I am a graduate of chemistry,Balıkesir University. I've received bootcamp training from Udemig. I think I have improved
  myself in the techs I've learnt and  I follow the latest technologies and eager to learn   </p>
  <p>I am looking forward to working with a good team in an enthusiastic, motivated way. </p>
  <p>I believe that I will be successful in this field with my analytical thinking, team player, disciplined and determined features.</p>
 <p>My aims, to get the best level in React and React Native</p>

</div>
</div>

    </section>
  )
}

export default About