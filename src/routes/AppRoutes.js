import React, { Suspense } from "react";
import Loader from "../components/ui/Loader";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

const AppRoutes = () => {
  const location = useLocation();

  const Landing = React.lazy(() => import("../pages/Landing"));
  const Blog = React.lazy(() => import("../pages/Blog"));

  return (
    <AnimateSharedLayout mode="wait">
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
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
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default AppRoutes;
