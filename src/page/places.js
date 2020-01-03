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

        <Banner
          title="our Coworking Space"
          subtitle="Choose the office near you"
        >
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
        </Banner>
        <PlaceContainer />
        <Footer />
      </div>
    );
  }
}
export default Places;
