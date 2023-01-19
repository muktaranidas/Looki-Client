import React from "react";
import Categories from "../../Categories/Categories";
import NewArrival from "../../NewArrival/NewArrival";
import Banner from "../../Banner/Banner";
import FeaturedProducts from "../../FeaturedProducts/FeaturedProducts";
import DermoCosmetics from "../../DermoCosmetics/DermoCosmetics";
import PersonalizedTreatment from "../../PersonalizedTreatment/PersonalizedTreatment";
import BestSelling from "../../BestSelling/BestSelling";
import OurTestimonial from "../../OurTestimonial/OurTestimonial";
import TreatmentsBySkinConcern from "../../TreatmentsBySkinConcern/TreatmentsBySkinConcern";
import YourGift from "../../YourGift/YourGift";
import BlogAndVlog from "../../BlogAndVlog/BlogAndVlog";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <FeaturedProducts></FeaturedProducts>
      {/* <NewArrival></NewArrival> */}
      <DermoCosmetics></DermoCosmetics>
      {/* <BestSelling></BestSelling> */}
      <PersonalizedTreatment></PersonalizedTreatment>
      <TreatmentsBySkinConcern></TreatmentsBySkinConcern>
      <OurTestimonial></OurTestimonial>
      <YourGift></YourGift>
      <BlogAndVlog></BlogAndVlog>
    </div>
  );
};

export default Home;
