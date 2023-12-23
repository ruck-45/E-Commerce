// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Intro from "../../globalSubComponents/Intro";
import Support from "../../globalSubComponents/Support";
import CryptoStrategies from "./subComponents/CryptoStrategies";
import { scrollTop } from "../../utils/scrollTop";

const Crypto = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));
  scrollTop();

  return (
    <div>
      <Intro
        normalHead="Cry"
        redHead="pto"
        caption="Unlock the future of finance with us! Explore a world of digital assets, seamless transactions, and expert insights. Buy and trade cryptocurrencies effortlessly for a rewarding financial experience. Join now!"
        thumbnail="https://images.unsplash.com/photo-1634704784915-aacf363b021f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <CryptoStrategies />
      <Support />
    </div>
  );
};

export default Crypto;
