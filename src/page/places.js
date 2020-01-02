import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/banner";
import Hero from "../components/hero";
import PlaceContainer from "../components/placeContainer";

class Places extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <Banner title={"our Cowoking spaces"} />

        <Link to="/">Back to home</Link>

        <PlaceContainer />
      </div>
    );
  }
}
export default Places;
