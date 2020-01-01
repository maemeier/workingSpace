import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Places = ({ place }) => {
  const { title, slug, img, city, info, price } = place;
  return (
    <>
      <div className="placeList">
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
                  <FontAwesomeIcon icon={faHeart} style={{ color: "tomato" }} />
                </span>
                <span className="date">
                  <strong>{price}</strong>
                </span>
              </div>

              <div className="ui two buttons">
                <div className="ui basic brown button">MORE INFO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Places;
