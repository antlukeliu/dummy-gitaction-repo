import React from "react";
import logo from "../../assets/images/logo.svg";

export default function CommunityResources() {
  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
      <p>
        Edit <code>src/views/CommunityResources/CommunityResources.js</code> and
        save to reload.
      </p>
      <a
        className="link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}
