import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import FooterTop from "../../components/Shared/Footer/FooterTop";
import Header from "../../components/Shared/Header/Header";
import Nav from "../../components/Shared/Nav/Nav";
import Navbar from "../../components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <FooterTop></FooterTop>
      <Footer></Footer>
    </div>
  );
};

export default Main;
