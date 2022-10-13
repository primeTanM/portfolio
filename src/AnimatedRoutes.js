import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Blog from "./pages/Blogs/Blog";
import Connect from "./pages/Connect/Connect";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import { useLocation } from "react-router";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/blogs" element={<Blog />} />
        <Route exact path="/contact" element={<Connect />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
