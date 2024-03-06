import React from "react";
import "./home.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = () => {
  return (
    <div className="home">
      <Topbar />
      <div className="homeContainer">
        <Leftbar />
        <Feed />
        <div className="lastHome">
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
