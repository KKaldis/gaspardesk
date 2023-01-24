import React from "react";
import { Link } from "react-router-dom";
import { useGetContext } from "../context/ContextProviders";
import PostCard from "./PostCard";

const PostsContainer = () => {
  const state = useGetContext();
  const { filteredPosts } = state;

  return (
    <div className="posts-container">
      {filteredPosts?.map((post) => (
        <Link to={`/blog/${post.id}`} key={post.id}>
          <PostCard id={post.id} data={post.attributes} />
        </Link>
      ))}
    </div>
  );
};

export default PostsContainer;
