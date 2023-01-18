import React, { useState, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import "./TagMore.scss";

const TagMore = () => {
  const moreItems = [
    "Automations",
    "Money",
    "Money",
    "Resolution Time",
    "ROI",
    "Tickets",
    "Tag 1",
    "Tag 2",
    "Tag 4",
    "Tag 5",
    "AI Conversation Chatbot",
    "Company Priorities",
  ];
  const [show, setShow] = useState(false);
  const containerRef = useRef();
  useOnClickOutside(containerRef, () => setShow(false));

  return (
    <div
      className={show ? "tag-btn-more-show" : "tag-btn-more"}
      onClick={(e) => {
        e.stopPropagation();
        setShow((x) => !x);
      }}
      id="btn-more-tags"
    >
      +{moreItems.length}
      <div
        ref={containerRef}
        className={show ? "more-container-show" : "more-container"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {moreItems.map((item, i) => (
          <div className="tag-btn" key={i}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagMore;
