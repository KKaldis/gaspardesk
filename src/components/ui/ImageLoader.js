import React, { useEffect, useState } from "react";
import Loader from "./Loader";

export const ImageLoader = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <div style={{ display: isLoading ? "block" : "none" }}>
        <Loader />
      </div>
      <img
        src={url}
        alt="Blog Post Preview"
        onLoad={() => setIsLoading(false)}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  );
};
