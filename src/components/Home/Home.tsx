// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import Slider from "../../globalSubComponents/Carasoul/Slider";
import Services from "./SubComponents/Services"
import Explore from "./SubComponents/Explore";
import EmailContact from "./SubComponents/EmailContact";
import HomeProductSection from "./SubComponents/HomeProductSection";
import { mens_kurta } from "../../Data/Men/men_kurta";
import { mensShoesPage1 } from "../../Data/shoes";
import AttractiveSection from "./SubComponents/AttractiveSection";






const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  return (
    <div>
      <Slider />
      <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
      <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
      <AttractiveSection/>
      <Services />
      <Explore />
      <EmailContact />
    </div>
  );
};

export default Home;
