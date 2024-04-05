import { Button, IconButton, Rating } from "@mui/material";
import { scrollTop } from "../../utils/controllers";
import { RootState } from "../../Redux/store";
import axios from "axios";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Chip, Image, Skeleton } from "@nextui-org/react";
import { createArray } from "../../utils/controllers";
import { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart, decreaseItem, increaseItem, removeItem } from "../../Redux/Slices/CartSlice";
import { getCookie } from "../../utils/cookies";
import toast, { Toaster, ToastPosition } from "react-hot-toast";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import { updateRedirect } from "../../Redux/Slices/loginRedirectSlice";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { GrInsecure } from "react-icons/gr";
import { TbBuildingStore } from "react-icons/tb";
import { TbBrandOauth } from "react-icons/tb";
import HomeProductSection from "../Home/SubComponents/HomeProductSection";
import HomeProductSectionSkeleton from "../Home/SubComponents/HomeProductSectionSkeleton";
import HomeProductSectionNotFound from "../Home/SubComponents/HomeProductSectionNotFound";

const defaultProductsData = {
  item_id: "",
  imageCount: "",
  brand: "",
  title: "",
  color: "",
  discountedPrice: 0,
  price: 0,
  discountPercent: 0,
  quantity: 0,
  material: "",
  dimension: "",
  description: "",
  topLevelCategory: "",
  secondLevelCategory: "",
  thirdLevelCategory: "",
  highlights: [""],
  minimumOrder: 0,
  details: "",
  orders: 0,
  created_at: "",
};

const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

const successToast = (message: string): void => {
  toast.success(message, toastSetting);
};

const errorToast = (message: string): void => {
  toast.error(message, toastSetting);
};

export default function ProductDetails() {
  const dispatch = useDispatch();
  dispatch(updateTab("Shop"));

  const token = getCookie("token");

  const { name, id } = useParams();
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const isLoggedIn = useSelector((state: RootState) => state.loginStatus.value);
   const [receivedCarpetsData, setReceivedCarpetsData] = useState(-1);
    const [carpetsData, setCarpetsData] = useState([]);

  const [productsData, setProductsData] = useState(defaultProductsData);
  const [receivedProductData, setReceivedProductData] = useState(-1);
  const [activeImage, setActiveImage] = useState("1");
  const [inCart, setInCart] = useState(false);

  const cartData = useSelector((state: RootState) => state.allCart.cart);
  const count = cartData.filter((item) => item.item_id === productsData.item_id)[0]
    ? cartData.filter((item) => item.item_id === productsData.item_id)[0].count
    : 0;

  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const createdDate = new Date(productsData.created_at);
  let content = "";
  let color: "primary" | "danger" | "warning" | "default" | "secondary" | "success" | undefined = "primary";

  if (productsData.quantity < productsData.minimumOrder) {
    content = "Out Of Stock";
    color = "danger";
  } else if (productsData.discountPercent >= 50) {
    content = "Sale";
    color = "warning";
  } else if (createdDate >= sevenDaysAgo) {
    content = "New Arrival";
    color = "primary";
  }

  const getProductData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/items/${id}`);

      if (!response.data.success) {
        console.log(response.data);
        setReceivedProductData(0);
      } else {
        if (response.data.payload.result) {
          setProductsData({
            ...response.data.payload.result,
            highlights: JSON.parse(response.data.payload.result.highlights),
          });
          cartData.findIndex((item) => item.item_id === response.data.payload.result.item_id) === -1
            ? setInCart(false)
            : setInCart(true);
          setReceivedProductData(1);
        } else {
          setReceivedProductData(0);
        }
      }
    } catch (error) {
      console.log(error);
      setReceivedProductData(0);
    }
  };

  const addToCartDatabase = async () => {
    try {
      const response = await axios.put(
        `${apiUrl}/users/cart/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        console.log("Cart add Successful ...");
      } else {
        console.log("Cart add Failed ...");
        console.log(response);
      }
    } catch (error) {
      console.log("Cart add Failed ...");
      console.error(error);
    }
  };

  const handleAddToCart = () => {
    if (isLoggedIn) {
      addToCartDatabase();
      dispatch(addToCart(productsData));
      setInCart(true);
      successToast("Added To Cart !!");
    } else {
      errorToast("Please Login To Add Items to Cart !!");
      dispatch(updateRedirect(`/ProductDetails/${name}/${id}`));
    }
  };

  const removeFromCartDatabase = async () => {
    try {
      const response = await axios.delete(`${apiUrl}/users/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        console.log("Cart remove Successful ...");
      } else {
        console.log("Cart remove Failed ...");
        console.log(response.data);
      }
    } catch (error) {
      console.log("Cart remove Failed ...");
      console.error(error);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCartDatabase();
    dispatch(removeItem(productsData.item_id));
    setInCart(false);
  };
  const getCarpetData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/items/getItems?start=0&end=10&category=carpet&filter=popular`);

      if (!response.data.success) {
        console.log(response.data);
        setReceivedCarpetsData(0);
      } else {
        setCarpetsData(response.data.payload.result);
        if (response.data.payload.result.length > 0) {
          setReceivedCarpetsData(1);
        } else {
          setReceivedCarpetsData(0);
        }
      }
    } catch (error) {
      console.log(error);
      setReceivedCarpetsData(0);
    }
  };

  

  // API call
  useLayoutEffect(() => {
    scrollTop();
    getProductData();
      getCarpetData();
  }, [apiUrl]);

  return (
    <>
      <div className="bg-white lg:px-20">
        {receivedProductData === 1 ? (
          <div className="pt-6">
            <nav aria-label="Breadcrumb">
              <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                {["Home", "Shop"].map((breadcrumb, index) => (
                  <li key={index}>
                    <div className="flex items-center">
                      <Link to={`/${breadcrumb}`} className="mr-2 text-sm font-medium text-gray-900">
                        {breadcrumb}
                      </Link>
                      <svg
                        width={16}
                        height={20}
                        viewBox="0 0 16 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-4 text-gray-300"
                      >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </div>
                  </li>
                ))}
                <li className="text-sm">
                  <p className="font-medium text-gray-500 hover:text-gray-600">{productsData.brand}</p>
                </li>
              </ol>
            </nav>

            {/* product details */}
            <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
              {/* Image gallery */}
              <div className="flex flex-col items-center ">
                <div className=" overflow-hidden rounded-none max-w-[30rem] max-h-[35rem] z-[0]">
                  <Image
                    src={`${apiUrl}/items/itemImages/${productsData.item_id}_img${activeImage}.jpg`}
                    loading="lazy"
                    className={"rounded-none " + content === "Out Of Stock" ? "grayscale" : ""}
                    radius="none"
                  />
                </div>
                <div className="flex flex-wrap space-x-5 justify-center">
                  {createArray(parseInt(productsData.imageCount, 10)).map((image, index) => (
                    <div
                      onClick={() => setActiveImage(`${image}`)}
                      className="max-w-[5rem] mt-4 cursor-pointer hover:scale-105 transition-all flex flex-wrap"
                    >
                      <Image
                        src={`${apiUrl}/items/itemImages/${productsData.item_id}_img${image}.jpg`}
                        alt={`Product ${index}`}
                        loading="lazy"
                        className={content === "Out Of Stock" ? "grayscale" : ""}
                        radius="none"
                      />
                    </div>
                  ))}
                </div>
                <div className="h-auto md:w-[30rem] w-auto bg-white border-1 border-gray-300 py-[2rem] mt-[2rem]">
                  <div className="flex flex-row items-center justify-center gap-3">
                    <div className="flex flex-col items-center justify-between md:p-[2rem] p-[1rem] border-r-1">
                      <TbBrandOauth className="text-4xl" />
                      <h1 className="text-center ">
                        Authentic <br />
                        Product
                      </h1>
                    </div>
                    <div className="flex flex-col items-center justify-between md:p-[2rem] p-[1rem] border-r-1">
                      <TbBuildingStore className="text-4xl" />
                      <h1 className="text-center ">
                        Express Store
                        <br />
                        Pickup
                      </h1>
                    </div>
                    <div className="flex flex-col items-center justify-between md:p-[2rem] p-[1rem]">
                      <GrInsecure className="text-4xl" />
                      <h1 className="text-center ">
                        Secure
                        <br />
                        Payment
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product info */}
              <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-16 sm:px-6  lg:max-w-7xl  lg:px-8 lg:pb-24">
                <div className="lg:col-span-2">
                  <h1 className="text-lg lg:text-xl font-semibold  text-gray-900  ">{productsData.brand}</h1>
                  <h1 className="text-lg lg:text-xl  text-gray-900 opacity-60 pt-1">{productsData.title}</h1>
                  <h3 className="text-md  text-gray-500 opacity-60 pt-1">{productsData.color}</h3>
                </div>

                {/* Options */}
                <div className="mt-2 lg:row-span-3 lg:mt-0">
                  <div className="flex space-x-5 items-center text-lg lg:text-xl  text-gray-900 mt-6">
                    {productsData.discountedPrice === productsData.price || productsData.discountPercent === 0 ? (
                      <p className="font-semibold">${productsData.price}</p>
                    ) : (
                      <>
                        <p className="font-semibold">${productsData.discountedPrice}</p>
                        <p className="opacity-50 line-through">$ {productsData.price}</p>
                        <p className="text-red-600 font-semibold">{productsData.discountPercent}% Off</p>
                      </>
                    )}
                  </div>
                  {/* Reviews */}
                  <div className="mt-2">
                    <h3 className="sr-only">Reviews</h3>

                    <div className="flex items-center space-x-3">
                      <Rating name="read-only" value={4.6} precision={0.5} readOnly />

                      <p className="opacity-60 text-sm">42807 Ratings</p>
                      <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">528 reviews</p>
                    </div>
                  </div>
                  <div>
                    <h1>Includes all taxes</h1>
                  </div>

                  {content === "" ? null : (
                    <div className="mt-[1rem] ">
                      <Chip className="text-white bg-black" variant="shadow" radius="none">
                        {content}
                      </Chip>
                    </div>
                  )}

                  {inCart ? (
                    <>
                      <div className="lg:flex items-center lg:space-x-10 pt-4">
                        <div className="flex items-center space-x-2 ">
                          <IconButton
                            onClick={() => dispatch(decreaseItem(productsData.item_id))}
                            disabled={count - 1 < productsData.minimumOrder}
                            color="primary"
                            aria-label="add an alarm"
                          >
                            <RemoveCircleOutlineIcon />
                          </IconButton>
                          <span className="py-1 px-7 border rounded-sm">{count}</span>
                          <IconButton
                            onClick={() => dispatch(increaseItem(productsData.item_id))}
                            color="primary"
                            aria-label="add an alarm"
                            disabled={count + 1 > productsData.quantity}
                          >
                            <AddCircleOutlineIcon />
                          </IconButton>
                        </div>
                      </div>
                      <Button
                        onClick={handleRemoveFromCart}
                        variant="contained"
                        color="error"
                        sx={{ padding: ".8rem 2rem", marginTop: "1rem" }}
                      >
                        Remove
                      </Button>
                    </>
                  ) : (
                    <div className="flex flex-row items-center justify-start gap-3">
                      <div className="flex flex-row items-center justify-center  gap-[1rem] mt-[2rem]">
                        <div className="bg-gray-200 text-black p-[1rem] rounded-full cursor-pointer">
                          <AiOutlineShareAlt className="text-2xl text-black" />
                        </div>
                        <div className="bg-gray-200 text-black p-[1rem] rounded-full cursor-pointer">
                          <FaRegHeart className="text-2xl" />
                        </div>
                      </div>
                      <div>
                        <Button
                          onClick={handleAddToCart}
                          variant="contained"
                          sx={{
                            padding: ".8rem 2.5rem",
                            marginTop: "2rem",
                            backgroundColor: "black",
                            borderRadius: "0px",
                            "&:hover": {
                              backgroundColor: "#F31260",
                            },
                          }}
                          disabled={productsData.quantity < productsData.minimumOrder}
                        >
                          Add To Bag
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <div className=" h-auto flex flex-col justify-between  border-2 px-[2rem] mt-[2rem]">
                  {/* Description and details */}
                  <div className="py-[0.5rem]">
                    <h3 className="text-lg lg:text-xl font-medium text-gray-900 py-[0.5rem]">Product Description</h3>
                    <div className="space-y-6">
                      <p className="text-base text-gray-900">{productsData.description}</p>
                    </div>
                  </div>

                  <div className="py-[0.5rem]">
                    <h3 className="text-lg lg:text-xl font-medium text-gray-900">Highlights</h3>
                    <div className="mt-4">
                      <ul className="list-disc space-y-2 pl-4 text-sm">
                        {productsData.highlights.map((highlight) => (
                          <li key={highlight} className="text-gray-400">
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="py-[0.5rem]">
                    <h2 className="text-lg lg:text-xl font-medium text-gray-900">Details</h2>
                    <div className="mt-4 space-y-6">
                      <p className="text-sm text-gray-600">{productsData.details}</p>
                    </div>
                  </div>

                  <div className="py-[0.5rem]">
                    <h2 className="text-lg lg:text-xl font-medium text-gray-900">Material</h2>
                    <div className="mt-1 space-y-6">
                      <p className="text-sm text-gray-600">{productsData.material}</p>
                    </div>
                  </div>

                  <div className="py-[0.5rem]">
                    <h2 className="text-lg lg:text-xl font-medium text-gray-900">Dimension</h2>
                    <div className="mt-1 space-y-6">
                      <p className="text-sm text-gray-600">{productsData.dimension}</p>
                    </div>
                  </div>
                  <div className="py-[0.5rem]"></div>
                </div>
              </div>
            </section>
          </div>
        ) : receivedProductData === -1 ? (
          <div className=" px-[3rem] py-[3rem] flex justify-between gap-[3rem] flex-col md:flex-row">
            <div className="flex justify-center items-center flex-col">
              <Skeleton className="rounded-lg w-[25rem] h-[25rem]" />
              <div className="flex flex-wrap justify-center items-center gap-[1rem] p-[1rem]">
                <Skeleton className="rounded-lg w-[5rem] h-[5rem]" />
                <Skeleton className="rounded-lg w-[5rem] h-[5rem]" />
                <Skeleton className="rounded-lg w-[5rem] h-[5rem]" />
                <Skeleton className="rounded-lg w-[5rem] h-[5rem]" />
              </div>
            </div>
            <div className="grow flex flex-col gap-[0.8rem]">
              <Skeleton className="rounded-lg w-[10rem] h-[2rem]" />
              <Skeleton className="rounded-lg w-[9rem] h-[1rem]" />
              <Skeleton className="rounded-lg w-[9rem] h-[1rem]" />
              <Skeleton className="rounded-lg w-[5rem] h-[5rem]" />
              <Skeleton className="rounded-lg w-[8rem] h-[3rem]" />
              <Skeleton className="rounded-lg w-full h-[10rem]" />
              <Skeleton className="rounded-lg w-full h-[3rem]" />
              <Skeleton className="rounded-lg w-full h-[3rem]" />
            </div>
          </div>
        ) : (
          <div className="p-[3rem] h-[100vh] flex justify-center items-center">
            <p className="text-default-400 font-bold text-3xl">Item Not Found</p>
          </div>
        )}

        <Toaster />
      </div>
      <div className="w-auto h-auto flex flex-col items-center justify-center">
        <div className="w-full">
          {receivedCarpetsData === 1 ? (
            <HomeProductSection data={carpetsData} section={"Similar Product"} />
          ) : receivedCarpetsData === -1 ? (
            <HomeProductSectionSkeleton data={[1, 2, 3, 4, 5]} section={"Similar Product"} />
          ) : (
            <HomeProductSectionNotFound section={"Similar Product"} />
          )}
        </div>
      </div>
      <div className="w-auto h-auto flex flex-col items-center justify-center">
        <div className="w-full">
          {receivedCarpetsData === 1 ? (
            <HomeProductSection data={carpetsData} section={"Similar Product"} />
          ) : receivedCarpetsData === -1 ? (
            <HomeProductSectionSkeleton data={[1, 2, 3, 4, 5]} section={"Similar Product"} />
          ) : (
            <HomeProductSectionNotFound section={"Similar Product"} />
          )}
        </div>
      </div>
    </>
  );
}
