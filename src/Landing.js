import React, { useEffect } from "react";
import Hero from "./components/Hero";
import TagsSearch from "./components/TagsSearch";
import Loader from "./components/ui/Loader";
import { PostContainer } from "./components/PostContainer";
import { useGetContext, useUpdateContext } from "./context/ContextProviders";
import ACTIONS from "./context/actions";

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
  }, []);

  return (
    <>
      <Hero />
      {posts ? (
        <div>
          <TagsSearch />
          <PostContainer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
