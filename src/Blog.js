import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const [fetchedData, setFetchedData] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_}/cms/api/articles/${id}/?populate=*`,
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

  return <div style={{ color: "red " }}>{JSON.stringify(fetchedData)}</div>;
};

export default Blog;
