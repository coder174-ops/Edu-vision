import React from "react"; 
import './Footer.css';

import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutubeSquare  } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";



const Footer=()=>{
  return(
  <footer>
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <footer >
    <p style={{ marginTop: "-10px",fontSize:"23px", color:"black", fontWeight:"550" }}>Follow Us On</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "30px", alignItems: "center", marginBottom: "-30px" }}>
{/* Instagram */}
        <a href="https://www.instagram.com/goonj.uietpu?igsh=dDMzdTFmcjY4emZ0" target="_blank" rel="noopener noreferrer" style={{ color: "#E1306C", fontSize: "40px" }}>
          <FaInstagramSquare />
        </a>
{/* WhatsApp */}
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontSize: "40px" }}>
          <FaWhatsappSquare />
        </a>
{/* YouTube */}
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: "#FF0000", fontSize: "40px" }}>
          <FaYoutubeSquare />
        </a>
{/* Twitter */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontSize: "40px" }}>
          <FaTwitterSquare />
        </a>
      </div>
    </footer>

    <ul className="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
    <p>@2025 EduVision4Pu  | All Rights Reserved</p>
  </footer>
  )
};
export default Footer;

