// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import FAQAccordion from "./subComponents/FAQAccordion";
import FAQTailCard from "./subComponents/FAQTailCard";
import FAQBlog from "./subComponents/FAQBlog";
import Intro from "../../globalSubComponents/Intro";
import { scrollTop } from "../../utils/scrollTop";

const Pricing = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Pricing"));
  scrollTop();

  return (
    <div>
      <Intro
        normalHead=" Pricing "
        redHead="& FAQ "
        caption="Your partner in trading and investment. We simplify financial markets with tailored solutions and expert
          guidance. Whether you’re new or experienced, we’re here to support your financial journey."
      />
      <FAQAccordion />
      <FAQTailCard />
      <FAQBlog />
    </div>
  );
};

export default Pricing;
