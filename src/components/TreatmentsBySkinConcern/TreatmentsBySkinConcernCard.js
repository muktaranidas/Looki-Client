import React from "react";

const TreatmentsBySkinConcernCard = ({ treatmentsBySkinConcern }) => {
  const { title, description, image } = treatmentsBySkinConcern;
  return (
    <div className="  mb-12  mx-auto ">
      <div className="flex flex-col  mx-auto overflow-hidden rounded">
        <img
          src={image}
          alt=""
          className="w-full h-60 sm:h-96 dark:bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-32 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold text-center text-orange-300 sm:text-3xl hover:text-black"
            >
              {title}
            </a>
          </div>
          <div className="dark:text-gray-100">
            <p>{description}</p>
          </div>
          <button className="btn border hover:bg-orange-300 hover:text-white mt-6 border-orange-300 bg-white text-black rounded-none uppercase ">
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsBySkinConcernCard;
