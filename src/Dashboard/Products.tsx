import Pagination from "./Pagination";
import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const Products: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("Categories");

  const handleOptionClick = (option: string): void => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className="text-gray-700 text-2xl pb-4 font-medium md:text-center"> Products Grid</div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="mb-5 flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between">
            <div className="grid grid-cols-2 gap-1">
              <input
                type="text"
                className="border border-gray-300 rounded-full px-4 py-2 mb-3 sm:mb-0 w-full sm:w-auto focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Search..."
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                style={{ width: "100px", height: "40px" }}
              >
                Search
              </button>
            </div>

            <div className="relative flex items-center">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
              >
                {selectedOption} <HiOutlineChevronDown className="inline-block ml-1" />
              </button>
              {/* Dropdown content */}
              {isDropdownOpen && (
                <div className="absolute z-10 right-0 mt-2 w-48  sm:w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <button
                      onClick={() => handleOptionClick("Option 1")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Option 1
                    </button>
                    <button
                      onClick={() => handleOptionClick("Option 2")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Option 2
                    </button>
                    <button
                      onClick={() => handleOptionClick("Option 3")}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Option 3
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {/* Sample item */}
            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Earthen Bottle</h3>
                <p className="text-sm text-gray-700">$48</p>
              </div>
            </a>
            {/* Sample item */}
            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                  alt="Olive drab green insulated bottle with flared screw lid and flat top."
                  className="object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Nomad Tumbler</h3>
                <p className="text-sm text-gray-700">$35</p>
              </div>
            </a>
            {/* Sample item */}
            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                  alt="Person using a pen to cross a task off a productivity paper card."
                  className="object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Focus Paper Refill</h3>
                <p className="text-sm text-gray-700">$89</p>
              </div>
            </a>
            {/* Sample item */}
            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  className="object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Machined Mechanical Pencil</h3>
                <p className="text-sm text-gray-700">$35</p>
              </div>
            </a>
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Products;
