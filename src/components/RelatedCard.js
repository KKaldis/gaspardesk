import React from "react";
import { ImageLoader } from "./ui/ImageLoader";
import next from "../assets/next.svg";

const RelatedCard = ({ data }) => {
  const { imageUrl, title, publishedAt } = data.attributes;
  const date = new Date(publishedAt);
  return (
    <div className="post-related-card">
      <ImageLoader url={imageUrl} />
      <div>
        <div className="post-related-card-date">
          {date.toLocaleDateString()}
        </div>
        <div className="post-related-card-title">{title}</div>
        <div className="post-related-card-more">
          <div>Read Blog Post</div>
          <img src={next} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RelatedCard;
