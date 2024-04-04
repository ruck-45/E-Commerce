// Dependencies
import { useDispatch } from "react-redux";

// Local Files

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import AboutUs from "./subComponents/AboutUs";
import AboutWork from "./subComponents/AboutWork";
import Achievement from "../Home/SubComponents/Achievement";
import OurTeam from "./subComponents/OurTeam";
import OurServices from "./subComponents/OurServices";

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));
  scrollTop();

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center px-[5rem] py-[1.5rem] text-black bg-[#f4f4f4]">
        <h1 className="text-lg font-bold">ABOUT US</h1>
        <p className="text-sm">Home / About Us</p>
      </div>
      <AboutUs />
      <AboutWork />
      <OurServices />
      <Achievement />
      <OurTeam />
    </>
  );
};

export default About;
