import React, { useEffect } from "react";
import Hero from "../components/Hero";
import TagsSearch from "../components/TagsSearch";
import Loader from "../components/ui/Loader";
import PostsContainer from "../components/PostsContainer";
import { useGetContext, useUpdateContext } from "../context/ContextProviders";
import ACTIONS from "../context/actions";
import Pagination from "../components/ui/Pagination";
import { motion } from "framer-motion";
import {
  pageTransitions,
  transitionVariants,
} from "../components/ui/animationVariants";

const Landing = () => {
  const state = useGetContext();
  const updateContext = useUpdateContext();
  const { posts } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_}/cms/api/articles?populate=*`,
          { method: "GET" }
        );
        const json = await response.json();
        updateContext({ type: ACTIONS.SET_FETCHED_POSTS, payload: json });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      key="landing2"
      variants={transitionVariants}
      transition={pageTransitions}
    >
      <Hero />
      {posts ? (
        <>
          <TagsSearch />
          <PostsContainer />
          <Pagination />
        </>
      ) : (
        <Loader />
      )}
    </motion.div>
  );
};

export default Landing;
