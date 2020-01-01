import React from "react";
import IconList from "./iconList";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footerHeader">COWORKING SPACE</h1>
      <IconList />
      <form className="ui form">
        <div className="unstackable two fields">
          <div className="field">
            <label>First name</label>
            <div className="ui input">
              <input type="text" placeholder="First name" />
            </div>
          </div>
          <div className="field">
            <label>Last name</label>
            <div className="ui input">
              <input type="text" placeholder="Last name" />
            </div>
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            <label>Address</label>
            <div className="ui input">
              <input type="text" placeholder="Address" />
            </div>
          </div>
          <div className="field">
            <label>Phone</label>
            <div className="ui input">
              <input type="text" placeholder="Phone" />
            </div>
          </div>
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input
              type="checkbox"
              className="hidden"
              readOnly=""
              tabIndex="0"
            />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <button type="submit" className="ui button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Footer;
