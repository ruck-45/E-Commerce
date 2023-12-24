// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Specialization from "./subComponents/Specialization";
import FrequentQuestion from "../../globalSubComponents/FrequentQuestion";
import Intro from "../../globalSubComponents/Intro";
import { scrollTop } from "../../utils/scrollTop";
import AboutUs from "./subComponents/AboutUs";
import AboutWork from "./subComponents/AboutWork";
import Leadership from "./subComponents/Leadership";
import Clients from "./subComponents/Clients";

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));
  scrollTop();

  return (
    <div>
      <Intro
        normalHead="✤ About "
        redHead="Us ✤"
        caption="Your brand's digital success is our mission. With expertise, creativity, and a personal touch, we amplify your online presence. Join us to reshape your narrative, foster connections, and unlock growth."
      />
      <AboutUs />
      <AboutWork />
      <Specialization />
      <Leadership />
      <Clients />
      <FrequentQuestion />
    </div>
  );
};

export default About;
