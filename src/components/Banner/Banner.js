import React from "react";
import bannerImage1 from "../../assets/Banner/1.jpg";
import bannerImage2 from "../../assets/Banner/2.jpg";

const Banner = () => {
  return (
    <div
      className="carousel Autoplay w-full bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage1})` }}
    >
      <div id="slide1" className="carousel-item  relative w-full">
        <div className="mt-24 ml-24">
          <h1 className="py-3 text-xl">Worried About Your Skin?</h1>
          <h1 className="text-5xl  text-orange-300 mb-16 font-bold">
            PIO-PIN
            <br />
            <span className="py-1">SKIN CARE TREATMENT</span>
          </h1>
          <h1 className="text-3xl mb-16">Don't worry, we got you!</h1>
          <button>
            <a
              href="#_"
              class=" mb-32 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange-300 border  rounded-md shadow-sm hover:bg-gray-900 "
              data-rounded="rounded-md"
              data-primary="blue-600"
              data-primary-reset="{}"
            >
              Explore Now
            </a>
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide4"
            className="btn Autoplay btn-circle  border-white shadow-lg bg-white text-black "
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle  border-white shadow-lg bg-white text-black "
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item Autoplay bg-no-repeat relative w-full"
        style={{ backgroundImage: `url(${bannerImage2})` }}
      >
        <div className="mt-24 ml-24">
          <h1 className="py-3 text-xl">What's Your Skin Concern?</h1>
          <h1 className="text-5xl  text-orange-300 mb-16 font-bold">
            PERSONALIZED
            <br />
            <span className="py-1">TREATMENT</span>
          </h1>
          <h1 className="text-3xl mb-16">Premium Solution For Skin</h1>
          <button>
            <a
              href="#_"
              class=" mb-32 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange-300 border  rounded-md shadow-sm hover:bg-gray-900 "
              data-rounded="rounded-md"
              data-primary="blue-600"
              data-primary-reset="{}"
            >
              Explore Now
            </a>
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide1"
            className="btn btn-circle  border-white shadow-lg bg-white text-black "
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle Autoplay border-white shadow-lg bg-white text-black "
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
