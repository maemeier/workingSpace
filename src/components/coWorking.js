import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class CoWorking extends React.Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, title, img, info, city, price } = this.props;
    const { removePlace } = this.props;
    return (
      <>
        <div className="grid">
          <div className="five wide column">
            <div className="ui card">
              <div className="image">
                <img src={img} />
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
                  <span className="date">
                    <strong>{price}</strong>
                  </span>
                </div>
                {this.state.showInfo && (
                  <div className="description box">{info}</div>
                )}

                <div className="ui two buttons" onClick={this.handleInfo}>
                  <div className="ui basic brown button">MORE INFO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CoWorking;
