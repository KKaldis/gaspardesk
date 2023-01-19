import React from "react";
import { useSelectedTag, useSetSelectedTag } from "../context/ContextProviders";
import TagMore from "./TagMore";

const TagsSearch = ({ data }) => {
  const selectedTags = useSelectedTag();
  const setSelectedTag = useSetSelectedTag();
  console.log(selectedTags);
  const tags = data?.reduce((accu, curr) => {
    const postTagsArray = curr.attributes.tags.data.reduce(
      (accuPostTags, currPostTags) => [
        ...accuPostTags,
        currPostTags.attributes.name,
      ],
      []
    );
    //check if item exists to master array and return if not
    const uniqueArrays = postTagsArray.filter((tag) => !accu.includes(tag));
    // spread accumulator + non existant tags
    return [...accu, ...uniqueArrays];
  }, []);

  const mainTags = tags.slice(0, 2);
  const moreTags = tags.slice(2);

  return (
    <>
      <div className="tag-search-container">
        <div className="tag-btn-group">
          <div className="tag-btn">All Articles</div>
          {mainTags.map((tag, i) => (
            <div
              className="tag-btn"
              key={i}
              onClick={() => setSelectedTag(tag)}
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
