import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">SocialApp</span>
      </div>
      <div className="topbarCenter">
        <div className="searchContainer">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="search for frind,post or video"
            className="inputBox"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className="topLink">Homepage</div>
          </Link>
          <div className="topLink">Timeline</div>
        </div>
        <div className="icons">
          <div className="item">
            <Person />
            <span className="badge">1</span>
          </div>
          <div className="item">
            <Chat />
            <span className="badge">1</span>
          </div>
          <div className="item">
            <Notifications />
            <span className="badge">1</span>
          </div>
        </div>
        <Link to={"/profile"}>
          {" "}
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
