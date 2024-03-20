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
import { useLayoutEffect, useState } from "react";
import { RootState } from "../../Redux/store";
import axios from "axios";
import HomeProductSectionSkeleton from "./SubComponents/HomeProductSectionSkeleton";
import HomeProductSectionNotFound from "./SubComponents/HomeProductSectionNotFound";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const [receivedAntiqueData, setReceivedAntiqueData] = useState(-1);
  const [receivedCarpetsData, setReceivedCarpetsData] = useState(-1);
  const [antiquesData, setAntiquesData] = useState([]);
  const [carpetsData, setCarpetsData] = useState([]);

  const getAntiqueData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/items/getItems?start=0&end=10&category=antique&popular=true`);

      if (!response.data.success) {
        setReceivedAntiqueData(0);
      } else {
        setAntiquesData(response.data.payload.result);
        if (response.data.payload.result.length > 0) {
          setReceivedAntiqueData(1);
        } else {
          setReceivedAntiqueData(0);
        }
      }
    } catch (error) {
      console.log(error);
      setReceivedAntiqueData(0);
    }
  };

  const getCarpetData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/items/getItems?start=0&end=10&category=carpet&popular=true`);

      if (!response.data.success) {
        console.log(response.data);
        setReceivedCarpetsData(0);
      } else {
        setCarpetsData(response.data.payload.result);
        if (response.data.payload.result.length > 0) {
          setReceivedCarpetsData(1);
        } else {
          setReceivedCarpetsData(0);
        }
      }
    } catch (error) {
      console.log(error);
      setReceivedCarpetsData(0);
    }
  };

  useLayoutEffect(() => {
    getAntiqueData();
    getCarpetData();
  }, [apiUrl]);

  return (
    <div>
      <Slider />
      {receivedAntiqueData === 1 ? (
        <HomeProductSection data={antiquesData} section={"Popular Antiques"} />
      ) : receivedAntiqueData === -1 ? (
        <HomeProductSectionSkeleton data={[1, 2, 3, 4, 5]} section={"Popular Antiques"} />
      ) : (
        <HomeProductSectionNotFound section={"Popular Antiques"} />
      )}
      <AttractiveSection />
      <Services />
      {receivedCarpetsData === 1 ? (
        <HomeProductSection data={carpetsData} section={"Carpets On Demand"} />
      ) : receivedCarpetsData === -1 ? (
        <HomeProductSectionSkeleton data={[1, 2, 3, 4, 5]} section={"Carpets On Demand"} />
      ) : (
        <HomeProductSectionNotFound section={"Carpets On Demand"} />
      )}
      <Achievement />
      <Explore />
      <HomeCard />
      <EmailContact />
      <ImageRow />
    </div>
  );
};

export default Home;
