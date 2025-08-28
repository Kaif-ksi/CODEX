import React from 'react'
import './Navbar.css'
import logo from '../../Assests/logo.png'
import laptop from '../../Assests/laptop.png'

export default function Navbar() {
  return (
    <>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Resources</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
                <button className="btn-login">Login</button>
            </ul>
        <div className="logo">
          <img src={logo} className="nav-logo" alt="..."/>
        </div>
        <div className="d-img">
          <img src={laptop} className="nav-laptop" alt="..."/>
        </div>
    </>
  )
}
