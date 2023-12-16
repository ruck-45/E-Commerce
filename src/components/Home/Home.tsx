// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import HeroSection from "./subComponents/HeroSection";
import Benefit from "./subComponents/Benefit";
import Mission from "../../globalSubComponents/Mission";
import Achievement from "./subComponents/Achievement";
import Help from "./subComponents/Help";
import Services from "./subComponents/Services";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <HeroSection />
      <Benefit />
      <Mission />
      <Achievement />
      <Help />
      <Services />
    </div>
  );
};

export default Home;
