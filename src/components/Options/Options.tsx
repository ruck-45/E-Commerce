// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Intro from "../../globalSubComponents/Intro";
import Support from "../../globalSubComponents/Support";
import OptionsStrategies from "./subComponents/OptionsStrategies";

const Options = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Intro
        normalHead="Option "
        redHead="Trading"
        caption="Empower your financial strategy with our options trading platform. Seamlessly navigate markets, execute diverse strategies, and optimize risk. Elevate your trading experience with expert insights. Start trading options today!"
        thumbnail="https://images.unsplash.com/photo-1651130540796-744c58fb74d1?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <OptionsStrategies />
      <Support />
    </div>
  );
};

export default Options;
