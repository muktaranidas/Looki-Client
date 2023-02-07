import React from "react";

const Category = ({ category }) => {
  const { name, image } = category;
  return (
    <div className="rounded-md py-8  text-black">
      <img
        src={image}
        alt=""
        className="w-full  rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex bg-zinc-400 flex-col justify-between p-2 space-y-8">
        <div className="space-y-2 mx-auto ">
          <h2 className="text-xl h-16 py-2 ">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
