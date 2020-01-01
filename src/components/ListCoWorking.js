import React from "react";
import { dataCity } from "../dataCity";
import { PlaceContext } from "../context";
import "./style.css";
import CoWorking from "../components/coWorking";
import Banner from "../components/banner";

class ListCoWorking extends React.Component {
  state = {
    places: dataCity
  };

  removePlace = id => {
    // console.log(id);
  };

  static contextType = PlaceContext;
  render() {
    let { featuredPlaces: places } = this.context;
    return (
      <>
        <Banner title="Featured Places" />
        <div className="placeList">
          {places.map(place => (
            <CoWorking
              key={place.id}
              title={place.title}
              img={place.img}
              city={place.city}
              info={place.info}
              price={place.price}
              slug={place.slug}
              removePlace={this.removePlace}
            />
          ))}
        </div>
      </>
    );
  }
}
export default ListCoWorking;
