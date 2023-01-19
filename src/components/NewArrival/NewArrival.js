import React from "react";
import img1 from "../../assets/Categories/1.jpg";
import image1 from "../../assets/Featured-Products/1.jpg";
import image2 from "../../assets/Featured-Products/2.jpg";
import image3 from "../../assets/Featured-Products/3.jpg";
import image4 from "../../assets/Featured-Products/4.jpg";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NewArrivalCard from "./NewArrivalCard";
import NewArrivalCardBottom from "./NewArrivalCardBottom";
import "swiper/css/grid";

const NewArrival = () => {
  const newArrivals = [
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
    <div className="grid grid-cols-1 lg:grid-cols-4">
      <div className="mx-auto ">
        <h1 className="text-4xl font-bold mt-32 mb-12 text-center">
          New Arrival
        </h1>
        <img src={img1} alt="" className=" p-8 w-screen	" />
      </div>
      <div className="col-span-3">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
            cols: 3,
          }}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
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
