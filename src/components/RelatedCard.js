import React from "react";
import { ImageLoader } from "./ui/ImageLoader";
import next from "../assets/next.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RelatedCard = ({ data, index }) => {
  const { imageUrl, title, publishedAt } = data.attributes;
  const { id } = data;
  const date = new Date(publishedAt);
  const animDirection = [{ x: -100 }, { y: 100 }, { x: 100 }];

  return (
    <motion.div
      className=" post-related-card"
      initial={{ opacity: 0, ...animDirection[index] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duraion: 0.5, delay: 0.25 }}
    >
      <Link to={`/blog/${id}/`}>
        <ImageLoader url={imageUrl} imgClass="post-related-card-img " />
        <div>
          <div className="post-related-card-date">
            {date.toLocaleDateString()}
          </div>
          <div className="post-related-card-title">{title}</div>
          <div className="post-related-card-more">
            <div>Read Blog Post</div>
            <img src={next} alt="" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RelatedCard;
