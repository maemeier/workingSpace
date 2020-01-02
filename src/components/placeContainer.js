import React from "react";
import PlaceFilter from "./placeFilter";
import PlaceList from "./placeList";
import { PlaceComsumer } from "../context";
import Loading from "./loading";
class PlaceContainer extends React.Component {
  render() {
    return (
      <PlaceComsumer>
        {value => {
          const { loading, sortedPlaces, places } = value;
          if (loading) {
            return <Loading />;
          }
          return (
            <div>
              This is Place Container
              <PlaceFilter places={places} />
              <PlaceList places={sortedPlaces} />
            </div>
          );
        }}
      </PlaceComsumer>
    );
  }
}

export default PlaceContainer;
