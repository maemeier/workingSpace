import React from "react";
import items from "./dataCity";
const PlaceContext = React.createContext();
// Provider: allow all components in the componen trees to access

// consumer: access that infomation

class PlaceProvider extends React.Component {
  state = {
    places: [],
    sortedPlaces: [],
    featuredPlaces: [],
    loading: true
  };
  render() {
    return (
      <PlaceContext.Provider value={{ ...this.state }}>
        {/*children*/}
        {this.props.children}
      </PlaceContext.Provider>
    );
  }
}

const PlaceComsumer = PlaceContext.Consumer;
export { PlaceProvider, PlaceComsumer, PlaceContext };
export default PlaceProvider;
