import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/pages/contactUs";
import Admission from "./components/pages/admission";
import Homepage from "./components/pages/home";
import { RootLayout } from "./components/shared/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route element={<RootLayout />}>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admissions" element={<Admission />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
