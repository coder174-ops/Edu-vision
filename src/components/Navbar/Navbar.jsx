import React from 'react'
import './Navbar.css';
import Slider from '../Home_Slider/Slider';

const Navbar = () => {
  return (
    <>
    <nav>
    <input type="checkbox" id="check"/>
    <label htmlFor="check" className="checkbtn">
      <i className="fas fa-bars"></i>
    </label>
    <label className="logo">EduVision</label>
    <ul>
      <li><a className="active" href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Feedback</a></li>
    </ul>
  </nav>
  <section>
    <Slider/>
  </section>
  </>
  )
}

export default Navbar