import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/pages/contactUs";
import Admission from "./components/pages/admission";
import Homepage from "./components/pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
    </>
  );
}

export default App;
