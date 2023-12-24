// Dependencies
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/scrollTop";
import AllServices from "./subComponents/AllServices";
import IndividualServices from "./subComponents/IndividualServices";

const Services = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));
  scrollTop();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="./All" />} />
        <Route path="/All" element={<AllServices />} />
        <Route path="/Individual" element={<IndividualServices />} />
        <Route path="*" element={<Navigate to="./All" />} />
      </Routes>
    </div>
  );
};

export default Services;
