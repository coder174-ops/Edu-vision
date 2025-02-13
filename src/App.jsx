import React from 'react'
import Service from './components/Service/Service'
import './App.css'
import { servicesData } from './Source'
import Contact from './components/Contact_us/Contact'
import Footer from './components/Footer/Footer'
import About from './components/About_us/About'

import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'

const App = () => {

  return (
    <div>
      <Navbar/>
      <About/>
      <Service  services={servicesData}/>
      <Contact/>
      <Footer/>
  </div>
     
  )
}

export default App
