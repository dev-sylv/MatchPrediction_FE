import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../blocks/landingpageblocks/Header";
import Footer from "../../blocks/landingpageblocks/Footer";

const HomeLayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayouts;
