import About from "../component/about";
import Contact from "../component/Contact";
import Hero from "../component/Hero";
import Project from "../component/Project";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
