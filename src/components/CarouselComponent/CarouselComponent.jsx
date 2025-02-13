import React, { useEffect, useRef } from "react";
import './style.css';

const CarouselComponent = () => {
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 7000;
  let runTimeOut;
  let runNextAuto;

  useEffect(() => {
    const nextBtn = nextBtnRef.current;
    const prevBtn = prevBtnRef.current;

    const showSlider = (type) => {
      const list = listRef.current;
      const carousel = carouselRef.current;
      const sliderItemsDom = list.querySelectorAll(".item");

      if (type === "next") {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add("next");
      } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carousel.classList.remove("next");
        carousel.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);

      resetTimeAnimation();
    };

    const resetTimeAnimation = () => {
      const runningTime = runningTimeRef.current;
      runningTime.style.animation = "none";
      // Trigger reflow
      runningTime.offsetHeight;
      runningTime.style.animation = null;
      runningTime.style.animation = "runningTime 7s linear 1 forwards";
    };

    nextBtn.addEventListener("click", () => showSlider("next"));
    prevBtn.addEventListener("click", () => showSlider("prev"));

    // Initial auto-play setup
    runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation();

    // Cleanup event listeners and timeouts when the component unmounts
    return () => {
      nextBtn.removeEventListener("click", () => showSlider("next"));
      prevBtn.removeEventListener("click", () => showSlider("prev"));
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {/* Your slider items here */}
        <div className="item" style={{ backgroundImage: "url(./images/butterfly1.jpeg)" }}>
          <div className="content">
            <div className="title">SLIDER</div>
            <div className="name">EAGLE</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>
            <div className="btn">
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        {/* Add more items similarly */}
      </div>

      <div className="arrows">
        <button className="prev" ref={prevBtnRef}>
          &lt;
        </button>
        <button className="next" ref={nextBtnRef}>
          &gt;
        </button>
      </div>

      <div className="timeRunning" ref={runningTimeRef}></div>
    </div>
  );
};

export default CarouselComponent;
