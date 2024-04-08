import axios from "axios";
import { useLayoutEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store";
import { individualProductType } from "../../../utils/types";
import ProductCards from "../../ShopPage/SubComponents.tsx/ProductCards";
import { Button, Input, Pagination, Skeleton } from "@nextui-org/react";
import { createArray, scrollTop } from "../../../utils/controllers";
import { IoSearch } from "react-icons/io5";

const pageSize = 16;

const Products = () => {
  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const [itemCount, setItemCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [shopData, setShopData] = useState([]);
  const [receivedShopData, setReceivedShopData] = useState(-1);
  const [search, setSearch] = useState("");
  const searchRef = useRef(document.createElement("input"));

  const getShopData = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/items/getItems?start=${(pageNumber - 1) * pageSize}&end=16&search=${search}`
      );

      if (!response.data.success) {
        setReceivedShopData(0);
      } else {
        setShopData(response.data.payload.result);
        setItemCount(response.data.payload.total);
        if (response.data.payload.result.length > 0) {
          setReceivedShopData(1);
        } else {
          setReceivedShopData(0);
        }
      }
    } catch (error) {
      console.log(error);
      setReceivedShopData(0);
    }
  };

  useLayoutEffect(() => {
    scrollTop();
    getShopData();
  }, [apiUrl, pageNumber, search]);

  return (
    <div className="bg-[#28292b] flex flex-col justify-center items-center0 py-[5rem]">
      <div className="text-3xl md:text-center text-white font-bold">AVAILABLE PRODUCTS</div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Input
            classNames={{
              base: "h-10 max-w-[20rem]",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Search"
            size="sm"
            type="search"
            ref={searchRef}
            radius="none"
          />
          <Button color="danger" radius="none" isIconOnly onClick={() => setSearch(searchRef.current.value)}>
            <IoSearch className="text-xl" />
          </Button>
        </div>
        {receivedShopData === 1 ? (
          <>
            <div className="flex flex-wrap justify-center py-5">
              {shopData.map((detail: individualProductType) => (
                <ProductCards {...detail} />
              ))}
            </div>
            <div className="py-[2rem] grow flex justify-center">
              <Pagination
                loop
                showControls
                radius="none"
                color="danger"
                variant="bordered"
                className="dark"
                onChange={(pageNumber) => setPageNumber(pageNumber)}
                total={itemCount ? Math.ceil(itemCount / pageSize) : 1}
                initialPage={1}
              />
            </div>
          </>
        ) : receivedShopData === -1 ? (
          <div className="flex flex-wrap justify-center py-5 bg-white">
            {createArray(16).map((data) => (
              <Skeleton key={data} className="w-[15rem] h-[20rem] m-3" />
            ))}
          </div>
        ) : (
          <div className="w-full h-[100vh] flex justify-center items-center">
            <p className="font-bold text-2xl text-default-300">No Items Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
