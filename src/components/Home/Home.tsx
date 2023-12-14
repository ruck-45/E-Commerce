// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));

  return <div>Home</div>;
};

export default Home;
