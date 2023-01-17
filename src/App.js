import React, { useState, useEffect } from "react";
import "./App.scss";
import Footer from "./Footer";
import Hero from "./Hero";
import Loader from "./Loader";
import NavMenu from "./NavMenu";
import PostCard from "./PostCard";

const App = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www-test.gaspardesk.com/cms/api/articles?populate=*",
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
        {data ? (
          data.map((post) => (
            <PostCard key={post.id} id={post.id} data={post.attributes} />
          ))
        ) : (
          <Loader />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default App;
