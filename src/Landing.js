import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import TagsSearch from "./components/TagsSearch";
import Loader from "./components/ui/Loader";
import TagsProvider from "./context/ContextProviders";
import { PostContainer } from "./components/PostContainer";

const Landing = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_}/cms/api/articles?populate=*`,
          { method: "GET" }
        );
        const json = await response.json();
        setFetchedData(json);
        // console.log(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const { data, meta } = fetchedData;

  return (
    <>
      <Hero />
      {data ? (
        <div>
          <TagsProvider>
            <TagsSearch data={data} />
            <PostContainer data={data} />
          </TagsProvider>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
