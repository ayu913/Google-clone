import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";
function Home() {
  return (
    <div className="home">

      <div className="home__header">
        <div className="home__headerLeft">
          {/* Link */}
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
          {/* Link */}
        </div>
        <div className="home__headerRight">
          {/* Link */}
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          {/* Link */}
          {/* Icon */}
          <AppsIcon />
          <Avatar />
          {/* Avatar */}
        </div>
      </div>
      <div className="home__body">
        <img alt="" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
        <div className="home__inputContainer">
          <Search/>
        </div>
      </div>
    </div>
  );
}

export default Home;
