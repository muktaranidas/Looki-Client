import React, { useEffect, useState } from "react";
import image1 from "../../assets/Categories/1.jpg";
import image2 from "../../assets/Categories/2.jpg";
import image3 from "../../assets/Categories/3.jpg";
import image4 from "../../assets/Categories/4.jpg";
import image5 from "../../assets/Categories/5.jpg";
import image6 from "../../assets/Categories/6.jpg";
import image7 from "../../assets/Categories/7.jpg";
import image8 from "../../assets/Categories/8.jpg";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="flex items-center pt-4 mt-4">
        <div className="flex-1 h-px  sm:w-16 bg-orange-200"></div>
        <p className="px-3 text-2xl text-black font-semibold border border-orange-700 p-2 ">
          Shop By Category
        </p>
        <div className="flex-1 h-px sm:w-16 bg-orange-200 "></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white w-11/12 my-8	mx-auto">
        {categories?.map((category) => (
          <Category key={category?.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
