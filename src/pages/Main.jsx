import React from 'react'
import '../styles/main.css'

import main_img from '../assets/home-img-3.jpg'

function Main() {
  return (
    <div className='container main'>
      <div className="main-img">
        <img src={main_img} alt="main_img" />
      </div>
      <div className="main-desc">
        <h1 className="main-desc-title">Will Smaith</h1>
        <div className="main-desc-info">
          <p>2000-12-12</p>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, 
            print, and publishing industries for previewing 
            layouts and visual mockups.
          </p>
          <a href="https://www.instagram.com/induwa_arts/" target='_blank'>check out original</a>
        </div>
      </div>
    </div>
  )
}

export default Main