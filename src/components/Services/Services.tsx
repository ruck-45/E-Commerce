// Dependencies
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";

const Services = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Services"));
  scrollTop();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="./All" />} />
      <Route path="*" element={<Navigate to="./All" />} />
    </Routes>
  );
};

export default Services;
