import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import { PlaceContext } from "../context";

class SinglePlace extends React.Component {
  constructor(props) {
    super(props);
    console.log("SingleRoom", this.props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }
  static contextType = PlaceContext;
  componentDidMount() {}
  render() {
    const { getPlace } = this.context;
    const place = getPlace(this.state.slug);
    console.log("SinglePlace", place);
    if (!place) {
      return (
        <div>
          <h3>No such place could be found</h3>
          <Link to="/">Back to homepage</Link>
        </div>
      );
    }
    const { title, img, price, info, breakfast, extras } = place;
    return (
      <div>
        <Banner title={`${title} `} />
        <Link to="/places">Back to our Coworking Spaces</Link>
      </div>
    );
  }
}
export default SinglePlace;
