
// import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="content-section">
            <div className="title">
              <h1>Welcome to EduVision</h1>
            </div>
            <div className="content">
              <h3>"Empowering Learning, Shaping Futures"</h3>
              <p>EduVision is dedicated to providing high-quality educational resources, including <b>LECTURES, HANDWRITTEN NOTES, PYQs </b> and tech courses.<br /> We aim to simplify learning, enhance skills, and guide students toward academic and professional success.</p>
              <div className="button">
                <a href="">Explore More</a>
              </div>
            </div>
            <div className="social">
              <a href=""><i className="fab fa-facebook"></i></a>
              <a href=""><i className="fab fa-twitter"></i></a>
              <a href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="image-section">
            <img src="images/about.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
