import React from "react";
import { dataCity } from "./dataCity";
const PlaceContext = React.createContext();
// Provider: allow all components in the componen trees to access

// consumer: access that infomation

class PlaceProvider extends React.Component {
  state = {
    places: [],
    sortedPlaces: [],
    featuredPlaces: [],
    loading: false
  };
  // getData

  componentDidMount() {
    let places = this.formatData(dataCity);
    let featuredPlaces = places.filter(place => place.featured === true);
    this.setState({
      places,
      featuredPlaces,
      sortedPlaces: places,
      loading: false
    });
    console.table(places);
  }
  formatData(dataCity) {
    let tempItems = dataCity.map(item => {
      let id = item.id;
      let place = { ...item, id };
      return place;
    });
    return tempItems;
  }

  getPlace = slug => {
    let tempPlaces = [...this.state.places];
    const place = tempPlaces.find(place => place.slug === slug);
    return place;
  };
  render() {
    return (
      <PlaceContext.Provider value={{ ...this.state, getPlace: this.getPlace }}>
        {/*children*/}
        {this.props.children}
      </PlaceContext.Provider>
    );
  }
}

const PlaceComsumer = PlaceContext.Consumer;
export { PlaceProvider, PlaceComsumer, PlaceContext };
export default PlaceProvider;
