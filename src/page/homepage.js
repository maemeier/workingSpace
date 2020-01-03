import React from "react";
import ListCoWorking from "../components/ListCoWorking";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TableList from "../components/table";
import Ad from "../components/ad";
import Banner from "../components/banner";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="App">
      <Navbar />

      <Hero />

      <Ad />
      <ListCoWorking />
      <TableList />
      <Footer />
    </div>
  );
};

export default Homepage;
