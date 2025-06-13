import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Course from "../pages/Course";
import People from "../pages/People";
import ArvinderProfile from "../pages/ArvinderProfile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/people" element={<People />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/course" element={<Course />} />
      <Route path="/faculty/arvinder" element={<ArvinderProfile />} />
    </Routes>
  );
};

export default AppRoutes;
