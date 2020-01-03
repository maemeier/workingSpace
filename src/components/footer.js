import React from "react";
import IconList from "./iconList";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footerHeader">COWORKING SPACE</h1>
      <IconList />
      <div className="gridFooter">
        <div className="listFooter">
          <div role="list" class="ui list">
            <div role="listitem" class="item">
              <i aria-hidden="true" class="users icon"></i>
              <div class="content">Semantic UI</div>
            </div>
            <div role="listitem" class="item">
              <i aria-hidden="true" class="marker icon"></i>
              <div class="content">New York, NY</div>
            </div>
            <div role="listitem" class="item">
              <i aria-hidden="true" class="mail icon"></i>
              <div class="content">
                <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
              </div>
            </div>
            <div role="listitem" class="item">
              <i aria-hidden="true" class="linkify icon"></i>
              <div class="content">
                <a href="http://www.semantic-ui.com">semantic-ui.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="listFooter">
          <div role="list" class="ui list">
            <div role="listitem" class="item">
              <i aria-hidden="true" class="users icon"></i>
              <div class="content">Semantic UI</div>
            </div>
            <div role="listitem" class="item">
              <i aria-hidden="true" class="marker icon"></i>
              <div class="content">New York, NY</div>
            </div>
            <div role="listitem" class="item">
              <i aria-hidden="true" class="mail icon"></i>
              <div class="content">
                <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
              </div>
            </div>
            <div role="listitem" class="item">
              <i aria-hidden="true" class="linkify icon"></i>
              <div class="content">
                <a href="http://www.semantic-ui.com">semantic-ui.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
