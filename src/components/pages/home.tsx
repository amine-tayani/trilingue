import Enseignement from "../sections/Enseignement";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import MaCharte from "../sections/MaCharte";
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
      <MaCharte />
      <Enseignement />
      <Raisons />
      <NosCycles />
      <VieScolaireSection />
      <VieScolaireSection />
      <Footer />
    </>
  );
};

export default Homepage;
