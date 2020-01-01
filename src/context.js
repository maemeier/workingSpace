import React from "react";

const PlaceContext = React.createContext();
// Provider: allow all components in the componen trees to access

// consumer: access that infomation

class PlaceProvider extends React.Component {
  state = {};
  render() {
    return (
      <PlaceContext.Provider value="hehe">
        //children
        {this.props.children}
      </PlaceContext.Provider>
    );
  }
}

const PlaceComsumer = PlaceContext.Consumer;
export { PlaceProvider, PlaceComsumer, PlaceContext };
export default PlaceProvider;
