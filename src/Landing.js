import React, { useState, useEffect, useContext } from "react";
import PostCard from "./components/PostCard";
import Hero from "./components/Hero";
import TagsSearch from "./components/TagsSearch";
import Loader from "./components/ui/Loader";
import { Link } from "react-router-dom";
import TagsProvider, { useSelectedTag } from "./context/ContextProviders";

const Landing = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const selectedTags = useSelectedTag();

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
            <div className="posts-container">
              {data.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id}>
                  <PostCard id={post.id} data={post.attributes} />
                </Link>
              ))}
            </div>
          </TagsProvider>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
