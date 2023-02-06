import React, { useEffect, useState } from "react";
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
  Grid,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NewArrivalCard from "./NewArrivalCard";
import NewArrivalCardBottom from "./NewArrivalCardBottom";
import "swiper/css/grid";
import LeftNewArrival from "./LeftNewArrival";

const NewArrival = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/new-arrival/new-arrival")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const leftNewArrivals = [
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
  ];
  return (
    <div className="grid grid-cols-1  lg:grid-cols-5">
      <div className="flex flex-col col-span-2 mx-auto">
        <h1 className="text-4xl   font-bold mt-24 mb-12 text-center">
          New Arrival
        </h1>
        <div className="w-[500px] h-[500px]	 ml-10">
          {" "}
          <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay, Grid, Pagination, Scrollbar, A11y]}
            spaceBetween={2}
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
              {leftNewArrivals.map((leftNewArrival) => (
                <SwiperSlide key={leftNewArrival.id}>
                  <LeftNewArrival
                    leftNewArrival={leftNewArrival}
                  ></LeftNewArrival>
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
            {newArrivals?.map((newArrival) => (
              <SwiperSlide key={newArrival.id}>
                <NewArrivalCard newArrival={newArrival}></NewArrivalCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <></>
    </div>
  );
};

export default NewArrival;
