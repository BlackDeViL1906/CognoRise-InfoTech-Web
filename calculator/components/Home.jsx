import React, { useState } from "react";
import "../assets/css/Home.css";
import Calculator from "./Calculator";

const Home = () => {
  return (
    <div className="container">
      <h1 id="heading">My Calculator</h1>
      <Calculator />
    </div>
  );
};

export default Home;
