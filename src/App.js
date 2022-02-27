import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(`isOpen ahora es ${isOpen}`);
  };

  const [tabOneOpen, setTabOneOpen] = useState(false);

  const openClose = () => {
    setTabOneOpen(!tabOneOpen);
    console.log(`tabOneOpen is ${tabOneOpen}`);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} openClose={openClose} />
      <Hero tabOneOpen={tabOneOpen} openClose={openClose} />
    </>
  );
};
export default App;
