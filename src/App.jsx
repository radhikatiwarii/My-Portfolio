import Navbar from "./components/Navbar";
 import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Background from "./components/Background";

function App() {
  return (
    <div className="bg-[#030014] text-white">
      <Navbar />
      <HeroSection />
      <About />
      <Portfolio />
      <Contact />
      <Background />
    </div>
  );
}

export default App;