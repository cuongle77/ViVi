import React, { useState } from "react";
import { Route } from "react-router";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

function HomeTemPlate(props) {
  const { Component, ...restRoute } = props;
  let [isOpen, setIsOpen] = useState(false);
  const handleOpenSideBar = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <>
            <Navbar handleOpenSideBar={handleOpenSideBar} />
            <SideBar isOpen={isOpen} handleOpenSideBar={handleOpenSideBar} />
            <Component {...propsRoute} />
            <Footer />
            <BackToTop />
          </>
        );
      }}
    />
  );
}

export default HomeTemPlate;
