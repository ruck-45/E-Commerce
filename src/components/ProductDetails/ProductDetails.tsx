import { useLayoutEffect, useState } from "react";
import { Button, Rating } from "@mui/material";
import { scrollTop } from "../../utils/controllers";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../Redux/Slices/CartSlice";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { RootState } from "../../Redux/store";
import axios from "axios";

export default function ProductDetails() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { name, id } = useParams();
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);

  const [productsData, setProductsData] = useState({
    item_id: "",
    imageUrl: [""],
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
    orders: 0,
  });
  const [receivedProductData, setReceivedProductData] = useState(-1);
  const [activeImage, setActiveImage] = useState("");

  const getProductData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/items/${id}`);

      if (!response.data.success) {
        console.log(response.data);
        setReceivedProductData(0);
      } else {
        setProductsData(response.data.payload.result);
        setActiveImage(response.data.payload.result.imageUrl[0]);
        setReceivedProductData(1);
      }
    } catch (error) {
      console.log(error);
      setReceivedProductData(0);
    }
  };

  useLayoutEffect(() => {
    scrollTop();
    getProductData();
  }, [apiUrl]);

  function incQuantity() {
    return setCount(count + 1);
  }
  function decQuantity() {
    return setCount(count - 1);
  }

  function addToCard(e: any) {
    e.preventDefault();
    // dispatch(addToCart(state));
  }

  const handleSetActiveImage = (image: any) => {
    setActiveImage(image);
  };

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
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
            <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={`${apiUrl}/items/itemImages/${activeImage}.jpg`}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {productsData.imageUrl.map((image, index) => (
                <div
                  onClick={() => handleSetActiveImage(image)}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                >
                  <img
                    src={`${apiUrl}/items/itemImages/${image}.jpg`}
                    alt={`Product ${index}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-16 sm:px-6  lg:max-w-7xl  lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-gray-900  ">{productsData.brand}</h1>
              <h1 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">{productsData.title}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p className="font-semibold">{productsData.price}</p>
                <p className="opacity-50 line-through">{productsData.discountedPrice}</p>
                <p className="text-green-600 font-semibold">{productsData.discountPercent}%</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <Rating name="read-only" value={4.6} precision={0.5} readOnly />
              </div>
              <div className="lg:flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2 ">
                  <IconButton onClick={decQuantity} disabled={count < 2} color="primary" aria-label="add an alarm">
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                  <span className="py-1 px-7 border rounded-sm">{count}</span>
                  <IconButton onClick={incQuantity} color="primary" aria-label="add an alarm">
                    <AddCircleOutlineIcon />
                  </IconButton>
                </div>
              </div>

              <form className="mt-10">
                <Button
                  onClick={(event) => addToCard(event)}
                  variant="contained"
                  type="submit"
                  sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
                >
                  Add To Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{productsData.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                {/* <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {productsData.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  {/* <p className="text-sm text-gray-600">{productsData.details}</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
