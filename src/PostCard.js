import React from "react";
import "./PostCard.scss";
import img from "./assets/post-placeholder.png";
import ShareSvg from "./assets/ShareSvg";
import next from "./assets/next.svg";
import user from "./assets/user.svg";

const PostCard = () => {
  return (
    <div className="post-card">
      <div className="post-card-img">
        <img src={img} alt="Blog Post Preview Image" />
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
                <div>11/11/2022</div>
                <div className="vl"></div>
                <div>Editor</div>
              </div>
            </div>
          </div>
          <div className="share-btn">
            <ShareSvg />
          </div>
        </div>
        <div className="title">
          Is self-service password reset secure: what you need to know and how
          to do it right
        </div>
        <p>
          Considering that 20% to 50% of all IT helpdesk tickets each year are
          for password resets according to the Gartner Group, and that they
          consume 31% to 40% of your team’s time, you probably feel that all you
          do is reset passwords! This is why you are probably looking into
          solutions that would enable you to minimize these requests to the
          absolutely inevitable ones.
        </p>
        <div className="post-card-button">Employee support</div>
        <div className="post-card-space-between">
          <div className="botom-row1">
            <div>11 Views</div>
            <div className="vl"></div>
            <div>4 min read</div>
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
