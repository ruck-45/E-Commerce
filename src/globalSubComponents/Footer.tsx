// Dependencies
import { SiAmazonluna, SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled, TbTruckReturn } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaTwitterSquare,
  FaStore,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaAppStoreIos,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { Divider, Select, SelectItem } from "@nextui-org/react";
import { IoMdAppstore } from "react-icons/io";

// Local Files
import "./Footer.css";
import { SlBadge } from "react-icons/sl";
import { IoLogoAmazon, IoLogoGooglePlaystore, IoLogoOctocat, IoLogoVimeo, IoLogoYoutube } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

const features = [
  { name: "Authentic Products", icon: <SlBadge className="text-3xl" /> },
  { name: "Express Store Pickup", icon: <FaStore className="text-3xl" /> },
  { name: "Secure Payment", icon: <MdOutlinePayment className="text-3xl" /> },
  { name: "Easy Return & Exchange", icon: <TbTruckReturn className="text-3xl" /> },
];

const brandNames = [
  "Antique Aisle",
  "Carpet Chronicles",
  "Classic Carpets & Antiques",
  "Collectors' Haven",
  "Elegant Antiquities",
  "Heritage Rugs & Relics",
  "Luxe Antiquities",
  "Majestic Carpets & Antiques",
  "Noble Antiques",
  "Opulent Oriental Rugs",
  "Prestige Antiques & Carpets",
  "Rare Finds Gallery",
  "Regal Rugs & Antiques",
  "Royal Tapestry Treasures",
  "Signature Antiques",
  "Timeless Textiles",
  "Treasured Tapestries",
  "Vintage Vault",
  "Worldly Antiquities",
  "Zenith Rugs & Antiques",
];

const appDownload = [
  <FaAppStoreIos className="text-[#A2AAAD]" />,
  <IoMdAppstore className="text-[#A2AAAD]" />,
  <IoLogoGooglePlaystore className="text-[#A2AAAD]" />,
];
const paymentCards = [
  <FaCcVisa className="text-blue-500" />,
  <FaCcMastercard className="text-[#F79E1B]" />,
  <FaCcPaypal />,
];
const socialMedia = [<FaFacebookSquare />, <FaInstagramSquare />, <FaSquareXTwitter />, <IoLogoYoutube />];
const sponsers = [<IoLogoAmazon />, <SiAmazonluna />, <IoLogoOctocat />, <IoLogoVimeo />];

const quickLinks = [
  {
    name: "CUSTOMER",
    contents: [
      "HELP/FAQS",
      "TRACK ORDER",
      "SIZE GUIDE",
      "BUYING GUIDE",
      "HOW DO I SHOP?",
      "HOW DO I PAY?",
      "FIND PLACES WE DELIVER",
      "STYLE HUB",
    ],
  },
  {
    name: "STORE AND SITES",
    contents: ["ABOUT US", "CONTACT US", "CORPORATE SITE", "STORE LOCATOR", "CAREERS", "SITEMAP"],
  },
  {
    name: "POLICIES",
    contents: ["TERMS OF USE", "PRIVACY", "DELIVERY POLICY", "EXCHANGES & RETURNS"],
  },
  {
    name: "BRANDS",
    contents: [
      "ANTIQUE AISLE",
      "CARPET CHRONICLES",
      "CLASSIC CARPETS",
      "COLLECTORS' HAVEN",
      "ELEGANT ANTIQUITIES",
      "HERITAGE RUGS",
      "LUXE ANTIQUITIES",
    ],
  },
  {
    name: "DELIGHTFUL PROGRAMS",
    contents: ["INSTANT GIFTING", "EXPRESS STORE PICK UP"],
  },
];

const mostSearchedBrands = {
  carpets: [
    {
      name: "Persian Palace",
      description: "Offering authentic Persian rugs to elevate your home decor.",
    },
    {
      name: "Antique Treasures",
      description: "Specializing in rare and unique antique carpets from around the world.",
    },
    {
      name: "Oriental Oasis",
      description: "Bringing the beauty of Oriental rugs to your doorstep.",
    },
    {
      name: "Vintage Vibes",
      description: "Curating a collection of vintage carpets with timeless appeal.",
    },
    {
      name: "Royal Rugs & Relics",
      description: "Discover luxurious carpets fit for royalty.",
    },
    {
      name: "Heritage Haven",
      description: "Preserving history with exquisite antique carpet designs.",
    },
    {
      name: "Timeless Textiles",
      description: "Offering a selection of timeless and elegant textile treasures.",
    },
    {
      name: "Rustic Revival",
      description: "Embrace rustic charm with our collection of vintage and antique rugs.",
    },
    {
      name: "Regal Rug Emporium",
      description: "Transform your space with regal rugs steeped in tradition.",
    },
    {
      name: "Artisan Antiquities",
      description: "Showcasing artisanal craftsmanship in every antique carpet.",
    },
  ],

  antiques: [
    {
      name: "Heritage Haven",
      description: "Discover exquisite antique pieces steeped in history and tradition.",
    },
    {
      name: "Vintage Vault",
      description: "Uncover hidden treasures from the past with our collection of vintage antiques.",
    },
    {
      name: "Timeless Treasures",
      description: "Embrace the beauty of timeless antiques that add character to your space.",
    },
    {
      name: "Artisan Antiquities",
      description: "Explore artisanal craftsmanship with our curated selection of antique pieces.",
    },
    {
      name: "Rustic Revival",
      description: "Add a touch of rustic charm to your home with our rustic antique collection.",
    },
    {
      name: "Regal Relics",
      description: "Transform your space with regal antiques fit for royalty.",
    },
    {
      name: "Noble Nostalgia",
      description: "Relive the past with our collection of noble antiques that evoke nostalgia.",
    },
    {
      name: "Vintage Vibes",
      description: "Infuse your home with vintage charm with our collection of vintage antiques.",
    },
    {
      name: "Classic Collectibles",
      description: "Build your collection with classic antiques that stand the test of time.",
    },
    {
      name: "Timeless Treasures",
      description: "Discover timeless beauty with our collection of antique treasures.",
    },
  ],
};

const whyChoose = [
  {
    name: "Authenticity Guaranteed",
    description:
      "Shop with confidence knowing that every carpet and antique in our collection is authentic and of the highest quality.",
  },
  {
    name: "Curated Selection",
    description:
      "We carefully curate our collection to offer you a diverse range of carpets and antiques that reflect different cultures and styles.",
  },
  {
    name: "Exceptional Customer Service",
    description:
      "Our dedicated team is here to assist you every step of the way, from browsing our collection to post-purchase support.",
  },
  {
    name: "Secure Shopping",
    description:
      "Enjoy a secure shopping experience with ShopNest, with multiple payment options and encrypted transactions.",
  },
  {
    name: "Free Shipping",
    description:
      "We offer free shipping on all orders, so you can shop from the comfort of your home and have your items delivered straight to your doorstep.",
  },
];

const blackFooter = [
  {
    name: "CARPET BRANDS",
    contents: [
      "PERSIAN PALACE",
      "ROYAL RUGS & RELICS",
      "ORIENTAL OASIS",
      "VINTAGE VIBES",
      "HERITAGE HAVEN",
      "REGAL RUG EMPORIUM",
      "TIMELESS TEXTILES",
      "RUSTIC REVIVAL",
      "CLASSIC CARPETS & ANTIQUES",
      "NOBLE NOSTALGIA",
    ],
  },
  {
    name: "ANTIQUE BRANDS",
    contents: [
      "HERITAGE HAVEN",
      "VINTAGE VAULT",
      "TIMELESS TREASURES",
      "ARTISAN ANTIQUITIES",
      "RUSTIC REVIVAL",
      "REGAL RELICS",
      "NOBLE NOSTALGIA",
      "CLASSIC COLLECTIBLES",
      "VINTAGE VIBES",
    ],
  },
  {
    name: "POPULAR BRANDS",
    contents: [
      "PERSIAN PALACE",
      "HERITAGE HAVEN",
      "VINTAGE VAULT",
      "TIMELESS TREASURES",
      "ARTISAN ANTIQUITIES",
      "RUSTIC REVIVAL",
      "REGAL RELICS",
      "NOBLE NOSTALGIA",
      "CLASSIC COLLECTIBLES",
      "TIMELESS TREASURES",
    ],
  },
  {
    name: "FREQUENTLY PURCHASED",
    contents: [
      "PERSIAN RUG",
      "ORIENTAL CARPET",
      "VINTAGE VASE",
      "ANTIQUE CLOCK",
      "RUSTIC LAMP",
      "GOLDEN MIRROR",
      "SILVER VASE",
      "BRONZE STATUE",
      "WOODEN CHEST",
      "CRYSTAL VASE",
    ],
  },
  {
    name: "SALE",
    contents: [
      "PERSIAN RUNNER",
      "VINTAGE RUG",
      "BRASS CLOCK",
      "GOLD CHANDELIER",
      "SILK SCARF",
      "COPPER POT",
      "MARBLE BUST",
      "WOODEN MASK",
      "CRYSTAL VASE",
      "CERAMIC JAR",
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-default-900 py-[2rem] px-[3rem] sm:px-[5rem] flex flex-col gap-[1rem] text-white">
        <div className="flex flex-col justify-evenly items-center gap-x-[5rem] gap-y-[1rem] xl:flex-row">
          <div className="flex gap-[2rem] grow">
            {features.map((data) => (
              <div className="flex flex-col justify-center items-center font-thin text-center gap-[0.4rem]">
                {data.icon}
                <p>{data.name}</p>
              </div>
            ))}
          </div>
          <Select
            label="Brands"
            className="max-w-[30rem] bg-white p-1 text-black"
            variant="bordered"
            radius="none"
            classNames={{
              popoverContent: "rounded-none",
            }}
          >
            {brandNames.map((brand) => (
              <SelectItem key={brand} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </Select>
        </div>
        <Divider className="bg-white" />
        <div className="flex justify-between items-center flex-wrap gap-y-[1rem] gap-x-[0.5rem]">
          <div>
            <p>PAY SECURELY BY</p>
            <Divider className="bg-white max-w-[25%] max-h-[0.1px]" />
            <div className="flex gap-[0.5rem] text-4xl mt-[0.7rem] justify-center items-center">
              {paymentCards.map((data) => data)}
            </div>
          </div>
          <Divider orientation="vertical" className="min-h-[5rem] h-full bg-white " />
          <div>
            <p>REACH US</p>
            <Divider className="bg-white max-w-[25%] max-h-[0.1px]" />
            <div className=" mt-[0.7rem] ">
              <p>For Any Query Please Email Us questions?</p>
              <p className="text-[red]">customercare@shopnest.com</p>
            </div>
          </div>
          <Divider orientation="vertical" className="min-h-[5rem] h-full bg-white" />
          <div>
            <p>DOWNLOAD APP ON</p>
            <Divider className="bg-white max-w-[25%] max-h-[0.1px]" />
            <div className="flex gap-[1rem] text-4xl mt-[0.7rem] justify-center items-center">
              {appDownload.map((data) => data)}
            </div>
          </div>
          <Divider orientation="vertical" className="min-h-[5rem] h-full bg-white " />
          <div>
            <p>SPONSERED BY</p>
            <Divider className="bg-white max-w-[25%] max-h-[0.1px]" />
            <div className="flex gap-[0.5rem] text-4xl mt-[0.7rem] justify-center items-center">
              {sponsers.map((data) => data)}
            </div>
          </div>
          <Divider orientation="vertical" className="min-h-[5rem] h-full bg-white" />
          <div>
            <p>FOLLOW US ON</p>
            <Divider className="bg-white max-w-[25%] max-h-[0.1px]" />
            <div className="flex gap-[0.5rem] text-4xl mt-[0.7rem] justify-center items-center">
              {socialMedia.map((data) => data)}
            </div>
          </div>
        </div>
      </div>
      <div className="py-[2rem] px-[3rem] sm:px-[5rem] flex flex-wrap justify-between gap-x-[1rem] gap-y-[1rem]">
        {quickLinks.map((links) => (
          <div>
            <p className="font-bold text-red-500 text-lg">{links.name}</p>
            <Divider className="bg-red-500 max-w-[25%] max-h-[0.1px]" />
            <ul className="text-xs font-semibold mt-[0.5rem]">
              {links.contents.map((data) => (
                <li className="cursor-pointer hover:translate-x-1 transition">{data}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-[#F5F5F5] py-[2rem] px-[3rem] sm:px-[5rem]">
        <p className="font-bold text-default-600 text-lg">Most Searched Brands on ShopNest.com</p>
        <div className="flex flex-wrap justify-between gap-x-[5rem] gap-y-[1rem] mt-[1rem]">
          <div>
            <p className="font-semibold text-default-600 italic">Carpets</p>
            <Divider className="bg-red-500 max-w-[2rem] max-h-[0.1px]" />
            <ul className="mt-[0.5rem]">
              {mostSearchedBrands.carpets.map((carpets) => (
                <li className="list-disc list-inside text-xs">
                  <span className="font-semibold text-default-600 italic">{carpets.name} : </span>
                  <span className="text-default-500">{carpets.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-default-600 italic">Antiques</p>
            <Divider className="bg-red-500 max-w-[2rem] max-h-[0.1px]" />
            <ul className="mt-[0.5rem]">
              {mostSearchedBrands.antiques.map((antiques) => (
                <li className="list-disc list-inside text-xs">
                  <span className="font-semibold text-default-600 italic">{antiques.name} : </span>
                  <span className="text-default-500">{antiques.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="font-bold text-default-600 text-lg mt-[2rem]">About ShopNest</p>
        <p className="mt-[1rem] text-xs text-default-500 text-justify">
          Welcome to ShopNest, your premier destination for exquisite carpets and timeless antiques online. With a
          passion for preserving history and enriching homes with cultural treasures, ShopNest offers a curated
          selection of carpets and antiques sourced from around the globe.At ShopNest.com, we provide a seamless
          shopping experience, allowing you to explore and discover the perfect piece to complement your home decor.
          From Persian rugs to rare antiques, each item in our collection is meticulously selected to ensure
          authenticity and quality.With ShopNest, you can shop with confidence, knowing that you're investing in pieces
          that tell a story and add character to your space. Explore our diverse range of carpets and antiques, and let
          ShopNest be your guide to creating a home filled with beauty and history.
        </p>
        <div className="flex flex-wrap justify-between gap-x-[5rem] gap-y-[1rem] mt-[1rem]">
          <div>
            <p className="font-semibold text-default-600 italic">Carpets Collection</p>
            <Divider className="bg-red-500 max-w-[2rem] max-h-[0.1px]" />
            <p className="text-xs text-default-500 max-w-[40rem] text-justify">
              Elevate your home decor with our exquisite collection of carpets. Whether you're searching for a statement
              Persian rug or a vintage Oriental piece, ShopNest has something for every style and preference. Browse
              through our carefully curated selection and discover the perfect carpet to add warmth and elegance to your
              space.
            </p>
          </div>
          <div>
            <p className="font-semibold text-default-600 italic">Antiques Collection</p>
            <Divider className="bg-red-500 max-w-[2rem] max-h-[0.1px]" />
            <p className="text-xs text-default-500 max-w-[40rem] text-justify">
              Immerse yourself in history with our curated collection of antiques. From timeless artifacts to rare
              finds, ShopNest offers a diverse range of antiques that embody craftsmanship and cultural significance.
              Explore our collection and uncover treasures that will add character and charm to your home.
            </p>
          </div>
        </div>
        <p className="font-bold text-default-600 text-lg mt-[2rem]">Why Choose ShopNest?</p>
        <ul className="mt-[0.5rem]">
          {whyChoose.map((choice) => (
            <li className="list-disc list-inside text-xs">
              <span className="font-semibold text-default-600 italic">{choice.name} : </span>
              <span className="text-default-500">{choice.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="py-[2rem] px-[3rem] sm:px-[5rem] flex flex-wrap justify-between gap-x-[1rem] gap-y-[1rem] bg-black text-white">
        {blackFooter.map((links) => (
          <div>
            <p className="font-bold text-lg">{links.name}</p>
            <Divider className="max-w-[25%] max-h-[0.1px]" />
            <ul className="text-xs font-semibold mt-[0.5rem]">
              {links.contents.map((data) => (
                <li className="cursor-pointer hover:translate-x-1 transition">{data}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center text-white p-[2rem] bg-black text-sm">
        <Divider className="bg-white mb-[1rem]" />
        <div className="flex gap-[0.5rem]">
          <p className="text-center">Copyright © 2024 ShopNest Co. Ltd. </p>
          <p>/</p>
          <p className="text-center"> All Right Reserved</p>
          <p>/</p>
          <p className="text-center">Designed By TMIS</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-[1rem] text-white p-[1rem] text-xl">
          <SiFacebook className="cursor-pointer hover:scale-110" />
          <TbBrandYoutubeFilled className="cursor-pointer hover:scale-110" />
          <FaTwitterSquare className="cursor-pointer hover:scale-110" />
          <AiFillInstagram className="cursor-pointer hover:scale-110" />
        </div>
      </div>
    </>
  );
};

export default Footer;
