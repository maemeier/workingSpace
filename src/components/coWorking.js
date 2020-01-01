import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
          <div class="five wide column">
            <div class="ui card">
              <div class="image">
                <img src={img} />
              </div>
              <div class="content">
                <a class="header">{title}</a>
                <div class="meta">
                  <span class="date">{city}</span>
                  <span className="close-btn">
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "tomato" }}
                    />
                  </span>
                  <span class="date">
                    <strong>{price}</strong>
                  </span>
                </div>
                {this.state.showInfo && (
                  <div class="description box">{info}</div>
                )}

                <div class="ui two buttons" onClick={this.handleInfo}>
                  <div class="ui basic brown button">MORE INFO</div>
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
