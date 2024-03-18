import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllitems } from "../../Redux/Slices/CartSlice";

const Test = () => {

    const dispatch = useDispatch()

    const item = async() =>{
        return dispatch(getAllitems());
    }
  useEffect(() => {item()}, []);
  return <div>test</div>;
};

export default Test;
