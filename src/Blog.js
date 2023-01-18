import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Back from "./components/ui/Back";

const Blog = () => {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState();

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
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ color: "red " }}>
      <Link to="/">
        <Back />
      </Link>
      <div>{JSON.stringify(fetchedData)}</div>
    </div>
  );
};

export default Blog;
