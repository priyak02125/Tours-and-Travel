import { ArrowBigRight } from "lucide-react";
import Link from "next/link";

export default function PopularLocation() {
  const popularCities = [
    {
      name: "UAE",
      imageUrl: "https://placehold.co/400x300/e9e9e9/black?text=Hamburg",
    },
    {
      name: "THAILAND",
      imageUrl: "https://placehold.co/400x300/e9e9e9/black?text=Berlin",
    },
    {
      name: "MALDIVES",
      imageUrl: "https://placehold.co/400x300/e9e9e9/black?text=Munchen",
    },
    {
      name: "BALI",
      imageUrl: "https://placehold.co/400x300/e9e9e9/black?text=Dusseldorf",
    },
    // {
    //   name: "SINGAPORE",
    //   imageUrl: "https://placehold.co/400x300/e9e9e9/black?text=Koln",
    // },
    // {
    //   name: "DUBAI",
    //   imageUrl: "https://placehold.co/400x300/e9e9e9/black?text=Frankfurt",
    // },
    // {
    //   name: "HANNOVER",
    //   imageUrl: "https://placehold.co/400x300/e9e9e9/black?text=Hannover",
    // },
  ];

  return (
    <>
      <div
        className={`font-geist-sans antialiased bg-gray-100 min-h-screen text-black flex flex-col`}
      >
        {/* Popular Cities Page Content */}
        <main className="container mx-auto px-4 py-8 flex-grow pt-20">
          <div className="text-center my-8">
            <h1 className="text-5xl font-extrabold font-kumbh-sans text-gray-900 tracking-wide">
              POPULAR LOCATIONS
            </h1>
          </div>

          <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 text-gray-700 text-sm sm:text-base">
            <Link
              href="#"
              className="font-bold border-b-2 border-cyan-500 pb-1"
            >
              All
            </Link>
            <Link
              href="#"
              className="hover:text-cyan-500 transition-colors duration-300"
            >
              InterNational
            </Link>
            <Link
              href="#"
              className="hover:text-cyan-500 transition-colors duration-300"
            >
              National
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-6 lg:px-40 py-10">
            {popularCities.map((city, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index % 2 === 1 ? "mt-16" : "mt-0"
                  } relative w-full h-88 overflow-hidden group shadow-lg`}
                >
                  <img
                    src={city.imageUrl}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2  text-white">
                    <h3 className="text-xl sm:text-2xl font-bold font-kumbh-sans">
                      {city.name}
                    </h3>
                    <p className="text-sm text-center">521 CITIES</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center my-10">
            <button className="flex items-center space-x-2 text-lg font-semibold text-gray-700 hover:text-cyan-500 transition-colors duration-300">
              <span>LOAD MORE</span>
              <ArrowBigRight size={24} className="-rotate-90 text-gray-700" />
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
