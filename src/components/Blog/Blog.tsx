// Dependencies
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import OurBlogs from "./subComponents/OurBlogs";
import IndividualBlog from "./subComponents/IndividualBlog";
import CreateBlog from "./subComponents/CreateBlog";

const Blog = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Blog"));
  scrollTop();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="./All" />} />
      <Route path="/All" element={<OurBlogs />} />
      <Route path="/Individual" element={<IndividualBlog />} />
      <Route path="/Create" element={<CreateBlog />} />
      <Route path="*" element={<Navigate to="./All" />} />
    </Routes>
  );
};

export default Blog;
