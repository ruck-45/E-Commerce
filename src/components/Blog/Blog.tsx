// Dependencies
import { useDispatch } from "react-redux";

// Local Files

import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";

const Blog = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Blog"));
  scrollTop();

  return <div>Blogs</div>;
};

export default Blog;
