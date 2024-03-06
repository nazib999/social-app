import React from "react";
import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightBar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" className="birthdayImg" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img src="assets/ad.png" className="rightbarAd" alt="" />
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightOnline"></span>
            </div>
            <div className="rightbarUsername">John Carter</div>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightOnline"></span>
            </div>
            <div className="rightbarUsername">John Carter</div>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightOnline"></span>
            </div>
            <div className="rightbarUsername">John Carter</div>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightOnline"></span>
            </div>
            <div className="rightbarUsername">John Carter</div>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightOnline"></span>
            </div>
            <div className="rightbarUsername">John Carter</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
