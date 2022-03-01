import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Sidebar from "./components/Sidebar";
import { getData } from "./API/api";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

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

  if (data === null) return null;
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} openClose={openClose} />
      <Navbar toggle={toggle} openClose={openClose} />
      <Hero tabOneOpen={tabOneOpen} openClose={openClose} data={data} />
    </>
  );
};
export default App;
