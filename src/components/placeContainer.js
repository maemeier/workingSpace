import React from "react";

import PlaceFilter from "./placeFilter";
import PlaceList from "./placeList";
import { withPlaceConsumer } from "../context";
import Loading from "./loading";
const PlaceContainer = ({ context }) => {
  const { loading, sortedPlaces, places } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        {/*<PlaceFilter places={places} /> */}
        <PlaceList places={sortedPlaces} />
      </div>
    </>
  );
};

export default withPlaceConsumer(PlaceContainer);
