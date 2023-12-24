// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import FrequentQuestion from "../../globalSubComponents/FrequentQuestion";
import Contactmap from "./subComponents/Contactmap";
import Intro from "../../globalSubComponents/Intro";
import { scrollTop } from "../../utils/scrollTop";
import Info from "./subComponents/Info";

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));
  scrollTop();

  return (
    <div>
      <Intro
        normalHead="✤ Contact "
        redHead="Us ✤"
        caption="Need help? Our team is here for you! Reach out for personalized support, whether it's about your website, social media, or any digital marketing need. Contact us via phone or email, and let's make your online journey smooth and successful."
      />
      <Info />
      <Contactmap />
      <FrequentQuestion />
    </div>
  );
};

export default Contact;
