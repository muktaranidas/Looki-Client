import React from "react";
import bannerImage1 from "../../assets/Dermo-Cosmetics/2.jpg";

const DermoCosmetics = () => {
  return (
    <div
      className="mt-12 w-full bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage1})` }}
    >
      <div className="carousel-item Autoplay relative w-full">
        <div className="mt-24 ml-24">
          <h1 className="py-3 text-xl mb-6">
            Is bad skin affecting your daily life?
          </h1>
          <h1 className="text-5xl  text-orange-300 mb-16 font-bold">
            DERMO
            <br />
            <span className="py-1">COSMETICS</span>
          </h1>
          <h1 className="text-3xl mb-10">Rebalance your skin</h1>
          <button>
            <a
              href="#_"
              class=" mb-32 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange-300 border  rounded-md shadow-sm hover:bg-gray-900 "
              data-rounded="rounded-md"
              data-primary="blue-600"
              data-primary-reset="{}"
            >
              Shop Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DermoCosmetics;
