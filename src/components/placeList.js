import React from "react";
import Places from "./places";
import CoWorking from "./coWorking";

const PlaceList = ({ places }) => {
  if (places.length === 0) {
    return (
      <div className="empty-search">
        <h3> Unfortunately no places match your seach </h3>
      </div>
    );
  }
  return (
    <div>
      <div className="placeList">
        {places.map(place => {
          return (
            <CoWorking
              key={place.id}
              title={place.title}
              img={place.img}
              city={place.city}
              info={place.info}
              price={place.price}
              slug={place.slug}
              description={place.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PlaceList;
