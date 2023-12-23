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
import { scrollTop } from "../../utils/scrollTop";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  return (
    <div>
      <HeroSection />
      <Benefit />
      <Services />
      <Mission />
      <Achievement />
      <Help />
    </div>
  );
};

export default Home;
