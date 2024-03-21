import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import ProductCards from "./SubComponents.tsx/ProductCards";
import { useDispatch, useSelector } from "react-redux";
import { scrollTop } from "../../utils/controllers";
import { updateTab } from "../../Redux/Slices/curTabSlice";
import { Button, Input, Pagination, Radio, RadioGroup, Skeleton } from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import axios from "axios";
import { RootState } from "../../Redux/store";
import { createArray } from "../../utils/controllers";

const filters = [
  {
    id: "categories",
    name: "Categories",
    options: [
      { value: "all", label: "All" },
      { value: "carpet", label: "Carpet" },
      { value: "rug", label: "Rug" },
      { value: "antique", label: "Antique" },
      { value: "decorative", label: "Decorative" },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "all", label: "All" },
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "red", label: "Red" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      { value: "teal", label: "Teal" },
      { value: "gold", label: "Gold" },
      { value: "silver", label: "Silver" },
      { value: "ivory", label: "Ivory" },
    ],
  },
  {
    id: "filters",
    name: "Filters",
    options: [
      { value: "none", label: "None" },
      { value: "new-arrivals", label: "New Arrivals" },
      { value: "sale", label: "Sale" },
      { value: "popular", label: "Popular" },
      { value: "low-to-high", label: "Price: Low to High" },
      { value: "high-to-low", label: "Price: High to Low" },
    ],
  },
];

const pageSize = 16;

export default function ShopPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const apiUrl = useSelector((state: RootState) => state.apiConfig.value);
  const [shopData, setShopData] = useState([]);
  const [receivedShopData, setReceivedShopData] = useState(-1);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [colorFilter, setColorFilter] = useState("all");
  const [otherFilter, setOtherFilter] = useState("none");
  const [search, setSearch] = useState("");
  const searchRef = useRef(document.createElement("input"));

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    if (id === "categories") {
      setCategoryFilter(e.target.value);
    } else if (id === "color") {
      setColorFilter(e.target.value);
    } else {
      setOtherFilter(e.target.value);
    }
  };

  const dispatch = useDispatch();
  dispatch(updateTab("Shop"));

  const getShopData = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/items/getItems?start=${
          (pageNumber - 1) * pageSize
        }&end=16&category=${categoryFilter}&color=${colorFilter}&filter=${otherFilter}&search=${search}`
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
  }, [apiUrl, pageNumber, categoryFilter, colorFilter, otherFilter, search]);

  return (
    <div className="bg-white">
      <div className="flex flex-row gap-x-[0.7rem] px-[1.5rem] lg:px-[5rem] mt-[2rem]">
        <Link className="font-bold cursor-pointer flex gap-2" to="/Home">
          <FaHome className="mt-[0.3rem]" />
          <p>Home</p>
        </Link>
        <p> {"»"} </p>
        <p>Shop</p>
      </div>
      <div>
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>

                    {filters.map((section, index) => (
                      <Disclosure as="div" key={index} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <RadioGroup
                                defaultValue={
                                  section.id === "categories"
                                    ? categoryFilter
                                    : section.id === "color"
                                    ? colorFilter
                                    : otherFilter
                                }
                                onChange={(e) => handleRadioChange(e, section.id)}
                              >
                                {section.options.map((option, index) => (
                                  <Radio key={`filter-${section.id}-${index}`} value={option.value}>
                                    {option.label}
                                  </Radio>
                                ))}
                              </RadioGroup>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto  px-4 sm:px-6 lg:px-20">
          <div className="flex items-baseline md:justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 hidden md:block">Shop</h1>

            <div className="flex items-center grow md:grow-0 justify-end">
              <Menu as="div" className="relative inline-block text-left">
                <div className="flex gap-[0.5rem] mr-[1rem]">
                  <Input
                    classNames={{
                      base: "w-full h-10",
                      mainWrapper: "h-full",
                      input: "text-small",
                      inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Search"
                    size="sm"
                    type="search"
                    ref={searchRef}
                  />
                  <Button color="primary" isIconOnly onClick={() => setSearch(searchRef.current.value)}>
                    <IoSearch className="text-xl" />
                  </Button>
                </div>
              </Menu>

              <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <RadioGroup
                            defaultValue={
                              section.id === "categories"
                                ? categoryFilter
                                : section.id === "color"
                                ? colorFilter
                                : otherFilter
                            }
                            onChange={(e) => handleRadioChange(e, section.id)}
                          >
                            {section.options.map((option, index) => (
                              <Radio key={`filter-${section.id}-${index}`} value={option.value}>
                                {option.label}
                              </Radio>
                            ))}
                          </RadioGroup>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-4 w-full z-0">
                <div className="flex flex-col items-center justify-center">
                  {receivedShopData === 1 ? (
                    <>
                      <div className="flex flex-wrap justify-center py-5 bg-white">
                        {shopData.map((detail: any) => (
                          <ProductCards {...detail} />
                        ))}
                      </div>
                      <div className="py-[2rem] grow">
                        <Pagination
                          loop
                          showControls
                          color="primary"
                          variant="light"
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
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
