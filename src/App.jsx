import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Langages from "./components/Langages";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CarouselActifAuto from "./components/CarouselActifAuto";
import Formation from "./components/Formation";
import Aproposdemoi from "./components/Aproposdemoi";
import CV from "./components/MonCV";

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text overflow-x-hidden">
      <Navbar />
      <Hero />
      <Aproposdemoi />
      <Langages />
      <CarouselActifAuto />
      <Projets />
      <Formation />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
