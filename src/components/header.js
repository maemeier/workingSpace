import React from "react";

const Header = () => {
  return (
    <>
      <div
        class="ui button"
        data-tooltip="Add users to your feed"
        data-position="top left"
      >
        Top Left
      </div>
      <div
        class="ui button"
        data-tooltip="Add users to your feed"
        data-position="top center"
      >
        Top Center
      </div>
      <div
        class="ui button"
        data-tooltip="Add users to your feed"
        data-position="top right"
      >
        Top Right
      </div>
    </>
  );
};
export default Header;
