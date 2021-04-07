import React, { useState } from "react";
import About from "../../components/About";
import Blog from "../../components/Blog";
import ExclusiveHop from "../../components/ExclusiveHop";
import Footer from "../../components/Footer";
import GetInTouch from "../../components/GetInTouch";
import HeroSlider from "../../components/HeroSlider";
import LatestTrailer from "../../components/LatestTrailer";
import Navbar from "../../components/Navbar";
import Partner from "../../components/Partner";
import Products from "../../components/Products";
import SideBar from "../../components/SideBar";
import Solutions from "../../components/Solutions";
import Team from "../../components/Team";
import Testimonial from "../../components/Testimonial";
import VideoCreated from "../../components/VideoCreated";

function HomePages() {
  let [isOpen, setIsOpen] = useState(false);

  const handleOpenSideBar = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <Navbar handleOpenSideBar={handleOpenSideBar} />
      <SideBar isOpen={isOpen} handleOpenSideBar={handleOpenSideBar} />
      <HeroSlider />
      <About />
      <VideoCreated />
      <Solutions />
      <Testimonial />
      <Products />
      <GetInTouch />
      <LatestTrailer />
      <ExclusiveHop />
      <Team />
      <Partner />
      <Blog />
      <Footer />
    </>
  );
}

export default HomePages;
