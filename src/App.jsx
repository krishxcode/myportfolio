import { Route, Routes } from "react-router-dom";
import "./App.css";

import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Project from "./component/Project";
import About from "./component/about";
import Home from "./Home/Home";
import Resume from "./component/Resume";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
