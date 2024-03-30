import axios from "axios";
import Pagination from "./Pagination";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { getCookie } from "../../../utils/cookies";
import { RootState } from "../../../Redux/store";
import Model from "./Model";
import { Button } from "@nextui-org/react";




const Products = () => {
  const navigate = useNavigate()

  const token = getCookie("token");

  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const [data, setData] = useState([])
  const [activeImage, setActiveImage] = useState("1"); 
  const [showModel, setShowModel] = useState(false);
  async function getAllProucts (){

   try {
     const response = await axios.get(`${apiUrl}/items/getItems`);
     
     const items = response.data.payload.result
     console.log(items)
     setData(items)
     
   } catch (error) {
      console.log(error)
      setData([])
   }
  }
  
  const EditProduct = (id:string)=>{
    navigate(`/admin/editProduct/${id}`)
  }
 

 const handleDeleteButtonClick = () => {
   setShowModel(true);
   // Additional logic for handling the delete action, if needed
 };


  useLayoutEffect(()=>{
   getAllProucts()
   console.log("here is model",showModel)
  },[])

  return (
    <>
      <div className="text-gray-700 text-2xl pb-4 font-medium md:text-center p-[5rem]"> Products Grid</div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="sr-only">Products</h2>
          {/*  */}

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {/* Sample item */}
            {data.map((item: any) => (
              <div key={item.item_id} className="group border-2 rounded-xl">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={`${apiUrl}/items/itemImages/${item.item_id}_img${activeImage}.jpg`}
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    className="object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="px-[1rem]">
                  <div className="w-[14rem]">
                    <h3 className="text-1xl font-semibold mb-2  text-start">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700">Rs{item.price}</p>
                  <div className="flex flex-row items-start justify-between py-[1rem]">
                    <Button
                    onClick={()=> EditProduct(item.item_id)}
                    className="bg-green-600 text-white px-[1rem] rounded-xl">Edit</Button>
                    <Button onClick={handleDeleteButtonClick} className="bg-red-600 text-white px-[1rem] rounded-xl">
                      Delete
                    </Button>
                  </div>
                </div>
                
                {showModel && <Model onClose={() => setShowModel(false)} jobId={item.item_id}/>}
              </div>
            ))}
          </div>
          <Pagination />
        
        </div>
      </div>
    </>
  );
};

export default Products;
