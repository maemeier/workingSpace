import React from "react";
import { PlaceContext } from "../context";
import Places from "../components/places";
import Loading from "../components/loading";
class FeaturedPlaces extends React.Component {
  static contextType = PlaceContext;
  render() {
    // acess value
    let { loading, featuredPlaces: places } = this.context;

    places = places.map(place => {
      return <Places className="placeList" key={place.id} place={place} />;
    });
    return <div>{loading ? <Loading /> : places}</div>;
  }
}

export default FeaturedPlaces;
