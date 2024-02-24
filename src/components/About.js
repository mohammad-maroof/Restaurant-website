import React from 'react'
import "../assets/css/About.css"
import AboutImg from "../assets/images/about.jpeg"

function About() {
  return (
  <section className='about' id='about'>
    <h1 className='heading'>
      <span>about</span> us
      </h1>
      <div className='Row'>
        <div className='image'>
          <img src={AboutImg} alt=""/>
        </div>
        <div className='content'>
          <h3> What Makes our Food Special</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Minima rem officiis adipisci quidem tenetur assumenda amet qui pariatur ab, 
              dolorum sapiente animi doloremque architecto asperiores.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicin  porro reprehenderit 
                vitae aliquam 
                sapiente natus fugiat at adipisci. Placeat, exercitationem adipisci!</p>
            <button className='btn'> Learn more </button>
        </div>
      </div>

  </section>
  )
}

export default About