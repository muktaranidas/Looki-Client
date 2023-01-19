import React from "react";

const BlogAnVlogCard = ({ blogAndVlogs }) => {
  const { image, title } = blogAndVlogs;
  return (
    <div className="max-w-xs">
      <img
        src="https://source.unsplash.com/random/300x300/?2"
        alt=""
        className="object-cover object-center w-full  h-72 dark:bg-gray-500"
      />
      <h2 className="text-3xl text-center mt-4  text-black font-semibold">
        {/* {title} */}
        Hiifiiffii
      </h2>
    </div>
  );
};

export default BlogAnVlogCard;
