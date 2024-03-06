import React from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import cover from '/assets/post/3.jpeg'
import user from '/assets/person/7.jpeg'

const Profile = () => {
  return (
    <div className="profile">
      <Topbar />
      <div className="profileContainer">
        <div className="leftProfile">
          <Leftbar />
        </div>

        <div className="profileFeed">
          <div className="profileTop">
            <div className="profileCover">
              <img
                src={cover}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={user}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <div className="profileName">John Doe</div>
              <span className="profileDes">Hello my friends!</span>
            </div>
          </div>
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Profile;
