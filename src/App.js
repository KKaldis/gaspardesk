import "./App.scss";
import Footer from "./Footer";
import Hero from "./Hero";
import NavMenu from "./NavMenu";

function App() {
  return (
    <div className="App">
      <div className="App-Layout">
        <NavMenu />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}

export default App;
