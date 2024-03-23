import React, { useState } from "react";

const Products = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Categories");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <h1 className="font-bold pb-10 text-2xl">Products Grid</h1>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="mb-5 -mt-12 flex items-center justify-center">
            <input
              type="text"
              className="border border-gray-300 rounded-full px-4 py-2 w-96 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Search..."
            />

            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Search
            </button>

            <div className="relative ml-auto">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
              >
                {selectedOption}
              </button>
              {/* Dropdown content */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
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

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-8 xl:aspect-h-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-8 xl:aspect-h-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                  alt="Olive drab green insulated bottle with flared screw lid and flat top."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-8 xl:aspect-h-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                  alt="Person using a pen to cross a task off a productivity paper card."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
            </a>
            <a href="#" className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-8 xl:aspect-h-7">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
