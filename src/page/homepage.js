import React from "react";
import ListCoWorking from "../components/ListCoWorking";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TableList from "../components/table";
import Ad from "../components/ad";
import Footer from "../components/footer";

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
