import React, { useState } from "react";
import Loader from "./Loader";

export const ImageLoader = ({ url, imgClass }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div style={{ display: isLoading ? "block" : "none" }}>
        <Loader />
      </div>
      <img
        src={url}
        className={imgClass}
        alt="Blog Post Preview"
        onLoad={() => setIsLoading(false)}
        style={{ display: isLoading ? "none" : "block" }}
        width={"100%"}
      />
    </>
  );
};
