import React from "react";
import "./App.scss";
import "./styles/global.scss";
import Footer from "./layout/Footer";
import NavMenu from "./layout/NavMenu";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./context/ContextProviders";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <div className="App">
          <div className="App-Layout">
            <NavMenu />
            <AppRoutes />
            <Footer />
          </div>
        </div>
      </ContextProvider>
    </Router>
  );
};

export default App;
