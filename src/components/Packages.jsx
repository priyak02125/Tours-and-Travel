"use client";
import Slider from "react-slick";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Travel package data

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#e02454]/20 hover:bg-black/20 text-white rounded-full p-2 cursor-pointer z-10 hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowBack size={24} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#e02454]/20 hover:bg-black/20 text-white rounded-full p-2 cursor-pointer z-10 hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowForward size={24} />
  </div>
);

// Slider Settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function Packages({ title, data }) {
  return (
    <div id="packages" className="py-26 px-4 lg:px-40 bg-white w-full">
      {/* Heading */}
      <h2 className="text-xl md:text-3xl font-bold text-center text-cyan-500 mb-10">
        Tours and Travel – <span className="text-gray-800">{title}</span>
      </h2>

      {/* Slider */}
      <Slider {...settings}>
        {data.map((card, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 w-full hover:shadow-xl transition-shadow duration-300">
              {/* Card Container */}
              <div className="relative group h-54 w-full">
                {/* Image */}
                <img
                  src={card.photo}
                  alt={card.description}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Transparent overlay with description */}
                <div className="absolute h-0 top-0 group-hover:h-full duration-300 inset-0 bg-black/40 flex items-end justify-center">
                  <p className="text-white group-hover:my-auto px-4 font-semibold text-lg text-center z-10">
                    {card.description}
                  </p>
                </div>

                {/* Location at bottom */}
                <div className="absolute bottom-0 text-xl bg-black/60 group-hover:h-0 duration-400 text-center text-white w-full">
                  {card.location}
                </div>

                {/* ✅ Single Price badge */}
                <div className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 text-sm rounded-full font-medium z-20">
                  {card.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Packages;
