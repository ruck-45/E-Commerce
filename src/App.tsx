// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Local Files
import NavBar from "./globalSubComponents/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import Services from "./components/Services/Services";
import Auth from "./components/Auth/Auth";
import Footer from "./globalSubComponents/Footer";
import { RootState } from "./store/store";
import HomeHero from "./globalAssets/HomeHero.png";

function App() {
  const curTab = useSelector((state: RootState) => state.curTab.value);

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 20%,rgba(0,0,0,0.2)),url(${HomeHero})`,
        }}
        className="bg-no-repeat bg-top lg:bg-right-top bg-[#ef233c]"
      >
        {curTab === "Auth" ? null : <NavBar />}
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Services" element={<Services />} />
          <Route path="*" element={<Navigate to="/Home" />} />
        </Routes>
      </div>
      {curTab === "Auth" ? null : <Footer />}
    </>
  );
}

export default App;
