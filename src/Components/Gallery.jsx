import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import AnimatedSection from "./AnimatedSection";
import AnimatedText from "./AnimatedText";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }

  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });

  slider.on("detailsChanged", rotate);
};

export default function Gallery() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 1000); // every 2.5 seconds

    return () => clearInterval(interval); // cleanup
  }, [instanceRef]);

  return (
    <div className=' py-10 w-5/6 mx-auto  '>
        <div className='text-center space-y-2 mb-6'>
        <AnimatedSection>
        <AnimatedText
        text="Artifact Gallery"
        as="h1"
        className='text-4xl font-bold text-neutral '
      />
            </AnimatedSection>
 <AnimatedSection>
    <p className='font-medium text-neutral opacity-80'>Browse rare artifacts and add your own discoveries.</p>
 </AnimatedSection>
 </div>
    <div className="wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          <div className="carousel__cell number-slide1">
            <img
              src="https://i.ibb.co/G4CK27Bb/PDwp-Ausn-TJv-WU3-NRv-JZcz9-650-80-jpg.webp"
              className="h-full object-cover object-center"
              alt=""
            />
          </div>
          <div className="carousel__cell number-slide2">
            <img
              src="https://i.ibb.co/6R3622Nq/antikythera5.jpg"
              className="h-full object-cover object-center"
              alt=""
            />
          </div>
          <div className="carousel__cell number-slide3">
            <img
              src="https://i.ibb.co/tpQ3Trq2/lycurgus-cup-32.jpg"
              className="h-full object-cover object-center"
              alt=""
            />
          </div>
          <div className="carousel__cell number-slide4">
            <img
              src="https://i.ibb.co/6R3622Nq/antikythera5.jpg"
              className="h-full object-cover object-center"
              alt=""
            />
          </div>
          <div className="carousel__cell number-slide5">
            <img
              src="https://i.ibb.co/kgLF0NwN/pic2.jpg"
              className="h-full object-cover object-center"
              alt=""
            />
          </div>
          <div className="carousel__cell number-slide6">
            <img
              src="https://i.ibb.co/RGyVBkCG/pic3.jpg"
              className="h-full object-cover object-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
