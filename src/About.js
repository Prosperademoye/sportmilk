import { Link } from "react-router-dom";
import React from "react";
import "./App.css";

function About() {
  return (
    <nav>
      <h2 className="sportmilk">sportmilk</h2>
      <div className="nav-items">
        <Link to="/">Feed</Link>
        <Link to="/Topics">Topic</Link>
        <Link to="/Blog">Blog</Link>
        <h3>About</h3>
      </div>
    </nav>
  );
}

export default About;
