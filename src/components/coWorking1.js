import React from "react";
import "./style.css";
class CoWorking extends React.Component {
  render() {
    const { id, title, img, info, city } = this.props;
    const { removePlace } = this.props;
    return (
      <>
        <div className="grid">
          <div>
            <h2>{title}</h2>
            <img src={img} alt="place" />
            <p>
              <strong>{city}</strong>
            </p>
            <p>{info}</p>
          </div>
        </div>
      </>
    );
  }
}

export default CoWorking;
