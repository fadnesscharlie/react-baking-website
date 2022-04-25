import React from "react";
import { Routes, Route } from "react-router-dom";

import "./Landing.css";

// Components
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Products from "../products/Products";
import Portfolio from "../portfolio/Portfolio";
import Main from "../main/Main";
import About from "../aboutus/Aboutus";

export default function Landing(props) {
  return (
    <React.Fragment>
      <Header />
      <div className="mainBody">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      <Routes>
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
