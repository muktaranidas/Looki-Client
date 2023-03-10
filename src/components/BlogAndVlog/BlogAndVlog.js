import React from "react";
import image1 from "../../assets/Blog&Vlog/1.jpg";
import image2 from "../../assets/Blog&Vlog/2.jpg";
import image3 from "../../assets/Blog&Vlog/3.jpg";
import image4 from "../../assets/Blog&Vlog/4.jpg";

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
      title: "রোগের প্রতিষেধক ফাইবার ",
      image: image1,
      price: "1,250",
    },
    {
      id: 2,
      title: "ইমোশন নিয়ন্ত্রণে সফট ড্রিঙ্কস ",
      image: image2,
      price: "1,250",
    },
    {
      id: 3,
      title: "রোগের প্রতিষেধক ফাইবার ",
      image: image3,
      price: "1,250",
    },
    {
      id: 4,
      title: "ইমোশন নিয়ন্ত্রণে সফট ড্রিঙ্কস ",
      image: image4,
      price: "1,250",
    },
    {
      id: 5,
      title: "Premium skinclinic products",
      image: image1,
      price: "1,250",
    },
    {
      id: 6,
      title: "Daily skin care",
      image: image2,
      price: "1,250",
    },
    {
      id: 7,
      title: "Mature skin care",
      image: image3,
      price: "1,250",
    },
    {
      id: 8,
      title: "Hyperpigmentation, Spot & Scar",
      image: image4,
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-rows-2 w-11/12 mx-auto">
      <div className="uppercase flex flex-col items-center justify-center ">
        <h1 className="text-2xl">skin care </h1>
        <h1 className="text-orange-400 text-2xl ">*</h1>
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
            {blogAndVlogs?.map((blogAndVlog) => (
              <SwiperSlide key={blogAndVlog.id}>
                <BlogAnVlogCard blogAndVlog={blogAndVlog}></BlogAnVlogCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default BlogAndVlog;
