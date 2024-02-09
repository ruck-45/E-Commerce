// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Intro from "../../globalSubComponents/Intro";
import { scrollTop } from "../../utils/controllers";

const Pricing = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Pricing"));
  scrollTop();

  return (
    <div>
      <Intro
        normalHead=" Pricing "
        redHead="& FAQ "
        caption="Discover Transparent Pricing & Answers to Your Question. Explore Our packages and find the perfect fit. Your journey to excellence begins now. "
      />
    </div>
  );
};

export default Pricing;
