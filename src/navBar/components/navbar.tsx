import React, { useState } from "react";
import Ratio from 'react-bootstrap/Ratio';
import "../styles/navbar.css";

const Sidebar = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };
  return (
    <div
      className={`navbar ${expanded ? "expanded" : ""}`}
      onMouseEnter={toggleNavbar}
      onMouseLeave={toggleNavbar}
    >
      <div className={expanded ? "logo" : "smallLogo"}>
        <img src={require("../icons/logo.png")} alt="logo" />
      </div>
      <div className="tabs">
        <div className="tab">
          <img src={require("../icons/alert.png")} alt="Alerts" />
          {expanded && <span>Alerts</span>}
        </div>
        <div className="tab">
          <img src={require("../icons/education.png")} alt="Training" />
          {expanded && <span>Training</span>}
        </div>
        <div className="tab">
          <img
            src={require("../icons/settings-automation.png")}
            alt="Automation"
          />
          {expanded && <span>Automation</span>}
        </div>
        <div className="tab">
          <img src={require("../icons/folder.png")} alt="Portfolio" />
          {expanded && <span>Portfolio</span>}
        </div>
        <div className="tab">
          <img
            src={require("../icons/finance-technologies-growth.png")}
            alt="Trading"
          />
          {expanded && <span>Trading</span>}
        </div>
      </div>
      <div className="user-profile">
        <img src={require("../icons/userProfile.png")} alt="Profile" />
        {expanded && <span>User Name</span>}
      </div>
    </div>
  );
};

export default Sidebar;
