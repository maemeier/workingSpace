import React from "react";
import { dataCity } from "../dataCity";
import "./style.css";
import CoWorking from "../components/coWorking";

class ListCoWorking extends React.Component {
  state = {
    places: dataCity
  };

  removePlace = id => {
    console.log(id);
  };
  render() {
    const { places } = this.state;
    return (
      <>
        <h1>-FIND YOUR COWORKING SPACES-</h1>
        <div className="placeList">
          {places.map(place => (
            <CoWorking
              key={place.id}
              title={place.title}
              img={place.img}
              city={place.city}
              info={place.info}
              price={place.price}
              removePlace={this.removePlace}
            />
          ))}
        </div>
      </>
    );
  }
}
export default ListCoWorking;
