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
    loading: false,
    type: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    food: false,
    pets: false
  };
  // getData

  componentDidMount() {
    let places = this.formatData(dataCity);
    let featuredPlaces = places.filter(place => place.featured === true);
    let maxPrice = Math.max(...places.map(item => item.price));

    this.setState({
      places,
      featuredPlaces,
      sortedPlaces: places,
      loading: false,
      price: maxPrice
    });
    // console.table(places);
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

  handleChange = event => {
    const type = event.target.type;
    const title = event.target.title;
    const value = event.target.value;
    console.log(type, title, value);
  };

  filterPlaces = () => {
    console.log("hello");
  };
  render() {
    return (
      <PlaceContext.Provider
        value={{
          ...this.state,
          getPlace: this.getPlace,
          handleChange: this.handleChange
        }}
      >
        {/*children*/}
        {this.props.children}
      </PlaceContext.Provider>
    );
  }
}

const PlaceComsumer = PlaceContext.Consumer;

export function withPlaceConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <PlaceComsumer>
        {value => <Component {...props} context={value} />}
      </PlaceComsumer>
    );
  };
}
export { PlaceProvider, PlaceComsumer, PlaceContext };
export default PlaceProvider;
