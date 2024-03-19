// Dependencies
import { useDispatch, useSelector } from "react-redux";

// Local Files
import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import Slider from "../../globalSubComponents/Carasoul/Slider";
import Services from "./SubComponents/Services";
import Explore from "./SubComponents/Explore";
import EmailContact from "./SubComponents/EmailContact";
import HomeProductSection from "./SubComponents/HomeProductSection";
import AttractiveSection from "./SubComponents/AttractiveSection";
import HomeCard from "./SubComponents/HomeCard";
import Achievement from "./SubComponents/Achievement";
import ImageRow from "./SubComponents/ImageRow";
import { useLayoutEffect } from "react";
import { RootState } from "../../Redux/store";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);

  const getData = async () => {
    
  };

  useLayoutEffect(() => {
    getData();
  }, [apiUrl]);

  const { items, antiques } = useSelector((state: any) => state?.allCart);

  return (
    <div>
      <Slider />
      <HomeProductSection data={antiques} section={"Popular Antiques"} />
      <AttractiveSection />
      <Services />
      <HomeProductSection data={items} section={"Carpets On Demand"} />
      <Achievement />
      <Explore />
      <HomeCard />
      <EmailContact />
      <ImageRow />
    </div>
  );
};

export default Home;
