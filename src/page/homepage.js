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
      <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
      <Hero />

      <Ad />
      <ListCoWorking />
      <TableList />
      <Footer />
    </div>
  );
};

export default Homepage;
