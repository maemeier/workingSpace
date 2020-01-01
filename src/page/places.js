import React from "react";
import { Link } from "react-router-dom";

class Places extends React.Component {
  render() {
    return (
      <div>
        This is place components
        <Link to="/">Back to home</Link>
      </div>
    );
  }
}
export default Places;
