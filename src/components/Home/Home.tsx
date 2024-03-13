// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import Slider from "../../globalSubComponents/Carasoul/Slider";
import Services from "./SubComponents/Services";
import Explore from "./SubComponents/Explore";
import EmailContact from "./SubComponents/EmailContact";
import HomeProductSection from "./SubComponents/HomeProductSection";
import AttractiveSection from "./SubComponents/AttractiveSection";
import { carpetData } from "../../Data/carpets";
import { antiqueData } from "../../Data/antiques";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  return (
    <div>
      <Slider />
      <HomeProductSection data={antiqueData} section={"Popular Antiques"} />
      <AttractiveSection />
      <Services />
      <HomeProductSection data={carpetData} section={"Carpets On Demand"} />
      <Explore />
      <EmailContact />
    </div>
  );
};

export default Home;
