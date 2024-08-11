import React from 'react'
import '../styles/home.css'

import { FaLongArrowAltDown } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

import img1 from '../assets/home-img-1.jpg'
import img2 from '../assets/home-img-2.jpg'
import img3 from '../assets/home-img-3.jpg'


function Home() {
  return (
    <section className='container home' id='home'>

      <div className="home-section home-top-left">
        <h1>
        “A work of art which isn’t <br /> 
        based on feeling <br /> 
        isn’t <br /> 
        art at all.”
        </h1>
      </div>

      <div className="home-section home-top-right" >
        <span>
          <h4><a href="#collection">discover more</a></h4>
          <FaLongArrowAltDown />
        </span>
      </div>

      <div className="home-section home-bottom-left">
        <div className="social-links">
          <a href="mailto:induwara119@icloud.com" target='_blank'>
            <IoMdArrowDropright />
            induwara119@icloud.com
          </a>
          <a href="tel:+94711227341" target='_blank'>
            <IoMdArrowDropright />
            +94 71 122 7341
          </a>
          <a href="https://www.facebook.com/induwara.rathnasiri.9?mibextid=LQQJ4d" target='_blank'>
            <IoMdArrowDropright />
            Facebook 
          </a>
          <a href="https://www.instagram.com/induwa_arts/" target='_blank'>
            <IoMdArrowDropright />
            Instagram
          </a>
        </div>
      </div>

      <div className="home-section home-bottom-right">
        <div className="home-img-1">
          <img src={img1} alt="img1" />
        </div>
        <div className="home-img-2">
          <img src={img2} alt="img2" />
        </div>
        <div className="home-img-3">
          <img src={img3} alt="img3" />
        </div>
      </div>
      
    </section>
  )
}

export default Home