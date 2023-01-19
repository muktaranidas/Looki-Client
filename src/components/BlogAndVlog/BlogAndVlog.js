import React from "react";
import image1 from "../../assets/Featured-Products/1.jpg";
import image2 from "../../assets/Featured-Products/2.jpg";
import image3 from "../../assets/Featured-Products/3.jpg";
import image4 from "../../assets/Featured-Products/4.jpg";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BlogAnVlogCard from "./BlogAnVlogCard";

const BlogAndVlog = () => {
  const blogAndVlogs = [
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
    <div className="grid grid-cols-1 lg:grid-rows-2 w-11/12 mx-auto">
      <div className="uppercase flex flex-col items-center justify-center ">
        <h1 className="text-2xl">skin care </h1>
        <h1 className="text-orange-400 text-2xl my-3">*</h1>
        <h1 className="text-5xl">blog & vlog</h1>
      </div>
      <div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="grid lg:grid-cols-4  justify-center items-center ">
            {blogAndVlogs.map((blogAndVlog) => (
              <SwiperSlide key={blogAndVlogs.id}>
                <BlogAnVlogCard blogAndVlogs={blogAndVlogs}></BlogAnVlogCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default BlogAndVlog;
