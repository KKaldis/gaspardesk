import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Back from "../components/ui/Back";
import Share from "../components/ui/Share";
import "./Blog.scss";
import Loader from "../components/ui/Loader";
import UserIcon from "../components/ui/UserIcon";
import { ImageLoader } from "../components/ui/ImageLoader";
import RelatedContainer from "../components/RelatedContainer";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  pageTransitions,
  transitionVariants,
} from "../components/ui/animationVariants";

const Blog = () => {
  const [fetchedData, setFetchedData] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setFetchedData(false);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND}/cms/api/articles/${id}/?populate=*`,
          { method: "GET" }
        );
        const json = await response.json();
        setFetchedData(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [id]);

  const date = new Date(fetchedData?.data?.attributes?.publishedAt);
  return (
    <>
      {fetchedData ? (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={transitionVariants}
          transition={pageTransitions}
        >
          <div className="blog-head-nav">
            <Back to={"/"} />
            <div className="blog-breadcrumbs">
              {"Blog "}
              <span>/Blog Post</span>
            </div>
          </div>
          <div className="blog-post-title">
            {fetchedData?.data?.attributes?.title}
          </div>
          <div className="blog-head-wrapper">
            <div>
              <UserIcon />
              <div className="post-info-wrapper">
                <div>
                  <span>Christos Karafeizis</span>
                  <div className="vl"></div>
                  <span> {date?.toLocaleDateString()}</span>
                  <div className="vl"></div>
                  <span>Editor</span>
                </div>
                <div>
                  <span>{fetchedData?.data?.attributes.views}</span>
                  <span> Views</span>
                  <div className="vl"></div>
                  <span> {fetchedData?.data?.attributes.minsToRead}</span>
                  <span>mins read</span>
                </div>
              </div>
            </div>
            <Share />
          </div>
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={transitionVariants}
            transition={pageTransitions}
            className="post-content-wrapper"
          >
            <ImageLoader url={fetchedData?.data?.attributes.imageUrl} />
            <div>
              <ReactMarkdown
                children={fetchedData?.data?.attributes.content}
                remarkPlugins={[remarkGfm]}
              />
            </div>
          </motion.div>
          <RelatedContainer currentPostId={id} />
        </motion.div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Blog;
