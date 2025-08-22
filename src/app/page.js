import Hero from "@/components/Hero";
import IndianPlaces from "@/components/IndianPlaces";
import ForeignPlaces from "@/components/ForeignPlaces";
import BookingPage from "@/components/Booking";
import Packages from "@/components/Packages";
import Contact from "@/components/Conatct";

const worldWide = [
  {
    name: "DUBAI",
    imageUrl: "abroad/dubai.webp",
    tagline: "Desert dreams & futuristic wonders 🌟",
  },
  {
    name: "SINGAPORE",
    imageUrl: "abroad/singapore.webp",
    tagline: "A city in a garden 🌸",
  },

  {
    name: "BALI",
    imageUrl: "abroad/bali.webp",
    tagline: "Island of gods & hidden beaches 🌴",
  },
  {
    name: "MALDIVES",
    imageUrl: "abroad/maldiv.webp",
    tagline: "Turquoise waters & overwater villas 🏝️",
  },

  {
    name: "THAILAND",
    imageUrl: "abroad/thailand.webp",
    tagline: "The land of smiles & street food 🍜",
  },
  {
    name: "SWITZERLAND",
    imageUrl: "abroad/switzerland.webp",
    tagline: "Snow peaks & chocolate dreams 🍫🏔️",
  },
  {
    name: "JORDAN",
    imageUrl: "abroad/jordan.webp",
    tagline: "Where tradition meets skyscrapers 🏙️",
  },
];

const IndianLocations = [
  {
    name: "AGRA (Taj Mahal, UP)",
    imageUrl: "/india/tajmahal.webp",
    tagline: "A symbol of eternal love ❤️",
  },
  {
    name: "JAIPUR (Rajasthan)",
    imageUrl: "/india/jaipur.webp",
    tagline: "The Pink City of Royals 👑",
  },
  {
    name: "GOA (Beaches)",
    imageUrl: "/india/goa.webp",
    tagline: "Sun, sand & serenity 🌊",
  },
  {
    name: "LEH–LADAKH (J&K)",
    imageUrl: "/india/kashmir.webp",
    tagline: "Adventure at the top of the world 🏔️",
  },
  {
    name: "KERALA (Munnar/Alleppey)",
    imageUrl: "/india/kerla.webp",
    tagline: "God’s Own Country 🌴",
  },
  {
    name: "VARANASI (UP)",
    imageUrl: "/india/varanasi.webp",
    tagline: "Where spirituality flows with the Ganga 🙏",
  },
  {
    name: "ANDAMAN (Havelock)",
    imageUrl: "/india/andaman.webp",
    tagline: "The paradise of turquoise waters 🏝️",
  },
  {
    name: "LEH–LADAKH (J&K)",
    imageUrl: "/india/kashmir.webp",
    tagline: "Adventure at the top of the world 🏔️",
  },
];
export default function Home() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Geist+Sans:wght@400;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;700&display=swap');
          
          .font-kumbh-sans {
            font-family: 'Kumbh Sans', sans-serif;
          }
          .font-geist-sans {
            font-family: 'Geist Sans', sans-serif;
          }
          .font-geist-mono {
            font-family: 'Geist Mono', monospace;
          }
          .antialiased {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}
      </style>
      <Hero />
      <ForeignPlaces
        location={worldWide}
        text=" Best Foreign Places to Visit"
      />
      <IndianPlaces
        location={IndianLocations}
        text=" Best Indian Places to Visit"
      />
      <Packages />
      <BookingPage />
      <Contact />
    </>
  );
}
