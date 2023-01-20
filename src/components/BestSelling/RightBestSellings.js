import React from "react";

const RightBestSelling = ({ rightBestSelling }) => {
  const { image } = rightBestSelling;
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default RightBestSelling;
