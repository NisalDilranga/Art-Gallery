import React from 'react'
import '../styles/about.css'

import profile from '../assets/profile.jpg'

function About() {
  return (
    <div className='container about' id='about'>
      <div className="about-left">
        <h1>Induwara Rathnasiri</h1>
        <div className="about-img">
          <img src={profile} alt="profile" />
        </div>
      </div>
      <div className="about-right">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Possimus nulla adipisci iure perspiciatis mollitia, 
          pariatur similique ratione minima placeat, suscipit, 
          quam cupiditate nemo ut soluta iste quo amet ex nam? 
          Nobis id obcaecati earum, officia dolor illum illo 
          quaerat unde a dignissimos rem voluptatem explicabo 
          repellendus nostrum magnam in quasi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eos ex, autem, laborum accusamus, velit aut libero dicta 
          fuga sint incidunt inventore doloremque? Temporibus, ipsum 
          ea vitae delectus, a odit expedita officiis laudantium natus 
          quas fuga. Voluptates, alias sit distinctio similique libero 
          facilis maxime voluptatem perspiciatis esse cupiditate non 
          cumque explicabo enim aut consectetur autem saepe fugiat ea 
          totam quam adipisci blanditiis! Dolorem, sed dicta. Dicta at 
          sapiente iusto natus in et. Voluptates deleniti reiciendis nulla.
        </p>
      </div>
    </div>
  )
}

export default About