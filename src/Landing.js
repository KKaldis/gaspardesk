import React, { useState, useEffect } from "react";
import PostCard from "./components/PostCard";
import Hero from "./components/Hero";
import TagsSearch from "./components/TagsSearch";
import Loader from "./components/ui/Loader";
import { Link } from "react-router-dom";

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
        console.log(json);
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
      <div>
        <TagsSearch />
        <div className="posts-container">
          {data ? (
            data.map((post) => (
              <Link to={`/blog/${post.id}`}>
                <PostCard key={post.id} id={post.id} data={post.attributes} />
              </Link>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default Landing;
