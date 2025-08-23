"use client";
import Slider from "react-slick";
import { ArrowBigRight, ArrowBigLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/50 p-2 rounded-full shadow-md hover:bg-gray-500"
      onClick={onClick}
    >
      <ArrowBigRight size={20} className="text-white" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-black/50 p-2 rounded-full shadow-md hover:bg-gray-500"
      onClick={onClick}
    >
      <ArrowBigLeft size={20} className="text-white" />
    </div>
  );
}

export default function IndianPlaces({ location, text }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const imagesToShow = location.slice(0, 8);

  return (
    <div className="font-kumbh-sans antialiased bg-gray-100 h-full lg:px-40 text-black flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="text-center">
          <h1 className="text-5xl py-4 lg:px-40 font-extrabold text-gray-900 tracking-wide">
            {text}
          </h1>
        </div>

        <div className="relative py-10">
          <Slider {...sliderSettings}>
            {imagesToShow.map((city, index) => (
              <div
                key={index}
                className={`${index % 2 === 1 ? "mt-10" : "mt-0"} p-2 `}
              >
                <FlipCard city={city} />
              </div>
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
}

// FlipCard component
function FlipCard({ city }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative h-96 perspective ${
        isFlipped ? "z-20" : ""
      } group rounded-xl`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden overflow-hidden rounded-xl">
          <img
            src={city.imageUrl}
            alt={city.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl"></div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center px-2">
            {/* <h3 className="text-xl sm:text-2xl font-bold">{city.name}</h3>
            <p className="text-sm">{city.tagline}</p> */}
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-black/80 text-white flex flex-col items-center justify-center text-center px-4 rounded-xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-cyan-500">{city.name}</h3>
          <p className="text-sm text-orange-400">{city.tagline}</p>
           <p className="text-sm text-">{city.description}</p>
        </div>
      </motion.div>
    </div>
  );
}
