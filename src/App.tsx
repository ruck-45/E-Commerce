// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Local Files
import NavBar from "./globalSubComponents/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import Blog from "./components/Blog/Blog";
import Privacy from "./components/Privacy/Privacy";
import Footer from "./globalSubComponents/Footer";
import ScrollToTop from "./globalSubComponents/ScrollToTop";
import ShopPage from "./components/ShopPage/ShopPage";
import { RootState } from "./Redux/store";
import Checkout from "./components/Checkout/Checkout";
import Term from "./components/Privacy/Term";

function App() {
  const curTab = useSelector((state: RootState) => state.curTab.value);

  return (
    <>
      <div>
        {curTab === "Auth" || curTab === "Password Reset" ? null : <NavBar />}
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<ShopPage />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Services/*" element={<Services />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Blog/*" element={<Blog />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Term />} />
          <Route path="*" element={<Navigate to="/Home" />} />
        </Routes>
      </div>
      {curTab === "Auth" || curTab === "Password Reset" ? null : <Footer />}
      {curTab === "Auth" || curTab === "Password Reset" ? null : <ScrollToTop />}
    </>
  );
}

export default App;
