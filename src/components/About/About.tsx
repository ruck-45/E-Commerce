// Dependencies
import { useDispatch } from "react-redux";

// Local Files

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import AboutUs from "./subComponents/AboutUs";
import AboutWork from "./subComponents/AboutWork";
import Intro from "../../globalSubComponents/Intro";
import ImageRow from "../Home/SubComponents/ImageRow";
import Achievement from "../Home/SubComponents/Achievement";
import OurTeam from "./subComponents/OurTeam";

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));
  scrollTop();

  return (
    <>
      <div
        className="h-[12rem] w-full flex justify-center items-center p-[5rem] text-black bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <h1 className="text-4xl font-bold ">About Us</h1>
      </div>
      <AboutUs />
      <AboutWork />
      <OurTeam />
      <Achievement />
      {/* Our Services */}
      <ImageRow />
    </>
  );
};

export default About;
