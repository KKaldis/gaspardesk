import React from "react";
import "./Tags.scss";
export const Tags = () => {
  return (
    <>
      <div className="tag-search-container">
        <div className="tag-btn-group">
          <div className="tag-btn" active={true}>
            All Posts
          </div>
          <div className="tag-btn" active={false}>
            Remote work
          </div>
          <div className="tag-btn" active={false}>
            Employee support
          </div>
        </div>
        <input type="search" placeholder="Start typing..." />
      </div>
      <hr />
    </>
  );
};
