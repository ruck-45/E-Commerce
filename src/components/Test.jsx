import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllItems } from "../Redux/Slices/CartSlice";



const Test = () => {
   const dispatch = useDispatch()
   function getall(id) {
    return dispatch(getAllItems(id))
   }
    useEffect(() => { getall() }, []);
  return <div>Test</div>;
};

export default Test;
