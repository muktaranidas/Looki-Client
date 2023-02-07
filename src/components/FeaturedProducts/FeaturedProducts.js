import React, { useEffect, useState } from "react";
import image1 from "../../assets/Featured-Products/1.jpg";
import image2 from "../../assets/Featured-Products/2.jpg";
import image3 from "../../assets/Featured-Products/3.jpg";
import image4 from "../../assets/Featured-Products/4.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FeaturedProduct from "./FeaturedProduct";

export default function App() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allproduct/featured-product")
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data));
  }, []);

  return (
    <div>
      <div className="flex items-center pt-4 mt-16 mb-8">
        <div className="flex-1 h-px  sm:w-16 bg-orange-200"></div>
        <p className="px-3 text-2xl text-black font-semibold border border-orange-700 p-2 ">
          Featured Products
        </p>
        <div className="flex-1 h-px sm:w-16 bg-orange-200 "></div>
      </div>
      <Swiper
        className=" bg-white w-11/12 my-8	mx-auto"
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={5}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div>
          {featuredProducts.map((featuredProduct) => (
            <SwiperSlide key={featuredProduct.id}>
              <FeaturedProduct
                featuredProduct={featuredProduct}
              ></FeaturedProduct>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}
