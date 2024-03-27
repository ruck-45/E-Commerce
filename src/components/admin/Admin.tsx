import { useDispatch } from "react-redux";
import { updateTab } from "../../Redux/Slices/curTabSlice";
const link = ["Create Item", "All Orders", "All Inventory"];


const Admin = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("admin"));

  return (
    <>
      
    </>
  );
};

export default Admin;
