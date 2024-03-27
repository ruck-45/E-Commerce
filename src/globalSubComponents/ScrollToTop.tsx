// Dependencies
import { Button } from "@nextui-org/react";
import { BiSolidArrowToTop } from "react-icons/bi";

// Local Files
import { scrollTop } from "../utils/controllers";
import { useEffect, useState } from "react";

const ScrollToTop = () => {

  const [active,setActive]=useState(false);

  const handleScroll=()=>{
    if(window.scrollY>400){
      setActive(true);
    }else{
      setActive(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return ()=>{
      window.removeEventListener("scroll",handleScroll);
    }
  },[]);

  return (
    <>
      {
        active && <Button
        isIconOnly
        color="warning"
        aria-label="LinkTop"
        className="fixed bottom-[1rem] right-[1rem] z-[100]"
        onClick={() => scrollTop()}
        variant="shadow"
        radius="full"
      >
        <BiSolidArrowToTop className="text-5xl text-white p-2 rounded-xl" />
      </Button>
      }
    </>
  );
};

export default ScrollToTop;
