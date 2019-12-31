import React from "react";
import ListCoWorking from "../components/ListCoWorking";
import Header from "../components/header";
import Hero from "../components/hero";
import TableList from "../components/table";
import Ad from "../components/ad";

const Homepage = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Ad />
      <ListCoWorking />
      <TableList />
    </div>
  );
};

export default Homepage;
