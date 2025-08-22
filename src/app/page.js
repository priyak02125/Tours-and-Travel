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

const indiantour = [
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
];

const honeymoon = [
  // National Packages
  {
    photo: "/goa couples.jpg",
    description: "Sunset walks & beach vibes with your love.",
    location: "Goa, India",
    price: "₹ 45,999",
  },
  {
    photo: "/jaipur-couple.jpg",
    description: "Feel royal love in pink city’s palaces.",
    location: "Jaipur, India",
    price: "₹ 25,999",
  },
  {
    photo: "/uttarkhand-couple.jpg",
    description: "Cozy hill stays & peaceful moments.",
    location: "Uttarakhand, India",
    price: "₹ 35,000",
  },

  {
    photo: "/andman-couple.jpg",
    description: "Blue waters & white sands for two.",
    location: "Andaman & Nicobar, India",
    price: "₹ 55,000",
  },
  {
    photo: "/ladak-couple.jpg",
    description: "Mountains, stars & endless love.",
    location: "Ladakh, India",
    price: "₹ 65,000",
  },

  // International Packages
  {
    photo: "/maldives-couple.jpg",
    description: "Overwater villas & endless romance.",
    location: "Maldives",
    price: "₹ 1,50,000",
  },
  {
    photo: "/venice-couple.jpg",
    description: "Gondola rides & candlelit dinners.",
    location: "Venice, Italy",
    price: "₹ 2,20,000",
  },
  {
    photo: "/paris-couple.avif",
    description: "Love in every corner of the city.",
    location: "Paris, France",
    price: "₹ 2,50,000",
  },
  {
    photo: "/switzerland.jpg",
    description: "Snowy dreams in a fairytale land.",
    location: "Switzerland",
    price: "₹ 2,75,000",
  },
  {
    photo: "/bali-couple.jpg",
    description: "Tropical bliss & exotic love.",
    location: "Bali, Indonesia",
    price: "₹ 1,10,000",
  },
  {
    photo: "/dubai-couple.jpg",
    description: "Luxury, lights & desert magic.",
    location: "Dubai, UAE",
    price: "₹ 1,30,000",
  }
];

const spiritual = [
  {
    photo: "/rishikesh-temple.jpg",
    description: "Peaceful prayers by the Ganga.",
    location: "Rishikesh, India",
    price: "₹ 18,000",
  },
  {
    photo: "/golden-temple.avif",
    description: "Divine serenity at the Golden Temple.",
    location: "Amritsar, India",
    price: "₹ 22,000",
  },
  {
    photo: "/kashi vishwanath temple.jpg",
    description: "Sacred chants on the ghats of Kashi.",
    location: "Varanasi, India",
    price: "₹ 20,000",
  },
  {
    photo: "/haridwar.avif",
    description: "Spiritual dip in holy waters.",
    location: "Haridwar, India",
    price: "₹ 16,000",
  },
  {
    photo: "/tiruvannamalai-temple.jpg",
    description: "Feel the divine energy of Arunachala.",
    location: "Tiruvannamalai, India",
    price: "₹ 24,000",
  },
  {
    photo: "/kedarnath-temple.avif",
    description: "Pilgrimage to the abode of Lord Shiva.",
    location: "Kedarnath, India",
    price: "₹ 28,000",
  },
  {
    photo: "/jaganath puri.jpg",
    description: "Soulful journey to Shirdi’s blessings.",
    location: "Shirdi, India",
    price: "₹ 19,500",
  },
  // {
  //   photo: "",
  //   description: "Grace and calm at Meenakshi Temple.",
  //   location: "Madurai, India",
  //   price: "₹ 21,000",
  // },
  // {
  //   photo: "/jaganath puri.jpg",
  //   description: "Offer prayers at Jagannath’s sacred home.",
  //   location: "Puri, India",
  //   price: "₹ 23,000",
  // },
  {
    photo: "/prem mandir.avif",
    description: "Chant and connect at ISKCON Vrindavan.",
    location: "Vrindavan, India",
    price: "₹ 17,000",
  }
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
      <Packages title="Explore India Your Way" data={indiantour}/>
       <Packages title="Your Dream Honeymoon Awaits" data={honeymoon}/>
        <Packages title="Walk the Spiritual Paths of India" data={spiritual}/>
      <BookingPage />
      <Contact />
    </>
  );
}
