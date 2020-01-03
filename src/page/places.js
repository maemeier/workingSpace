import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Hero from "../components/hero";
import PlaceContainer from "../components/placeContainer";
import "../components/style.css";

class Places extends React.Component {
  render() {
    return (
      <div>
        <Hero />

        <Banner title="Search Cowoking spaces" />

        <br />
        <Link to="/">
          <button>Back to home</button>
        </Link>

        <PlaceContainer />
        <Footer />
      </div>
    );
  }
}
export default Places;
