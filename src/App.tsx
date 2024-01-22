import Enseignement from "./components/sections/Enseignement";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import MaCharte from "./components/sections/MaCharte";
import MotDeDirecteur from "./components/sections/Directeur/MotDirecteur";
import Navbar from "./components/shared/Navbar";
import NosCycles from "./components/sections/NosCycles";
import VieScolaireSection from "./components/sections/VieScolaireSection";
import Raisons from "./components/sections/Raisons";

function App() {
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
}

export default App;
