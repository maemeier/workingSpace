import React from "react";
import ListCoWorking from "./components/ListCoWorking";
import Header from "./components/header";
import Hero from "./components/hero";
import Ad from "./components/ad";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Ad />
      <ListCoWorking />
    </div>
  );
}

export default App;
