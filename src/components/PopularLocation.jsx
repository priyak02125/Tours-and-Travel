import { ArrowBigRight } from "lucide-react";

export default function PopularLocation() {
  const popularLocations = [
    {
      name: "UAE",
      imageUrl: "/uae.jpg",
    },
    {
      name: "THAILAND",
      imageUrl: "/thailand.jpg",
    },

    {
      name: "BALI",
      imageUrl: "bali.jpg",
    },
    {
      name: "MALDIVES",
      imageUrl: "maldiv.jpg",
    },
    {
      name: "SINGAPORE",
      imageUrl: "/singapore.jpg",
    },
    {
      name: "KASHMIR",
      imageUrl: "./kashmir.jpg",
    },
    {
      name: "DUBAI",
      imageUrl: "/dubai.jpg",
    },
  ];

  return (
    <>
      <div
        className={`font-geist-sans antialiased bg-gray-100 min-h-screen text-black flex flex-col`}
      >
        {/* Popular Cities Page Content */}
        <main className="container mx-auto px-4 py-8 flex-grow pt-20">
          <div className="text-center">
            <h1 className="text-5xl py-8 font-extrabold font-kumbh-sans text-gray-900 tracking-wide">
              POPULAR LOCATIONS
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 lg:px-40 py-10 h-full">
            {/* First Column - 2 Images */}
            <div className="grid grid-rows-2 gap-6 lg:gap-8 h-screen">
              {popularLocations.slice(0, 2).map((city, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden shadow-lg group h-full"
                >
                  <img
                    src={city.imageUrl}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                    <h3 className="text-xl sm:text-2xl font-bold font-kumbh-sans">
                      {city.name}
                    </h3>
                    <p className="text-sm">521 CITIES</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle Column - 3 Images */}
            <div className="grid grid-rows-3 gap-6 lg:gap-8 h-screen">
              {popularLocations.slice(2, 5).map((city, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden shadow-lg group h-full"
                >
                  <img
                    src={city.imageUrl}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                    <h3 className="text-xl sm:text-2xl font-bold font-kumbh-sans">
                      {city.name}
                    </h3>
                    <p className="text-sm">521 CITIES</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Last Column - 2 Images */}
            <div className="grid grid-rows-2 gap-6 lg:gap-8 h-screen">
              {popularLocations.slice(5, 7).map((city, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden shadow-lg group h-full"
                >
                  <img
                    src={city.imageUrl}
                    alt={city.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                    <h3 className="text-xl sm:text-2xl font-bold font-kumbh-sans">
                      {city.name}
                    </h3>
                    <p className="text-sm">521 CITIES</p>
                  </div>
                </div>
              ))}
            </div>
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
