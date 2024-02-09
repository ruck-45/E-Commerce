// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Specialization from "../../globalSubComponents/Specialization";
import Clients from "../../globalSubComponents/Clients";
import CTA from "../../globalSubComponents/CTA";
import { scrollTop } from "../../utils/controllers";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  return (
    <div>
      Home
    </div>
  );
};

export default Home;
