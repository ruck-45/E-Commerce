// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));

  return <div>About</div>;
};

export default About;
