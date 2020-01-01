import React from "react";
import { PlaceContext } from "../context";

class FeaturedPlaces extends React.Component {
  static contextType = PlaceContext;
  render() {
    // acess value
    const { name, greeting } = this.context;
    return (
      <div>
        {greeting} {name}
      </div>
    );
  }
}

export default FeaturedPlaces;
