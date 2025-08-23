"use client";
import { motion } from "framer-motion";
import { ArrowBigRight } from "lucide-react";
import { useState } from "react";

export default function ForeignPlaces({ location, text }) {
  return (
    <div className="font-kumbh-sans antialiased bg-gray-100 min-h-screen text-black flex flex-col">

      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl py-4 lg:px-40 font-extrabold font-kumbh-sans text-gray-900 tracking-wide">
            {text}
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 lg:px-40 py-10 h-full">
          {[
            location.slice(0, 2),
            location.slice(2, 5),
            location.slice(5, 7),
          ].map((col, colIndex) => (
            <div
              key={colIndex}
              className={`grid ${
                col.length === 3 ? "grid-rows-3" : "grid-rows-2"
              } gap-6 lg:gap-8 h-screen`}
            >
              {col.map((city, index) => (
                <FlipCard key={index} city={city} />
              ))}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <button className="flex items-center space-x-2 text-lg font-semibold font-kumbh-sans text-gray-700 hover:text-cyan-500 transition-colors duration-300">
            <span>LOAD MORE</span>
          </button>
        </div>
      </main>
    </div>
  );
}

// Flip Card Component
function FlipCard({ city }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-full perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side (Image) */}
        <div className="absolute inset-0 backface-hidden overflow-hidden">
          <img
            src={city.imageUrl}
            alt={city.name}
            className="w-full h-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>

        {/* Back Side (Description) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-cyan-500 text-white flex flex-col items-center justify-center p-4 text-center">
          <h3 className="text-xl sm:text-2xl font-bold font-kumbh-sans mb-2">
            {city.name}
          </h3>
          <p className="text-sm">{city.tagline}</p>
        </div>
      </motion.div>
    </div>
  );
}
