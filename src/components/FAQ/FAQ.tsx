// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import FAQIntro from "./subComponents/FAQIntro";
import FAQAccordion from "./subComponents/FAQAccordion";
import FAQTailCard from "./subComponents/FAQTailCard";
import FAQBlog from "./subComponents/FAQBlog";

const FAQ = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("FAQ"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <FAQIntro />
      <FAQAccordion />
      <FAQTailCard />
      <FAQBlog />
    </div>
  );
};

export default FAQ;
