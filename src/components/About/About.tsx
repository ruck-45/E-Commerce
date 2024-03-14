// Dependencies
import { useDispatch } from "react-redux";

// Local Files

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import AboutUs from "./subComponents/AboutUs";
import AboutWork from "./subComponents/AboutWork";
import Intro from "../../globalSubComponents/Intro";




const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));
  scrollTop();

  return (
    <>
      <Intro
        normalHead=" About "
        redHead="Us "
        caption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet aliquid ad officiis assumenda eum ab ea
          doloribus atque sunt officia sed maiores, fugiat sapiente nisi nesciunt, similique delectus enim?"
      />
      <AboutUs />
      <AboutWork />
    </>
  );
};

export default About;
