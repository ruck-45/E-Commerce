// Dependencies
import { useDispatch } from "react-redux";

// Local Files

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import AboutUs from "./subComponents/AboutUs";
import AboutWork from "./subComponents/AboutWork";
import ImageRow from "../Home/SubComponents/ImageRow";
import Achievement from "../Home/SubComponents/Achievement";
import OurTeam from "./subComponents/OurTeam";
import EmailContact from "../Home/SubComponents/EmailContact";

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
            "url(https://images.unsplash.com/photo-1559251606-c623743a6d76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <h1 className="text-4xl font-bold ">About Us</h1>
      </div>
      <AboutUs />
      <AboutWork />
      <Achievement />
      <OurTeam />
      {/* Our Services */}
      <EmailContact />
      <ImageRow />
    </>
  );
};

export default About;
