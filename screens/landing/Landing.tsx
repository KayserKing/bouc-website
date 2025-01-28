import React from "react";
import { Navbar, Banner, Services, Technologies, Processes } from "./sections";

const Landing = () => {
  return (
    <div className="h-[200vh]">
      <Navbar />
      <Banner />
      <Services />
      <Processes />
      <Technologies />
    </div>
  );
};

export default Landing;
