import React from "react";

const LeftNewArrival = ({ leftNewArrival }) => {
  const { image } = leftNewArrival;
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default LeftNewArrival;
