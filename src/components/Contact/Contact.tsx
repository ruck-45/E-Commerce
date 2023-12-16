// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import ContactIntro from "./subComponents/ContactIntro";
import ContactInfo from "./subComponents/ContactInfo";
import FrequentQuestion from "../../globalSubComponents/FrequentQuestion";
import Contactmap from "./subComponents/Contactmap";

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <ContactIntro />
      <ContactInfo />
      <FrequentQuestion />
      <Contactmap />
    </div>
  );
};

export default Contact;
