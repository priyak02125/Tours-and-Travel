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
    description: "Experience the dazzling skyline, luxury shopping, and desert safaris of Dubai — a city where innovation meets tradition."
  },
  {
    name: "SINGAPORE",
    imageUrl: "abroad/singapore.webp",
    tagline: "A city in a garden 🌸",
    description: "A blend of modern architecture, rich culture, and green spaces. Explore Marina Bay, Sentosa Island, and world-famous street food."
  },
  {
    name: "BALI",
    imageUrl: "abroad/bali.webp",
    tagline: "Island of gods & hidden beaches 🌴",
    description: "Unwind on serene beaches, explore lush jungles and rice terraces, and immerse yourself in the spiritual culture of Bali."
  },
  {
    name: "MALDIVES",
    imageUrl: "abroad/maldiv.webp",
    tagline: "Turquoise waters & overwater villas 🏝️",
    description: "Escape to paradise with crystal-clear waters, coral reefs, and luxurious overwater bungalows — perfect for honeymooners and divers alike."
  },
  {
    name: "THAILAND",
    imageUrl: "abroad/thailand.webp",
    tagline: "The land of smiles & street food 🍜",
    description: "From the bustling streets of Bangkok to the tranquil islands of Phuket and Krabi, Thailand offers adventure, culture, and cuisine."
  },
  {
    name: "SWITZERLAND",
    imageUrl: "abroad/switzerland.webp",
    tagline: "Snow peaks & chocolate dreams 🍫🏔️",
    description: "Discover fairy-tale villages, breathtaking Alps, and world-class chocolate and cheese in this picturesque European country."
  },
  {
    name: "JORDAN",
    imageUrl: "abroad/jordan.webp",
    tagline: "Where tradition meets skyscrapers 🏙️",
    description: "Home to the ancient city of Petra, the vast Wadi Rum desert, and the therapeutic Dead Sea — a gem of the Middle East."
  },
];

const IndianLocations = [
  {
    name: "AGRA (Taj Mahal, UP)",
    imageUrl: "/india/tajmahal.webp",
    tagline: "A symbol of eternal love ❤️",
    description: "Home to the majestic Taj Mahal, Agra captures the essence of Mughal architecture and timeless romance. A must-visit for history and love enthusiasts."
  },
  {
    name: "JAIPUR (Rajasthan)",
    imageUrl: "/india/jaipur.webp",
    tagline: "The Pink City of Royals 👑",
    description: "Step into a royal legacy with Jaipur's forts, palaces, vibrant bazaars, and pink-hued architecture — a gateway to Rajasthan’s regal charm."
  },
  {
    name: "GOA (Beaches)",
    imageUrl: "/india/goa.webp",
    tagline: "Sun, sand & serenity 🌊",
    description: "India’s beach capital, Goa offers a perfect mix of lively parties, serene beaches, Portuguese heritage, and delicious coastal cuisine."
  },
  {
    name: "LEH–LADAKH (J&K)",
    imageUrl: "/india/kashmir.webp",
    tagline: "Adventure at the top of the world 🏔️",
    description: "A dreamland for thrill-seekers and bikers, Leh–Ladakh stuns with its rugged mountains, crystal lakes, and peaceful monasteries above the clouds."
  },
  {
    name: "KERALA (Munnar/Alleppey)",
    imageUrl: "/india/kerla.webp",
    tagline: "God’s Own Country 🌴",
    description: "Sail through lush backwaters, explore tea-covered hills in Munnar, and experience Ayurveda, wildlife, and culture in serene Kerala."
  },
  {
    name: "VARANASI (UP)",
    imageUrl: "/india/varanasi.webp",
    tagline: "Where spirituality flows with the Ganga 🙏",
    description: "One of the world’s oldest living cities, Varanasi offers deep spiritual energy, sacred rituals, and timeless riverfront ghats on the Ganges."
  },
  {
    name: "ANDAMAN (Havelock)",
    imageUrl: "/india/andaman.webp",
    tagline: "The paradise of turquoise waters 🏝️",
    description: "Escape to the serene islands of Andaman, with crystal-clear waters, coral reefs, white-sand beaches, and incredible marine life."
  },
];

const indiantour = [
  {
    photo: "/goa.avif",
    location: "Goa, Maharastra",
    description: "Goa – Beaches and vibrant nightlife",
    price: "₹ 45,999",
  },
  {
    photo: "/HawaMahal.jpg",
    location: "Jaipur, Rajasthan",
    description: "Jaipur – Explore forts and royal heritage",
    price: "₹ 25,999",
  },
  {
    photo: "/uttrakhand.avif",
    location: "Rishikesh, Uttarakhand ",
    description: "Uttarakhand – Mountains and spiritual vibes",
    price: "₹ 35,000",
  },
  {
    photo: "/gujrat.jpg",
    location: "Gujarat",
    description: "Gujarat – Culture and white desert",
    price: "₹ 29,500",
  },
  {
    photo: "/andaman.jpg",
    location: "Andaman and Nicobar",
    description: "Andaman – Islands and blue waters",
    price: "₹ 55,000",
  },
  {
    photo: "/ladak.jpg",
    location: "Ladakh",
    description: "Ladakh – High passes and stunning views",
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
  },
];

const spiritual = [
  {
    photo: "/rishikesh-temple.jpg",
    description: "Peaceful prayers by the Ganga.",
    location: "Rishikesh",
    price: "₹ 18,000",
  },
  {
    photo: "/golden-temple.avif",
    description: "Divine serenity at the Golden Temple.",
    location: "Amritsar",
    price: "₹ 22,000",
  },
  {
    photo: "/kashi-vishwanath-temple.jpg",
    description: "Sacred chants on the ghats of Kashi.",
    location: "Varanasi",
    price: "₹ 20,000",
  },
  {
    photo: "/haridwar.avif",
    description: "Spiritual dip in holy waters.",
    location: "Haridwar",
    price: "₹ 16,000",
  },
  {
    photo: "/tiruvannamalai-temple.jpg",
    description: "Feel the divine energy of Arunachala.",
    location: "Tiruvannamalai",
    price: "₹ 24,000",
  },
  {
    photo: "/kedarnath-temple.avif",
    description: "Pilgrimage to the abode of Lord Shiva.",
    location: "Kedarnath",
    price: "₹ 28,000",
  },
  {
    photo: "/jaganath puri.jpg",
    description: "Offer prayers at Jagannath’s sacred home.",
    location: "Puri",
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


      <Packages title="Explore India Your Way" data={indiantour}/>
       <Packages title="Your Dream Honeymoon Awaits" data={honeymoon}/>
        <Packages title="Walk the Spiritual Paths of India" data={spiritual}/>

      <BookingPage />
      <Contact />
    </>
  );
}
