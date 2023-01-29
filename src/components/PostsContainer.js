import React from "react";
import { Link } from "react-router-dom";
import { useGetContext } from "../context/ContextProviders";
import PostCard from "./PostCard";
import { motion } from "framer-motion";

const PostsContainer = () => {
  const state = useGetContext();
  const { filteredPosts } = state;

  return (
    <div className="posts-container">
      {filteredPosts?.map((post) => (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duraion: 0.5 }}
        >
          <Link to={`/blog/${post.id}`} key={post.id}>
            <PostCard id={post.id} data={post.attributes} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default PostsContainer;
