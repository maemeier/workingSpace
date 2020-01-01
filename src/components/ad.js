import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import Banner from "../components/banner";

const Ad = () => {
  return (
    <div>
      <div>
        <Banner title="Featured Place" />
      </div>
      <div className="ad">
        <div className="imgaeText">
          <img className="imageAd" src="./img/london.jpeg" alt="paris" />
          <h4>London, United Kingdom</h4>
        </div>
        <div className="imgaeText">
          <img className="imageAd" src="./img/newyork.jpeg" alt="paris" />
          <h4>Paris, France</h4>
        </div>
        <div className="imgaeText">
          <h3>
            {" "}
            <FontAwesomeIcon
              icon={faMedal}
              style={{ color: " #ffcc00", marginRight: "10px" }}
            />
            FAMOUS DESINATION
          </h3>
          <p className="addText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a className="ui yellow image label">
            <img src="/img/place1.jpg" />
            Mae Meier
            <div className="detail">Editor choice</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ad;
