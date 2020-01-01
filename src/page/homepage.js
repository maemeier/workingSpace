import React from "react";
import ListCoWorking from "../components/ListCoWorking";

import Hero from "../components/hero";
import TableList from "../components/table";
import Ad from "../components/ad";
import Footer from "../components/footer";
import FeaturedPlaces from "../components/featuredPlace";

const Homepage = () => {
  return (
    <div className="App">
      <Hero />
      <Ad />
      <FeaturedPlaces />
      <ListCoWorking />
      <TableList />
      <Footer />
    </div>
  );
};

export default Homepage;
