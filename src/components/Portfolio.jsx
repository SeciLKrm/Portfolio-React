import React  from 'react'
import SM from '../assets/1.png'
import CRUD from '../assets/2.png'
import MP from '../assets/3.png'
import WA from '../assets/4.png'
import EC from '../assets/5.png'
import GF from '../assets/6.png'

const Portfolio = () => {
  
  const projects = [
    {
        id:1,
        title :' SpendMoney-React ',
        image : SM ,
        github : 'https://github.com/SeciLKrm/SpendMoney-React',
    },
    {
        id: 2,
        title :' CRUD- TODO-APP',
        image : CRUD,
        github : 'https://github.com/SeciLKrm/CRUD-APP',
        
    },
    {
        id:3,
        title:' MusicPlayer  ',
        image : MP,
        github : 'https://github.com/SeciLKrm/MusicPlayer'
    },
    {
        id:4,
        title:' weatherApp-2  ',
        image : WA,
        github : 'https://github.com/SeciLKrm/weatherApp-2'
    },
    {
        id:5,
        title:' E-Commerse- ',
        image : EC,
        github : 'https://github.com/SeciLKrm/E-Commerse-'
    },
    {
        id:6,
        title:' Github-Profile-JS ',
        image : GF,
        github : 'https://github.com/SeciLKrm/Github-Profile-JS'
    }
]
 
  
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
    {
      projects.map(({image, title, github}) =>
    
      
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3> 
        <div className='portfolio__item-cta'>
          <a href={github} className='btn'>
            Github
          </a>
          <a href='' className='btn btn-primary' target='__blank'>
            Live Demo
          </a>
      </div>
      </article>
       
        )
      
    }
    </div>
     </section>
   
  );
}




















export default Portfolio