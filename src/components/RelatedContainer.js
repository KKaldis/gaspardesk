import React, { useEffect, useState } from "react";
import RelatedCard from "./RelatedCard";
import "./RelatedContainer.scss";
import Loader from "./ui/Loader";

const RelatedContainer = ({ currentPostId }) => {
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_}/cms/api/articles?populate=*`,
          { method: "GET" }
        );
        const json = await response.json();
        setPosts(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const { data } = posts;

  return (
    <div>
      <div className="post-related-title">Related Articles</div>
      {posts ? (
        <div className="post-realted-container">
          {data.filter((post) => post.id !== currentPostId).slice(0, 3).map((post, i) => (
            <RelatedCard key={i} data={post} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default RelatedContainer;
