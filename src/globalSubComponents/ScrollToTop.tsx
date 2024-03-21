// Dependencies
import { Button } from "@nextui-org/react";
import { BiSolidArrowToTop } from "react-icons/bi";

// Local Files
import { scrollTop } from "../utils/controllers";
import { useEffect, useState } from "react";

const ScrollToTop = () => {

  const [show,setShow] =useState(false);

  const getWindowSize=()=>{
    const current=document.documentElement.scrollTop;
    if(current>400){
      setShow(true);
    }
    else{
      setShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",getWindowSize);
    return ()=>{
      window.removeEventListener("scroll",getWindowSize);
    }
  },[]);


  return (
    <>
      {show && 
      <Button
      isIconOnly
      color="warning"
      aria-label="LinkTop"
      className="fixed bottom-[1rem] right-[1rem] z-[100]"
      onClick={() => scrollTop()}
      variant="shadow"
      radius="full"
    >
      <BiSolidArrowToTop className="text-5xl text-white p-2 rounded-xl" />
    </Button>}
    </>
    
  );
};

export default ScrollToTop;
