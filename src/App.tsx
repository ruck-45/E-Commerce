// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";

// Local Files
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import Auth from "./components/Auth/Auth";
import NavBar from "./globalSubComponents/NavBar";
import Footer from "./globalSubComponents/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
