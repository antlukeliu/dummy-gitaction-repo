import React from "react";
import { Link } from "react-router-dom";
import "./TopNav.scss";

export default function TopNav() {
  return (
    <div className="top-nav">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signup">Get Help</Link>
        </li>
        <li>
          <Link to="/signup">Give Help</Link>
        </li>
        <li>
          <Link to="/community-resources">Resources</Link>
        </li>
      </ul>
    </div>
  );
}
