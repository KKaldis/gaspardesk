import React, { Suspense } from "react";
import "./App.scss";
import "./styles/global.scss";
import Footer from "./layout/Footer";
import NavMenu from "./layout/NavMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/ui/Loader";
import ContextProvider from "./context/ContextProviders";

const App = () => {
  const Landing = React.lazy(() => import("./pages/Landing"));
  const Blog = React.lazy(() => import("./pages/Blog"));

  return (
    <Router>
      <ContextProvider>
        <div className="App">
          <div className="App-Layout">
            <NavMenu />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Suspense fallback={<Loader />}>
                    <Landing />
                  </Suspense>
                }
              ></Route>
              <Route
                exact
                path="/blog/:id"
                element={
                  <Suspense fallback={<Loader />}>
                    <Blog />
                  </Suspense>
                }
              ></Route>
            </Routes>
            <Footer />
          </div>
        </div>
      </ContextProvider>
    </Router>
  );
};

export default App;
