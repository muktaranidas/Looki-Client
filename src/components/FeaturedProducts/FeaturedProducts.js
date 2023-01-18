import React from "react";
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
  const featuredProducts = [
    {
      id: 1,
      name: "Whitening & Brightening",
      image: image1,
      price: "1,250",
    },
    {
      id: 2,
      name: "Oily & Acne skin care",
      image: image2,
      price: "1,250",
    },
    {
      id: 3,
      name: "Exclusive skin care",
      image: image3,
      price: "1,250",
    },
    {
      id: 4,
      name: "Moisturizer",
      image: image4,
      price: "1,250",
    },
    {
      id: 5,
      name: "Premium skinclinic products",
      image: image1,
      price: "1,250",
    },
    {
      id: 6,
      name: "Daily skin care",
      image: image2,
      price: "1,250",
    },
    {
      id: 7,
      name: "Mature skin care",
      image: image3,
      price: "1,250",
    },
    {
      id: 8,
      name: "Hyperpigmentation, Spot & Scar",
      image: image4,
    },
  ];
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
