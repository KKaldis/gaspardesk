import React, { useEffect, useState } from "react";
import RelatedCard from "./RelatedCard";
import "./RelatedContainer.scss";
import Loader from "./ui/Loader";

const RelatedContainer = ({ currentPostId }) => {
  const [posts, setPosts] = useState(false);
  console.log(currentPostId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND}/cms/api/articles?populate=*`,
          { method: "GET" }
        );
        const json = await response.json();
        //! remove previewing article from related
        const differentPosts = json.data.filter(
          (post) => String(post.id) !== currentPostId
        );
        setPosts(differentPosts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="post-related-title">Related Articles</div>
      {posts ? (
        <div className="post-realted-container">
          {posts.slice(0, 3).map((post, i) => (
            <RelatedCard key={i} data={post} index={i} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default RelatedContainer;
