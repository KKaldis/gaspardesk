import React from "react";
import { Link } from "react-router-dom";
import { useGetContext } from "../context/ContextProviders";
import PostCard from "./PostCard";
import { motion } from "framer-motion";

const PostsContainer = () => {
  const state = useGetContext();
  const { filteredPosts } = state;

  return (
    <motion.div layout className="posts-container">
      {filteredPosts?.map((post) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          layoutId={post.id}
        >
          <Link to={`/blog/${post.id}`}>
            <PostCard id={post.id} data={post.attributes} />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PostsContainer;
