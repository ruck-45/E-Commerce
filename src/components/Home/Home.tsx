// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import HeroSection from "./subComponents/HeroSection";
import Benefit from "./subComponents/Benefit";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));

  return (
    <div>
      <HeroSection />
      <Benefit />
    </div>
  );
};

export default Home;
