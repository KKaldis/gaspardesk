import React, { useState, useRef } from "react";
import ACTIONS from "../context/actions";
import { useGetContext, useUpdateContext } from "../context/ContextProviders";
import useOnClickOutside from "../hooks/useOnClickOutside";
import "./TagMore.scss";

const TagMore = ({ tags }) => {
  const selectedTag = useGetContext();
  const updateContext = useUpdateContext();
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
      +{tags.length}
      <div
        ref={containerRef}
        className={show ? "more-container-show" : "more-container"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {tags.map((tag, i) => (
          <div
            className={selectedTag === tag ? "tag-btn-selected" : "tag-btn"}
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              updateContext({ type: ACTIONS.SET_SELECTED_TAG, payload: tag });
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagMore;
