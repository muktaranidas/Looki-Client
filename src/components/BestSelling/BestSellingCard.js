import React from "react";

const BestSellingCard = (leftBestSelling) => {
  const { name, image, price } = leftBestSelling;
  return (
    <div className="max-w-xs rounded-md mb-6 shadow-md bg-white text-black-600">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="font-semibold tracking-wide h-12">{name}</h2>
          <p className="text-orange-600">${price}</p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-orange-300  hover:bg-gray-800 text-white"
          data-rounded="rounded-md"
          data-primary="blue-600"
          data-primary-reset="{}"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default BestSellingCard;
