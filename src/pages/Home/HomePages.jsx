import React, { useState } from "react";
import About from "../../components/About";
import HeroSlider from "../../components/HeroSlider";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
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
    </>
  );
}

export default HomePages;
