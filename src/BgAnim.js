import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BgAnim = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const width = window.innerWidth;
  const height = window.innerHeight;
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  console.log(mousePosition.x);

  const boxStyle = {
    // border: "solid 0.05rem var(--primary-opacity)",
    height: "2rem",
    width: "2rem",
    borderRadius: "0.5rem 0.5rem 0.5rem 0rem",
    boxShadow: "inset 0px 0px 0.25rem var(--secondary)",
  };

  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        left: 0,
        top: 0,
      }}
    >
      <motion.div
        animate={{
          x: width - mousePosition.x,
          y: height - mousePosition.y,
          scale: 1 + 0.5 * (mousePosition.y / height),
          rotate: height - mousePosition.x + width - mousePosition.y,
          filter: `hue-rotate(${
            (height - mousePosition.x + width - mousePosition.y) * 0.1
          }deg)`,
        }}
        transition={{ type: "spring", damping: 30 }}
        style={boxStyle}
      />

      <motion.div
        animate={{
          x: height - mousePosition.y,
          y: width - mousePosition.x,
          scale: 1 + 0.5 * (mousePosition.x / width),
          rotate: height - mousePosition.y,
          filter: `hue-rotate(${height - mousePosition.y}deg)`,
        }}
        transition={{ type: "spring", damping: 30 }}
        style={boxStyle}
      />

      <motion.div
        animate={{
          x: width - mousePosition.y,
          y: height - mousePosition.x,
          scale: 1 + 0.5 * (mousePosition.x / width),
          rotate: width - mousePosition.x,
          filter: `hue-rotate(${width - mousePosition.x}deg)`,
        }}
        transition={{ type: "spring", damping: 30 }}
        style={boxStyle}
      />
    </div>
  );
};

export default BgAnim;
