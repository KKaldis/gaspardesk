import "./App.scss";
import Hero from "./Hero";
import NavMenu from "./NavMenu";
function App() {
  return (
    <div className="App">
      <div className="App-Layout">
        <NavMenu />
        <Hero />
      </div>
    </div>
  );
}

export default App;
