import React from 'react'
import HTML from '../assets/html-5.png'
import CSS3 from '../assets/css3.png'
import JS from '../assets/javascript.png'
import REACT from '../assets/react.png'
import TYPESCRIPT from '../assets/typescript.png'
import REDUX from '../assets/redux.png'
import GIT from '../assets/git.png'
import BS from '../assets/bootstrap.png'
import SASS from '../assets/sass.png'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
<div className='experiences'>
<img src={HTML} alt="" />
<img src={CSS3} alt="" />
<img src={JS} alt="" />
<img src={REACT} alt="" />
<img src={TYPESCRIPT} alt="" />
<img src={REDUX} alt="" />
<img src={GIT} alt="" />
<img src={BS} alt="" />
<img src={SASS} alt="" />
</div>








      </div>
      </section>
  )
}

export default Experience