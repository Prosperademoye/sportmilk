import React, { useState }  from "react";
import "./App.css";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@mui/material/Button";
import Footer from "./Footer.js"



function Feed() {
    const [email, setEmail] = useState("");


  return (
    <div className="Feed">
      <nav>
        <h2 className="sportmilk">sportmilk</h2>
        <div className="nav-items">
          <h3>Feed</h3>
          <Link to="/Topics">topic</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/About">About</Link>
        </div>
      </nav>

      <div className="feed-body">
        <div className="feed-left">
          <div className="left-content">
            <h1 style={{ color: "red", fontSize: "50px" }}>Keeping up with</h1>
            <h2 style={{ fontSize: "50px" }}>Sports</h2>
            <h4
              style={{
                paddingTop: "3vh",
                fontWeight: "300",
                paddingBottom: "2vh",
              }}
            >
              Get the weekly newsletter keeping thousands of Sport fans in the
              loop.
            </h4>
            <form>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <div>
                <Button
                  variant="contained"
                  style={{ height: "6.5vh", backgroundColor: "black" }}
                  type="email"
                >
                  Try it
                </Button>
              </div>
            </form>

            <h5 style={{ fontWeight: "300", paddingTop: "1vh" }}>
              Unsubscribe anytime, no hard feelings.
            </h5>
          </div>
        </div>
        <div className="feed-right">sf</div>
      </div>
      <Footer />
    </div>
  );
}

export default Feed;
