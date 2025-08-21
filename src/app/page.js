import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PopularLocation from "@/components/PopularLocation";

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
      <Header />
      <PopularLocation />
      <Footer />
    </>
  );
}
