"use client";
import Slider from "react-slick";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Travel package data
const cards = [
  {
    photo: "/goa.avif",
    description: "Goa Packages",
    price: "₹ 45,999",
  },
  {
    photo: "/HawaMahal.jpg",
    description: "Jaipur Packages",
    price: "₹ 25,999",
  },
  {
    photo: "/uttrakhand.avif",
    description: "Uttarakhand Packages",
    price: "₹ 35,000",
  },
  {
    photo: "/gujrat.jpg",
    description: "Gujarat Packages",
    price: "₹ 29,500",
  },
  {
    photo: "/andaman.jpg",
    description: "Andaman Packages",
    price: "₹ 55,000",
  },
  {
    photo: "/ladak.jpg",
    description: "Ladakh Packages",
    price: "₹ 65,000",
  },
  {
    photo: "/kashmir.jpg",
    description: "Kashmir Packages",
    price: "₹ 48,000",
  },
];

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#e02454]/20 hover:bg-[#e02454] text-white rounded-full p-2 cursor-pointer z-10 hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowBack size={24} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#e02454]/20 hover:bg-[#e02454] text-white rounded-full p-2 cursor-pointer z-10 hover:scale-110 transition"
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
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1000,
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

function Packages() {
  return (
    <div className="py-31 bg-white w-full">
      <div className="px-15">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-full">
                <div className="relative h-50 w-full">
                  <img
                    src={card.photo}
                    alt={card.description}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 text-sm rounded">
                    {card.price}
                  </div>
                </div>
                <div className="p-3 text-center text-gray-800 font-semibold">
                  {card.description}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Packages;
