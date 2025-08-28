import React from 'react'
import './Pageone.css'
import arrow from '../../Assests/arrow.png'

export default function Pageone() {
  return (
    <>
    <div className="one">
        <p className="pagetitle">
            Welcome to CodeX
        </p>
    </div>
    <div className="titleone">
        <p className="title">
            Learn Machine Learning
        </p>
    </div>
    <div className="paragraph">
        <p className="para">“Study less, learn more — with the best notes,<br/>
            programming lessons, and personalized college support.”
        </p>
    </div>
    <div className="btn-explore">
        <button className="explore">Explore <img src={arrow} className="arrow" 
             alt="..."/>
        </button>
    </div>
    </>
  )
}
