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
      />
      <CryptoStrategies />
      <Support />
    </div>
  );
};

export default Crypto;
