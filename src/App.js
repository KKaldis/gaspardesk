import React, { useState, useEffect } from "react";
import "./App.scss";
import Footer from "./Footer";
import Hero from "./Hero";
import NavMenu from "./NavMenu";
import PostCard from "./PostCard";

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      const response = await fetch("www-test.gaspardesk.com/cms/api/articles?populate=*", {
        method: "GET"
      });
      try {
        const json = await response.json();
        setData(json);
        console.log(data);
      }
      catch (error) {
        console.log(error);
      }

    }
    fetchData();
  }, []);


  return (
    <div className="App">
      <div className="App-Layout">
        <NavMenu />
        <Hero />
        <PostCard />
        <Footer />
      </div>
    </div>
  );
}

export default App;
