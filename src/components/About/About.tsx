// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Specialization from "../../globalSubComponents/Specialization";
import Intro from "../../globalSubComponents/Intro";
import { scrollTop } from "../../utils/controllers";
import Clients from "../../globalSubComponents/Clients";
import CTA from "../../globalSubComponents/CTA";

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));
  scrollTop();

  return (
    <div>
      <Intro
        normalHead=" About "
        redHead="Us "
        caption="Welcome to Kreative Machinez! Where innovation, creativity, and cutting-edge technology converge to shape your brand's digital narrative."
      />
    </div>
  );
};

export default About;
