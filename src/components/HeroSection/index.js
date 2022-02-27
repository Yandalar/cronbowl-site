import React, { useState } from "react";
import "./HeroElements.css";
import { TableOne, TableTwo } from "./Data";

const Hero = (tabOneOpen) => {
  return (
    <>
      <div className="body">
        <div className="backgroundImage">
          <TableOne tabOneOpen={tabOneOpen} />
          {/* <TableTwo /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
