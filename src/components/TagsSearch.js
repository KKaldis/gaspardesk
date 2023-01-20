import React, { useEffect } from "react";
import ACTIONS from "../context/actions";
import { useGetContext, useUpdateContext } from "../context/ContextProviders";
import TagMore from "./TagMore";

const TagsSearch = () => {
  const state = useGetContext();
  const updateContext = useUpdateContext();
  const { selectedTag, mainTags, moreTags } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_}/cms/api/tags/`,
          { method: "GET" }
        );
        const json = await response.json();
        const { data } = json;
        updateContext({ type: ACTIONS.SET_TAGS, payload: data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="tag-search-container">
        <div className="tag-btn-group">
          {mainTags.map((tag, i) => (
            <div
              className={selectedTag === tag ? "tag-btn-selected" : "tag-btn"}
              key={i}
              onClick={() =>
                updateContext({ type: ACTIONS.SET_SELECTED_TAG, payload: tag })
              }
            >
              {tag}
            </div>
          ))}
          <TagMore tags={moreTags} />
        </div>
        <input type="search" placeholder="Start typing..." />
      </div>
      <hr />
    </>
  );
};

export default TagsSearch;
