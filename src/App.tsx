// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Local Files
import NavBar from "./globalSubComponents/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import Privacy from "./components/Policy/Privacy";
import Footer from "./globalSubComponents/Footer";
import ShopPage from "./components/ShopPage/ShopPage";
import { RootState } from "./Redux/store";
import Checkout from "./components/Checkout/Checkout";
import Term from "./components/Policy/Term";
import Refund from "./components/Policy/Refund";
import Cart from "./components/Cart/Cart";
import PasswordReset from "./components/ForgetPassword/PasswordReset";
import Admin from "./components/admin/Admin";
import ScrollToTop from "./globalSubComponents/ScrollToTop";
import EditProducts from "./components/admin/SubComponent/EditProducts";
import AddProduct from "./components/admin/SubComponent/AddProduct";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { getCookie } from "./utils/cookies";
import axios from "axios";
import { useLayoutEffect } from "react";
import { addToCart, updateDataFetched } from "./Redux/Slices/CartSlice";

function App() {
  const dispatch = useDispatch();
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const isLoggedIn = useSelector((state: RootState) => state.loginStatus.value);
  const cartDataFetched = useSelector((state: RootState) => state.allCart.dataFetched);
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const token = getCookie("token");

  const fetchCartData = async () => {
    console.log("Fetching Cart Data ....");
    try {
      const response = await axios.get(`${apiUrl}/users/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        const data = response.data.payload.cart;
        for (let i = 0; i < data.length; i++) {
          dispatch(addToCart(data[i]));
        }
        dispatch(updateDataFetched(true));
      } else {
        console.error("Error fetching cart data:", response.data);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useLayoutEffect(() => {
    if (isLoggedIn && !cartDataFetched) {
      fetchCartData();
    }
  });

  return (
    <>
      <div>
        {curTab === "Auth" || curTab === "Password Reset" || curTab === "admin" ? null : <NavBar />}
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<ShopPage />} />
          <Route path="/ProductDetails/:name/:id" element={<ProductDetails />} />
          <Route path="/Refund" element={<Refund />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Profile" element={isLoggedIn ? <Profile /> : <Navigate to="/Home" />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Term />} />
          <Route path="/ResetPassword" element={<PasswordReset />} />
          <Route path="/admin/addProduct" element={<AddProduct />} />
          <Route path="/admin/editProduct" element={<EditProducts />} />
          <Route path="*" element={<Navigate to="/Home" />} />
        </Routes>
      </div>
      {curTab === "Auth" || curTab === "Password Reset" ? null : <Footer />}
      {curTab === "Auth" || curTab === "Password Reset" ? null : <ScrollToTop />}
    </>
  );
}

export default App;
