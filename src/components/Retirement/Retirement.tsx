// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Intro from "../../globalSubComponents/Intro";
import Support from "../../globalSubComponents/Support";
import RetirementStrategies from "./subComponents/RetirementStrategies";

const Retirement = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  
  return (
    <div>
      <Intro
        normalHead="Retire"
        redHead="ment"
        caption="Secure your retirement with us. Explore tailored investment plans, maximize tax advantages, and build a resilient future. Trust our platform for expert guidance and financial peace of mind. Start planning today!"
        thumbnail="https://images.unsplash.com/photo-1624150402111-9a54e5c2c798?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <RetirementStrategies />
      <Support />
    </div>
  );
};

export default Retirement;
