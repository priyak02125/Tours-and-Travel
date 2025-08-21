"use client";
import Slider from "react-slick";
import { ArrowBigRight, ArrowBigLeft } from "lucide-react";

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
              <div key={index} className="p-2">
                <div
                  className={`${
                    index % 2 === 1 ? "mt-16" : "mt-0"
                  } relative overflow-hidden shadow-lg group rounded-xl`}
                >
                  <img
                    src={city.imageUrl}
                    alt={city.name}
                    className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {city.name}
                    </h3>
                    <p className="text-sm">{city.tagline}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
}
