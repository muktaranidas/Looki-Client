import React from "react";
import Categories from "../../Categories/Categories";
import NewArrival from "../../NewArrival/NewArrival";
import Banner from "../../Banner/Banner";
import FeaturedProducts from "../../FeaturedProducts/FeaturedProducts";
import DermoCosmetics from "../../DermoCosmetics/DermoCosmetics";
import PersonalizedTreatment from "../../PersonalizedTreatment/PersonalizedTreatment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <FeaturedProducts></FeaturedProducts>
      <NewArrival></NewArrival>
      <DermoCosmetics></DermoCosmetics>
      <PersonalizedTreatment></PersonalizedTreatment>
    </div>
  );
};

export default Home;
