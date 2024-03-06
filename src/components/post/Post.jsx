import { MoreVert } from "@mui/icons-material";
import React, { useState } from "react";
import "./post.css";
import profile from '/assets/person/1.jpeg'

const Post = () => {
  const [like, setLike] = useState(30);
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={profile}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">John Doe</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! its my first post:</span>
          <img src="assets/post/1.jpeg" className="postImg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="assets/like.png"
              className="likeIcon"
              alt=""
              onClick={handleLike}
            />
            <img src="assets/heart.png" className="likeIcon" alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">9 comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
