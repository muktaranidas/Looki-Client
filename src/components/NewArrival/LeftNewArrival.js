import React from "react";

const LeftNewArrival = ({ leftNewArrival }) => {
  const { image } = leftNewArrival;
  return (
    <div>
      <img src={image} alt="" className="w-[500px] h-[500px] mt-24" />
    </div>
  );
};

export default LeftNewArrival;
