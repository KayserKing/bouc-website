import React from "react";
import { Navbar, Banner, Services, Technologies } from "./sections";

const Landing = () => {
  return (
    <div className="h-[200vh]">
      <Navbar />
      <Banner />
      <Services />
      <Technologies />
      <Technologies />
    </div>
  );
};

export default Landing;
