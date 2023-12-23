// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Mission from "../../globalSubComponents/Mission";
import Specialization from "./subComponents/Specialization";
import FrequentQuestion from "../../globalSubComponents/FrequentQuestion";
import Intro from "../../globalSubComponents/Intro";
import { scrollTop } from "../../utils/scrollTop";

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));
  scrollTop();

  return (
    <div>
      <Intro
        normalHead="About "
        redHead="US"
        thumbnail="https://images.unsplash.com/photo-1511883040705-6011fad9edfc?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        caption="Your partner in trading and investment. We simplify financial markets with tailored solutions and expert
          guidance. Whether you’re new or experienced, we’re here to support your financial journey."
      />
      <Mission />
      <Specialization />
      <FrequentQuestion />
    </div>
  );
};

export default About;
