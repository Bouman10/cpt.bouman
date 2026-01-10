import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <>
        <Hero />
        <Projects />
        <About />
        <Contact />
    </>
  );
}