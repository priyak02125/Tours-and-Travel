"use client";
import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image slides with title and description
const cards = [
  {
    photo: "/maldives.jpg",
    alt: "maldives",
    title: "Maldives",
    description: "Experience the turquoise waters and luxury resorts.",
  },
  {
    photo: "/beach.avif",
    alt: "tropical beach",
    title: "Tropical Paradise",
    description: "Relax on sun-kissed beaches with crystal clear waters.",
  },
  {
    photo: "/sydney-australia.jpg",
    alt: "sydney-australias",
    title: "Sydney Opera House & Harbour",
    description:
      "Explore the iconic Sydney Opera House and enjoy stunning harbour views.",
  },
  {
    photo: "/maldivesbeaches.jpg",
    alt: "maldives beaches",
    title: "Maldives Beaches",
    description: "White sand beaches and overwater villas await you.",
  },
  {
    photo: "/udaipur-palace.jpg",
    alt: "udaipur-palace",
    title: "Udaipur, India",
    description:
      "Discover royal palaces and serene lakes in the city of lakes.",
  },
  {
    photo: "/dubai-building.jpg",
    alt: "dubai",
    title: "Dubai, UAE",
    description: "Explore futuristic skylines and luxury in the desert.",
  },
];

// Custom arrows
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 md:left-5 transform -translate-y-1/2 bg-[#e02454]/10 hover:bg-black/40 text-white rounded-full p-1 md:p-2 cursor-pointer z-10 hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowBack size={32} className="md:size-10" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 md:right-5 transform -translate-y-1/2 bg-[#e02454]/10 hover:bg-black/40 text-white rounded-full p-1 md:p-2 cursor-pointer z-10 hover:scale-110 transition"
    onClick={onClick}
  >
    <IoIosArrowForward size={32} className="md:size-10" />
  </div>
);

// Slider settings with autoplay
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

function Hero() {
  return (
    <div>
      <div className="relative w-full pt-18">
        <Slider {...settings}>
          {cards.map((item, index) => (
            <div key={index}>
              <div className="relative w-full h-full md:h-[450px] lg:h-[490px]  inset-0 bg-black/40">
                <img
                  src={item.photo}
                  alt={item.alt || `slide-${index}`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white z-20">
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-base">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
