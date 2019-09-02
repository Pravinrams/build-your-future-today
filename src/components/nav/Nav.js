import React from "react";
import "./nav.css";

class Navigation extends React.Component {
  render() {
    return (
      <div className="main-nav-container">
        <div className="nav-links" >
          links
        </div>
        <div className="nav-search">
          search
        </div>
        <div className="nav-profile">
          profile
        </div>
      </div>
    );
  }
}

export default Navigation;
