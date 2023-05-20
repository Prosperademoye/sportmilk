import React from "react";
import "./App.css";
import { Link } from "react-router-dom";


function Blog() {
  return (
    <nav>
      <h2 className="sportmilk">sportmilk</h2>
      <div className="nav-items">
        <Link to="/">Feed</Link>
        <Link to="/Topics">Topic</Link>
        <h3>Blog</h3>
        <Link to="/About">About</Link>
      </div>
    </nav>
  );
}

export default Blog;
