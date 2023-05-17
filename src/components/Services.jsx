import React from 'react'
import {BsCheck} from 'react-icons/bs'
// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Services = () => {
  return (
    <section id='services'>
<h5>What I Offer </h5>
<h2>Services</h2>
<Swiper className='container services__container'
// install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
      <SwiperSlide className='service'> 
  <ul className='service__list'>
    <li>
      <BsCheck className= 'service__list-icon' />
      <p>I made frontend designs with HTML CSS.</p>
    </li>
    <li>
  <BsCheck className= 'service__list-icon' />
  <p>I made project acceleration using components with the Bootstrap and SCSS library.</p>
     
</li>
<li>
  <BsCheck className= 'service__list-icon' />
 <p>Git was used for version control. Code sharing and merging was done on github with team members.</p>
 
</li>
<li>
  <BsCheck className= 'service__list-icon' />
  <p>We designed projects such as E-Commerce, To-Do Lists, Music Player etc. and brought dynamism with Java Script.</p>
  
</li>
</ul>
</SwiperSlide>
<SwiperSlide className='service'> 
 <ul className='service__list'>
<li>
  <BsCheck className= 'service__list-icon' />
  <p>Fetch method was used for API transfer in projects I made with Java Script.</p>
  
</li>
<li>
  <BsCheck className= 'service__list-icon' />
  <p>Axios method was used for API transfer in projects I made with React</p>
  </li>
  <li>
  <BsCheck className= 'service__list-icon' />
  <p>CRUD TodoList, YoutubeClone, Form etc. projects were created with React hooks, Router library, JSONServer </p> </li>
  </ul>
</SwiperSlide>
 

  
</Swiper>

    </section>
  )
}

export default Services