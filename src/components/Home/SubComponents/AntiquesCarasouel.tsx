//dependicies
import React from "react";
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import { FaStar } from "react-icons/fa6";
import { IoMdStarHalf } from "react-icons/io";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import files
import photo from "../assets/anti.jpg";

const content = [
  {
    productName: "Antiques Safona",
    price: "$1000.00",
  },
  {
    productName: "Antiques Safona",
    price: "$1000.00",
  },
  {
    productName: "Antiques Safona",
    price: "$1000.00",
  },
  {
    productName: "Antiques Safona",
    price: "$1000.00",
  },
  {
    productName: "Antiques Safona",
    price: "$1000.00",
  },
  {
    productName: "Antiques Safona",
    price: "$1000.00",
  },
  {
    productName: "Antiques Safona",
    price: "$1000.00",
  },
];

type CardProps = {
  des: {
    title: string;
    pra: string;
  };
  antiques: {
    name: string;
    image: string;
    price: number;
  }[];
};

const AntiquesCarasouel = (props: CardProps) => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "50px" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, background: "black", borderRadius: "50px" }} onClick={onClick} />
    );
  }
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "max-w-[75rem] mx-auto",
    focusOnSelect: true,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-auto flex flex-col items-start justify-center md:p-[3rem] bg-white ">
      <div className="flex flex-col items-start  md:px-[4rem] px-[2rem] py-[2rem] ">
        <h1 className="text-3xl font-semibold py-[0.5rem]">Home Decor Carpets</h1>
        <p className="opacity-50">
          Home decor carpets are essential elements in interior design that add warmth, comfort, and style to living
          spaces
        </p>
      </div>
      <div className="slider-container max-h-[75vh] p-[1rem]">
        <Slider {...settings}>
          {props.antiques.map((data, i) => (
            <div key={i} className="w-auto p-[1.5rem] ">
              <div className="border-2 border-black">
                <div>
                  <img className="w-[20rem]" src={photo} alt="" />
                </div>
                <div className="p-[0.5rem]">
                  <h2 className="font-bold lg:text-start text-center">{data.name}</h2>
                </div>
                <div className="flex md:flex-row flex-col justify-between items-center p-[0.5rem] ">
                  <h3 className="font-semibold">{data.price}</h3>
                  <div className="py-[0.5rem]">
                    <h5 className="flex flex-row items-center justify-center lg:mr-[1rem] text-yellow-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AntiquesCarasouel;
