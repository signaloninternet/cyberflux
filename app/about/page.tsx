import ChangedNavbar from "@/components/ChangedNavbar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PlanetaryHero from "@/components/Planetorymotion";
import React from "react";

const page = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full z-30">
        <Navbar />
      </div>
      <PlanetaryHero />
      <Footer />
    </div>
  );
};

export default page;
