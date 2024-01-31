import Enseignement from "../sections/Enseignement";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Charte from "../sections/Charte";
import MotDeDirecteur from "../sections/Directeur/MotDirecteur";
import Navbar from "../shared/Navbar";
import NosCycles from "../sections/NosCycles";
import VieScolaireSection from "../sections/VieScolaireSection";
import Raisons from "../sections/Raisons";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MotDeDirecteur />
      <Charte />
      <Enseignement />
      <Raisons />
      <NosCycles />
      <div className="relative w-full h-20 bg-[rgb(227,185,33)] flex items-center justify-around my-10">
        <h1 className="font-monstserrat text-white text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl lg:text-5xl">
          VIE SCOLAIRE
        </h1>
      </div>
      <VieScolaireSection />
      <VieScolaireSection />
      <Footer />
    </>
  );
};

export default Homepage;
