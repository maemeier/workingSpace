import React from "react";
import IconList from "./iconList";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footerHeader">COWORKING SPACE</h1>
      <IconList />
      <form class="ui form">
        <div class="unstackable two fields">
          <div class="field">
            <label>First name</label>
            <div class="ui input">
              <input type="text" placeholder="First name" />
            </div>
          </div>
          <div class="field">
            <label>Last name</label>
            <div class="ui input">
              <input type="text" placeholder="Last name" />
            </div>
          </div>
        </div>
        <div class="two fields">
          <div class="field">
            <label>Address</label>
            <div class="ui input">
              <input type="text" placeholder="Address" />
            </div>
          </div>
          <div class="field">
            <label>Phone</label>
            <div class="ui input">
              <input type="text" placeholder="Phone" />
            </div>
          </div>
        </div>
        <div class="field">
          <div class="ui checkbox">
            <input type="checkbox" class="hidden" readonly="" tabindex="0" />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
        <button type="submit" class="ui button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Footer;
