import React from "react";
import { Link } from "react-router-dom";
import { useSelectedTag } from "../context/ContextProviders";
import { postTagsArray } from "../utils/postTagsArray";
import PostCard from "./PostCard";

export const PostContainer = ({ data }) => {
  const selectedTag = useSelectedTag();

  const fitleredPosts = data.filter((post) =>
    selectedTag === "All Articles"
      ? data
      : postTagsArray(post).includes(selectedTag)
  );

  return (
    <div className="posts-container">
      {fitleredPosts.map((post) => (
        <Link to={`/blog/${post.id}`} key={post.id}>
          <PostCard id={post.id} data={post.attributes} />
        </Link>
      ))}
    </div>
  );
};
