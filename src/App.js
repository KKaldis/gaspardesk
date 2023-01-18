import React, { useState, useEffect } from "react";
import "./App.scss";
import Footer from "./layout/Footer";
import Hero from "./components/Hero";
import Loader from "./components/ui/Loader";
import NavMenu from "./layout/NavMenu";
import PostCard from "./components/PostCard";
import Tags from "./components/TagsSearch";

const App = () => {
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
    <div className="App">
      <div className="App-Layout">
        <NavMenu />
        <Hero />
        <div>
          <Tags />
          <div className="posts-container">
            {data ? (
              data.map((post) => (
                <PostCard key={post.id} id={post.id} data={post.attributes} />
              ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
