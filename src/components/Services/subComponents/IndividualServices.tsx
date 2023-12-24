// Dependencies
import { useLocation } from "react-router-dom";

// Local Files
import serviceData from "../assets/Services.json";

const IndividualServices = () => {
  let id = 0;
  const location = useLocation();
  if (location.state) {
    id = location.state.id;
  }

  console.log(id);

  return <div>IndividualServices</div>;
};

export default IndividualServices;
