// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import ContactInfo from "./subComponents/ContactInfo";
import FrequentQuestion from "../../globalSubComponents/FrequentQuestion";
import Contactmap from "./subComponents/Contactmap";
import Intro from "../../globalSubComponents/Intro";
import { scrollTop } from "../../utils/scrollTop";

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));
  scrollTop();

  return (
    <div>
      <Intro
        normalHead="✤ Contact "
        redHead="Us ✤"
        caption="Have questions or need assistance? Contact our team for personalized support. We’re dedicated to addressing
          your queries and ensuring a seamless experience with our services. Reach out via phone or email, and let us
          assist you on your investment journey."
      />
      <ContactInfo />
      <FrequentQuestion />
      <Contactmap />
    </div>
  );
};

export default Contact;
