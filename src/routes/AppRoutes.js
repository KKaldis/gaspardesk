import React, { Suspense } from "react";
import Loader from "../components/ui/Loader";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AppRoutes = () => {
  const Landing = React.lazy(() => import("../pages/Landing"));
  const Blog = React.lazy(() => import("../pages/Blog"));
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
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
  );
};

export default AppRoutes;
