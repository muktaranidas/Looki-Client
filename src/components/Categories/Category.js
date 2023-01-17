import React from "react";

const Category = ({ category }) => {
  const { name, image } = category;
  return (
    <div className="max-w-xs  rounded-md py-8 mx-auto text-black">
      <img
        src={image}
        alt=""
        className="object-cover  object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex bg-zinc-400 flex-col justify-between p-2 space-y-8">
        <div className="space-y-2 mx-auto ">
          <h2 className="text-xl  ">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
