import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import React from "react";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className="shareImg" />
          <input
            type="text"
            placeholder="What's in your mind?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label className="shareIcon" />
              <span className="shareOptionText">Tags</span>
            </div>
            <div className="shareOption">
              <Room className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions className="shareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <div className="shareButton">share</div>
        </div>
      </div>
    </div>
  );
};

export default Share;
