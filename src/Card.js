import React from "react";
import "./App.css";



function Card({ title, author, url , description}) {
  const sourceIndex = title.lastIndexOf("-");
  const modifiedTitle = title.slice(0, sourceIndex).trim();
  return (
    <div className="Card-main">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "black",
          textDecoration: "none",
          fontSize: "2.2vh",
          fontWeight: "bold",
        }}
      >
        {modifiedTitle}
      </a>
      <h4 style={{ paddingBottom: "1vh" }}>{author}</h4>
      <h4 style={{paddingBottom: "2vh", color: "grey"}} className="description">{description}</h4>
    </div>
  );
}

export default Card;
