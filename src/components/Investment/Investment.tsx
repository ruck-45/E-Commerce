// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Intro from "../../globalSubComponents/Intro";
import InvestmentStrategies from "./subComponents/InvestmentStrategies";
import Support from "../../globalSubComponents/Support";

const Investment = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Intro
        normalHead="Invest"
        redHead="ment"
        caption="Invest with confidence on our platform. Discover lucrative opportunities, seamless trading, and expert guidance. Grow your portfolio with us for a prosperous financial future. Start your journey today!"
        thumbnail="https://images.unsplash.com/photo-1613442301239-ea2478101ea7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <InvestmentStrategies />
      <Support />
    </div>
  );
};

export default Investment;
