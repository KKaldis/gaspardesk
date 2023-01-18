import React from "react";
import TagMore from "./TagMore";
import "./Tags.scss";

export const Tags = () => {
  const tags = ["All Posts", "Remote work", "Employee support"];
  return (
    <>
      <div className="tag-search-container">
        <div className="tag-btn-group">
          {tags.map((tag, i) => (
            <div className="tag-btn" key={i}>
              {tag}
            </div>
          ))}
          <TagMore />
        </div>
        <input type="search" placeholder="Start typing..." />
      </div>
      <hr />
    </>
  );
};
