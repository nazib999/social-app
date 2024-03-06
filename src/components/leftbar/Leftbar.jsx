import React from "react";
import "./leftbar.css";
import { Bookmark, Chat, Group, JoinInner, RssFeed, VideoCall } from "@mui/icons-material";
import img from '/assets/person/2.jpeg'
const Leftbar = () => {
  return (
    <div className="leftBar">
      <div className="leftWrapper">
        <ul className="leftItems">
          <li className="leftItem">
            <RssFeed className="leftIcon" />
            <span className="leftText">Feed</span>
          </li>
          <li className="leftItem">
            <RssFeed className="leftIcon" />
            <span className="leftText">Chat</span>
          </li>
          <li className="leftItem">
            <Chat className="leftIcon" />
            <span className="leftText">Video</span>
          </li>
          <li className="leftItem">
            <VideoCall className="leftIcon" />
            <span className="leftText">Videocall</span>
          </li>
          <li className="leftItem">
            <Group className="leftIcon" />
            <span className="leftText">Group</span>
          </li>
          <li className="leftItem">
            <Bookmark className="leftIcon" />
            <span className="leftText">Bookmark</span>
          </li>
          <li className="leftItem">
            <JoinInner className="leftIcon" />
            <span className="leftText">Join</span>
          </li>
        </ul>
        <button className="leftButton">
          Show more
        </button>
        <hr className="leftHr"/>
        <ul className="leftFriend">
          <li className="leftFriendItem">
            <img src={img} alt="" className="friendImg"/>
            <span className="leftName">Jhon doe</span>
          </li>
          <li className="leftFriendItem">
            <img src={img} alt="" className="friendImg"/>
            <span className="leftName">Jhon doe</span>
          </li><li className="leftFriendItem">
            <img src={img} alt="" className="friendImg"/>
            <span className="leftName">Jhon doe</span>
          </li><li className="leftFriendItem">
            <img src={img} alt="" className="friendImg"/>
            <span className="leftName">Jhon doe</span>
          </li><li className="leftFriendItem">
            <img src={img} alt="" className="friendImg"/>
            <span className="leftName">Jhon doe</span>
          </li><li className="leftFriendItem">
            <img src={img} alt="" className="friendImg"/>
            <span className="leftName">Jhon doe</span>
          </li><li className="leftFriendItem">
            <img src={img} alt="" className="friendImg"/>
            <span className="leftName">Jhon doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
