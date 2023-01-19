import React from "react";

const YourGift = () => {
  return (
    <div>
      <div className="p-6 py-12 bg-orange-200 dark:text-gray-900">
        <div className="container mx-auto">
          {/*  */}
          <div className="flex flex-col lg:flex-row justify-around items-center ">
            <h2 className="text-center uppercase text-6xl tracking-tighter font-semibold">
              Your Gifts
            </h2>
            <h2>OF</h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span className=" k"></span>
              <h1 className="text-4xl">THE DAY</h1>
            </div>

            <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 text-white rounded-md hover:bg-gray-900  hover:text-white  bg-orange-300"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourGift;
