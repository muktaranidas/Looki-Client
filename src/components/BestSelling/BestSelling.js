import React from "react";
import img1 from "../../assets/Categories/1.jpg";
import image1 from "../../assets/Featured-Products/1.jpg";
import image2 from "../../assets/Featured-Products/2.jpg";
import image3 from "../../assets/Featured-Products/3.jpg";
import image4 from "../../assets/Featured-Products/4.jpg";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Grid,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import RightBestSelling from "./RightBestSellings";
import BestSellingCard from "./BestSellingCard";

const BestSelling = () => {
  const leftBestSellings = [
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
  const rightBestSellings = [
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
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold mt-32 mb-12 text-center">
          Best Selling
        </h1>
        <div className="w-5/6	 mx-auto">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay, Grid, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <div className="grid grid-cols-1">
              {rightBestSellings.map((rightBestSelling) => (
                <SwiperSlide key={rightBestSelling.id}>
                  <RightBestSelling
                    rightBestSelling={rightBestSelling}
                  ></RightBestSelling>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="col-span-3">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={20}
          navigation={true}
          scrollbar={{ draggable: true }}
          modules={[Navigation, Scrollbar, Grid, Pagination]}
          className="mySwiper"
        >
          <div>
            {leftBestSellings?.map((leftBestSelling) => (
              <SwiperSlide key={leftBestSelling.id}>
                <BestSellingCard
                  leftBestSelling={leftBestSelling}
                ></BestSellingCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default BestSelling;
