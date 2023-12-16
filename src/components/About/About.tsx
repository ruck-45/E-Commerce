// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import AboutIntro from "./subComponents/AboutIntro";
import Mission from "../../globalSubComponents/Mission";
import Specialization from "./subComponents/Specialization";
import FrequentQuestion from "../../globalSubComponents/FrequentQuestion";

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));

  return (
    <div>
      <AboutIntro />
      <Mission />
      <Specialization />
      <FrequentQuestion />
    </div>
  );
};

export default About;
