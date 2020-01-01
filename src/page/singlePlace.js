import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import { PlaceContext } from "../context";

class SinglePlace extends React.Component {
  state = {
    slug: this.props.match.params.slug
  };
  static contextType = PlaceContext;
  componentDidMount() {}
  render() {
    const { getPlace } = this.context;
    const place = getPlace(this.state.slug);
    console.log("SinglePlace", place);
    return <div>This is SinglePlace</div>;
  }
}
export default SinglePlace;
