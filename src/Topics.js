import React from "react";
import "./App.css";
import { Link } from "react-router-dom";


function Topics() {
  return (
    <nav>
      <h2 className="sportmilk">sportmilk</h2>
      <div className="nav-items">
        <Link to="/">Feed</Link>
        <h3>Topic</h3>
        <Link to="/Blog">Blog</Link>
        <Link to="/About">About</Link>
      </div>
    </nav>
  );
}

export default Topics;
