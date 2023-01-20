import React from "react";

const BlogAnVlogCard = ({ blogAndVlog }) => {
  const { image, title } = blogAndVlog;
  return (
    <div className="max-w-xs">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full  h-72 dark:bg-gray-500"
      />
      <h2 className="text-2xl text-center mt-4  text-black ">{title}</h2>
    </div>
  );
};

export default BlogAnVlogCard;
