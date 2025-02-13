import React from 'react'
import './Slider.css';
import { useState,useEffect } from 'react';

// const Slider = () => {
//   return (
//     <div className='Slider-section'>Slider</div>
//   )
// }

// export default Slider

const Slider = () => {
    const images = [
      { src: './images/img2.jpg', caption: 'EDU-VISION' },
      { src: './images/college3.jpg', caption: 'EDU-VISION' },
      { src: './images/img3.jpg', caption: 'EDU-VISION' },
    ];
  
    const [slideIndex, setSlideIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(timer);
    }, [images.length]);
  
    return (
      <div>
        <div className="slideshow-container">
          <div
            className="slider-wrapper"
            style={{ 
              display: 'flex', 
              transition: 'transform 0.5s ease-in-out', 
              transform: `translateX(-${slideIndex * 100}%)` 
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="mySlides"
                style={{ minWidth: '100%' }}
              >
                {/* <div className="numbertext">{index + 1} / {images.length}</div> */}
                <img src={image.src} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
                <div className="text">{image.caption}</div>
              </div>
            ))}
          </div>
        </div>
  
        <br />
  
        <div style={{ textAlign: 'center' }}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === slideIndex ? 'active' : ''}`}
              onClick={() => setSlideIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Slider;
  