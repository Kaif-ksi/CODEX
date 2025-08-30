import React from 'react'
import './Background.css'
import img from '../../Assests/Imagae.png'
import laptop from '../../Assests/laptop.png'

export default function Background() {
  return (
    <div className='main'>
      
      <img src={img} className="Background" alt="..."/>
        <div className="d-img">
          <img src={laptop} className="nav-laptop" alt="..."/>
        </div>

    </div>
  )
}
