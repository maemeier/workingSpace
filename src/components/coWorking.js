import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class CoWorking extends React.Component {
  state = {
    showInfo: true
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    let { title, img, info, city, price, slug } = this.props;

    return (
      <>
        <div className="grid">
          <div className="five wide column">
            <div className="ui card">
              <div className="image">
                <img src={img} alt="image" />
              </div>
              <div className="content">
                <a className="header">{title}</a>

                <div className="meta">
                  <span className="date">{city}</span>
                  <span className="close-btn">
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ color: "tomato" }}
                    />
                  </span>
                  <div>
                    <span className="date">
                      <strong> from {price} CHF</strong>
                    </span>
                  </div>
                </div>

                {this.state.showInfo && (
                  <div className="description box">{info}</div>
                )}
                <Link to={`/places/${slug}`}>
                  <div className="ui two buttons" onClick={this.handleInfo}>
                    <div className="ui basic brown button">MORE INFO</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

CoWorking.propTypes = {
  place: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
};
export default CoWorking;
