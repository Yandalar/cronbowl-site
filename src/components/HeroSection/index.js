import React, { useState } from "react";
import "./HeroElements.css";
import { StandingsTable, TableTwo } from "./Data";

const Hero = ({ tabOneOpen, data }) => {
  return (
    <>
      <div className="body">
        <div className="backgroundImage">
          {tabOneOpen && <StandingsTable data={data.standings} />}
          {/* <TableTwo /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
