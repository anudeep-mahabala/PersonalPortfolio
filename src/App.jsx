import Navbar from "@/Layout/Navbar.jsx";
import About from "@/section/About.jsx";
import Contact from "@/section/Contact.jsx";
import Experience from "@/section/Experience.jsx";
import Hero from "@/section/Hero.jsx";
import Projects from "@/section/Projects.jsx";
import { Footer } from "@/Layout/Footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
export default App;
