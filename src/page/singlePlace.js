import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import { PlaceContext } from "../context";
import "../components/style.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

class SinglePlace extends React.Component {
  constructor(props) {
    super(props);
    console.log("SinglePlace", this.props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }
  static contextType = PlaceContext;
  componentDidMount() {}
  render() {
    const { getPlace } = this.context;
    const place = getPlace(this.state.slug);
    if (!place) {
      return (
        <div>
          <h3>No such place could be found</h3>
          <button>
            <Link to="/">Back to homepage</Link>
          </button>
        </div>
      );
    }
    const {
      title,
      img,
      price,
      info,
      breakfast,
      extras,
      pets,
      food,
      address,
      time,
      tel
    } = place;
    return (
      <div className="wrapSineglePlace">
        <Navbar />
        <Banner title={`${title} `} />

        <div className="gridPlace">
          <img className="singlePlaceImg" src="../img/place1.jpg" />
          <div class="ui card">
            <div class="content">
              <i class="right floated like icon"></i>
              <i class="right floated star icon"></i>
              <div class="header">{title}</div>
              <div class="description">
                <p>
                  <strong>Details:</strong>
                </p>
                <p>{info}</p>
              </div>
              <br />
              <div class="description">
                <p>
                  <p>
                    <strong>Extras:</strong>
                  </p>
                  <ul>
                    {extras.map((item, index) => {
                      return <li key={index}> {item} </li>;
                    })}
                  </ul>
                </p>
                <p>
                  <strong>Pets: </strong>
                  {pets ? "pets allowed" : "no pets allowed"}
                </p>
                <p>
                  <strong>Food:</strong>{" "}
                  {food ? "included lunch and dinner" : "not included dinner"}
                </p>
                <p>
                  <strong>Address: </strong>
                  {address}
                </p>
                <p>
                  <strong>Tel: </strong>
                  {tel}
                </p>
                <p>
                  <strong>Open: </strong>
                  {time}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button class="ui right labeled icon button">
          <Link to="/places">
            {" "}
            <i class="right arrow icon"></i>
            Back
          </Link>
        </button>
      </div>
    );
  }
}
export default SinglePlace;
