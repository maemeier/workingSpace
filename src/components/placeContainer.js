import React from "react";
import Navbar from "./navbar";
import PlaceFilter from "./placeFilter";
import PlaceList from "./placeList";
import { PlaceComsumer } from "../context";
import Loading from "./loading";
class PlaceContainer extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <PlaceComsumer>
          {value => {
            const { loading, sortedPlaces, places } = value;
            if (loading) {
              return <Loading />;
            }
            return (
              <div>
                <PlaceFilter places={places} />
                <PlaceList places={sortedPlaces} />
              </div>
            );
          }}
        </PlaceComsumer>
      </>
    );
  }
}

export default PlaceContainer;
