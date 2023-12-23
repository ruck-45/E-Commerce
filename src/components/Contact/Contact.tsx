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
        normalHead="Contact "
        redHead="US"
        caption="Have questions or need assistance? Contact our team for personalized support. We’re dedicated to addressing
          your queries and ensuring a seamless experience with our services. Reach out via phone or email, and let us
          assist you on your investment journey."
        thumbnail="https://images.unsplash.com/photo-1606114175460-31ba3462a098?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ContactInfo />
      <FrequentQuestion />
      <Contactmap />
    </div>
  );
};

export default Contact;
