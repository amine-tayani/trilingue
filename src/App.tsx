import Enseignement from "./components/Enseignement";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MaCharte from "./components/MaCharte";
import MotDeDirecteur from "./components/MotDirecteur";
import Navbar from "./components/Navbar";
import NosCycles from "./components/NosCycles";
import VieScolaireSection from "./components/VieScolaireSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MotDeDirecteur />
      <MaCharte />
      <NosCycles />
      <Enseignement />
      <VieScolaireSection />
      <Footer />
    </>
  );
}

export default App;
