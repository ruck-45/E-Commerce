import { useState } from "react";
import { Button,Rating } from "@mui/material";
import { scrollTop } from "../../utils/controllers";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart, decreaseItem, increaseItem, removeItem } from "../../Redux/Slices/CartSlice";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const product = {
  name: "Carpets",
  price: "₹996",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Home", href: "/Home" },
    { id: 2, name: "Shop", href: "/Shop" },
  ],
  images: [
    {
      src: "https://m.media-amazon.com/images/I/81zzpFxg+vL.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://images.thdstatic.com/productImages/c6a2da8d-95d6-4d89-9025-2b5d2e3204f7/svn/ivory-black-well-woven-area-rugs-fel-23-5-64_600.jpg",

      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://m.media-amazon.com/images/I/91V3NyDTkaL._AC_UF894,1000_QL80_.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://images-cdn.ubuy.co.in/635c56ffbd38766d0c1eacbb-sultan-medallion-red-oriental-area-rug-9.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function ProductDetails() {
  scrollTop();

  const [count, setCount] = useState(0)

  const dispatch = useDispatch()
 

  const {state} = useLocation();
  const store= useSelector((state:any) => state?.allCart?.cart)
  console.log("ghghsghghj",store)

  console.log("location",state?.id);

  const quantity = store.map((data:any) => data.orderQuantity)
   console.log("quantity", quantity[0]);

   function incQuantity() {
    return setCount(count+1)
   }
   function decQuantity() {
     return setCount(count - 1);
   }

  

function addToCard(e:any){
  e.preventDefault()
  dispatch(addToCart(state))
}

  const [activeImage, setActiveImage] = useState(null);

  const handleSetActiveImage = (image: any) => {
    setActiveImage(image);
  };

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={"/"} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
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
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* product details */}
        <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center ">
            <div className=" overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img src={state?.imageUrl} alt="" className="h-full w-full object-cover object-center" />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((image) => (
                <div
                  onClick={() => handleSetActiveImage(image)}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                >
                  <img
                    src={image.src}
                    alt={product.images[1].alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-16 sm:px-6  lg:max-w-7xl  lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-gray-900  ">{state?.brand}</h1>
              <h1 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">{state?.title}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p className="font-semibold">{state?.price}</p>
                <p className="opacity-50 line-through">{state?.discountedPrice}</p>
                <p className="text-green-600 font-semibold">{state?.discountPersent}%</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>

                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={4.6} precision={0.5} readOnly />

                  <p className="opacity-60 text-sm">42807 Ratings</p>
                  <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">258 reviews</p>
                </div>
              </div>
              <div className="lg:flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2 ">
                  <IconButton
                    onClick={decQuantity}
                    disabled={count < 2}
                    color="primary"
                    aria-label="add an alarm"
                  >
                    <RemoveCircleOutlineIcon />
                  </IconButton>

                  {/* {quantity[0] > 1 ? (
                    <span className="py-1 px-7 border rounded-sm">{quantity[0]}</span>
                  ) : (
                    <span className="py-1 px-7 border rounded-sm">1</span>
                  )} */}
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
                  <p className="text-base text-gray-900">
                    Kashmir carpets are traditionally made from high-quality wool sourced from the Himalayan region.
                    However, silk is also used, especially in more luxurious varieties. The carpets are hand-knotted
                    using the Persian knot technique, also known as the Senneh knot. This meticulous process involves
                    tying individual knots around the warp threads to create the pile.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
