import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <div className="ui segment">
        <div className="ui active dimmer">
          <div className="ui large text loader">Loading places...</div>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default Loading;
