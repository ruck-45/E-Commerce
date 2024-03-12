// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import Slider from "../../globalSubComponents/Carasoul/Slider";
import CarsouelCards from "./SubComponents/CarsouelCards";
import AntiquesCarasouel from "./SubComponents/AntiquesCarasouel";
import Services from "./SubComponents/Services"
import Explore from "./SubComponents/Explore";
import EmailContact from "./SubComponents/EmailContact";

const carpets = [
  {
    name: "Persian Wool Rug",
    image: "https://example.com/persian-wool-rug.jpg",
    price: 299.99,
  },
  {
    name: "Shaggy High Pile Carpet",
    image: "https://example.com/shaggy-high-pile-carpet.jpg",
    price: 149.95,
  },
  {
    name: "Modern Area Rug",
    image: "https://example.com/modern-geometric-area-rug.jpg",
    price: 199.5,
  },
  {
    name: "Vintage Oriental Carpet",
    image: "https://example.com/vintage-oriental-carpet.jpg",
    price: 449.99,
  },
  {
    name: "Shaggy High Carpet",
    image: "https://example.com/shaggy-high-pile-carpet.jpg",
    price: 149.95,
  },
  {
    name: "Modern Area Rug",
    image: "https://example.com/modern-geometric-area-rug.jpg",
    price: 199.5,
  },
  {
    name: "Vintage Oriental Carpet",
    image: "https://example.com/vintage-oriental-carpet.jpg",
    price: 449.99,
  },
];

const carpethead ={
  title:"home Decor Carpets",
  pra:"Home decor carpets are essential elements in interior design that add warmth, comfort, and style to living spaces"
}
const antiqueshead = {
  title: "home Decor Antiques",
  pra: "Home decor carpets are essential elements in interior design that add warmth, comfort, and style to living spaces",
};
const antiques = [
  {
    name: "Vintage Pocket Watch",
    image: "https://example.com/vintage-pocket-watch.jpg",
    price: 499.99,
  },
  {
    name: "Antique Brass Candlesticks",
    image: "https://example.com/antique-brass-candlesticks.jpg",
    price: 199.95,
  },
  {
    name: "Victorian Mahogany Desk",
    image: "https://example.com/victorian-mahogany-writing-desk.jpg",
    price: 999.5,
  },
  {
    name: "Retro Rotary Telephone",
    image: "https://example.com/retro-rotary-telephone.jpg",
    price: 299.99,
  },
  {
    name: "Victorian Mahogany Desk",
    image: "https://example.com/victorian-mahogany-writing-desk.jpg",
    price: 999.5,
  },
  {
    name: "Retro Rotary Telephone",
    image: "https://example.com/retro-rotary-telephone.jpg",
    price: 299.99,
  },
  {
    name: "Victorian Desk",
    image: "https://example.com/victorian-mahogany-writing-desk.jpg",
    price: 999.5,
  },
  {
    name: "Retro Rotary Telephone",
    image: "https://example.com/retro-rotary-telephone.jpg",
    price: 299.99,
  },
];




const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  return (
    <div>
      <Slider />
      <CarsouelCards des={carpethead} carpet={carpets} />
      <AntiquesCarasouel des={antiqueshead} antiques={antiques} />
      <Services/>
      <Explore/>
      <EmailContact/>
    </div>
  );
};

export default Home;
