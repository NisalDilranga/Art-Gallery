import React from 'react'
import '../styles/collection.css'

import img1 from '../assets/collection/img-1.jpg'
import img2 from '../assets/collection/img-2.jpg'
import img3 from '../assets/collection/img-3.jpg'
import img4 from '../assets/collection/img-4.jpg'
import img5 from '../assets/collection/img-5.jpg'
import img6 from '../assets/collection/img-6.jpg'
import img7 from '../assets/collection/img-7.jpg'
import img8 from '../assets/collection/img-8.jpg'
import img9 from '../assets/collection/img-9.jpg'

function Collection() {

  const imges = [img1,img2,img3,img4,img5,img6,img7,img8,img9]

  return (
    <div className='container collection' id='collection'>
      <h1>Collection</h1>
      <div className="imgs-wrapper">
        {imges.map((i,index) => {
          return <a target='_blank' href={i}><img src={i} alt="colletion_img" key={index} /></a>
        })}
      </div>
    </div>
  )
}

export default Collection