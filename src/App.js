import "./App.scss";
import Footer from "./Footer";
import Hero from "./Hero";
import NavMenu from "./NavMenu";
import PostCard from "./PostCard";

function App() {
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
