import React from "react";

const RightBestSelling = ({ rightBestSelling }) => {
  const { image } = rightBestSelling;
  return (
    <div>
      <img src={image} alt="" className="w-[500px] h[500px]" />
    </div>
  );
};

export default RightBestSelling;
