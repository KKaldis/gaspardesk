import React from "react";
import "./PostCard.scss";
import ShareSvg from "./assets/ShareSvg";
import next from "./assets/next.svg";
import user from "./assets/user.svg";

const PostCard = ({ data }) => {
  const { imageUrl, title, content, views, minsToRead, publishedAt } = data;
  const date = new Date(publishedAt);
  return (
    <div className="post-card">
      <div className="post-card-img">
        <img src={imageUrl} alt="Blog Post Preview Image" />
      </div>
      <div className="post-card-layout">
        <div className="post-card-space-between">
          <div className="post-card-header">
            <div className="post-card-avatar">
              <img src={user} />
            </div>
            <div>
              <div className="post-card-author">Christos Karafeizis</div>
              <div className="header-details">
                <div>{date.toLocaleDateString()}</div>
                <div className="vl"></div>
                <div>Editor</div>
              </div>
            </div>
          </div>
          <div className="share-btn">
            <ShareSvg />
          </div>
        </div>
        <div className="title">{title}</div>
        <p>{content}</p>
        <div className="post-card-button">Employee support</div>
        <div className="post-card-space-between">
          <div className="botom-row1">
            <div>{views} Views</div>
            <div className="vl"></div>
            <div>{minsToRead} min read</div>
          </div>
          <div className="botom-row2">
            <div>Read Blog Post</div>
            <img src={next} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
