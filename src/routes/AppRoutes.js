import React, { Suspense, useEffect, useState } from "react";
import Loader from "../components/ui/Loader";
import { Routes, Route, useLocation } from "react-router-dom";
const AppRoutes = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const Landing = React.lazy(() => import("../pages/Landing"));
  const Blog = React.lazy(() => import("../pages/Blog"));
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location]);

  return (
    <div
      className={`opacity-0 ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
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
    </div>
  );
};

export default AppRoutes;
