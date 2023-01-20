import React from "react";
import "./PostCard.scss";
import next from "../assets/next.svg";
import Share from "./ui/Share";
import { ImageLoader } from "./ui/ImageLoader";
import UserIcon from "./ui/UserIcon";

const PostCard = ({ data }) => {
  const { imageUrl, title, content, views, minsToRead, publishedAt } = data;
  const date = new Date(publishedAt);
  return (
    <div className="post-card">
      <div className="post-card-img">
        <ImageLoader url={imageUrl} />
      </div>
      <div className="post-card-layout">
        <div className="post-card-space-between">
          <div className="post-card-header">
            <UserIcon />
            <div>
              <div className="post-card-author">Christos Karafeizis</div>
              <div className="header-details">
                <div>{date.toLocaleDateString()}</div>
                <div className="vl"></div>
                <div>Editor</div>
              </div>
            </div>
          </div>
          <Share />
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
            <img src={next} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
