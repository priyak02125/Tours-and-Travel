"use client";
import { useState } from "react";
import Slider from "react-slick";

export default function ForeignPlaces({ location, text }) {
  const [isFlipped, setIsFlipped] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, centerMode: true } },
      { breakpoint: 768, settings: { slidesToShow: 2, centerMode: true } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: true } },
    ],
  };

  return (
    <div className="font-kumbh-sans bg-gray-100 min-h-screen text-black flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-center my-10">{text}</h1>

      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {location.map((city, index) => {
            const isActive = currentSlide === index;

            return (
              <div
                key={index}
                className={`px-1 transition-transform duration-300 ${
                  isActive
                    ? "scale-110 -translate-y-5 z-20"
                    : "scale-90 translate-y-2 z-10"
                }`}
              >
                <div className="w-full h-[350px]">
                  <FlipCard
                    city={city}
                    isFlipped={isFlipped === index}
                    isActive={isActive}
                    onMouseEnter={() => setIsFlipped(index)}
                    onMouseLeave={() => setIsFlipped(null)}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

// FlipCard Component
function FlipCard({ city, isFlipped, isActive, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="relative h-full [perspective:1000px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`relative w-full h-full transition-transform duration-[800ms] ${
          isActive ? "rounded-2xl" : "rounded-md"
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 top-10 backface-hidden overflow-hidden shadow-lg w-full h-auto ${
            isActive ? "rounded-xl" : "rounded-md"
          }`}
        >
          <img
            src={city.imageUrl}
            alt={city.name}
            className="w-full h-full object-fit"
          />
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 top-10 backface-hidden rotate-y-180 overflow-hidden bg-black/80 flex flex-col items-center justify-center p-4 text-center w-full h-full ${
            isActive ? "rounded-xl" : "rounded-md"
          }`}
        >
          <h3 className="text-xl font-bold text-cyan-500 mb-2">{city.name}</h3>
          <p className="text-sm text-cyan-500 font-semibold">{city.tagline}</p>
          <p className="text-sm mt-2 text-white">{city.description}</p>
        </div>
      </div>
    </div>
  );
}
