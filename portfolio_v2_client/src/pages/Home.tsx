import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Services />
      <Projects />
    </main>
  );
}
