import React from "react";
import image2 from "../../assets/PersonalizedTreatment/2.jpg";
const PersonalizedTreatment = () => {
  return (
    <div
      className="mt-12 w-full bg-no-repeat "
      style={{ backgroundImage: `url(${image2})` }}
    >
      <div className=" relative flex items-end justify-end w-full">
        <div className="mt-24 ml-24">
          <h1 className="py-3 text-xl mb-2 ml-24">What your skin needs</h1>
          <h1 className="text-5xl  text-orange-300 mr-16 mb-6 font-bold">
            PERSONALIZED
            <br />
            <span className="py-1 ml-16">TREATMENT</span>
          </h1>
          <h1 className="text-3xl -ml-12 mb-10">Premium Solution For Skin</h1>
          <button>
            <a
              href="#_"
              className="ml-48 mb-32 inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange-300 border  rounded-md shadow-sm hover:bg-gray-900 "
              data-rounded="rounded-md"
              data-primary="blue-600"
              data-primary-reset="{}"
            >
              Book Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedTreatment;
