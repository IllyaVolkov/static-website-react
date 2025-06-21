import CoreFeatures from "./components/CoreFeatures";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import QualityFeatures from "./components/QualityFeatures";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Feedback from "./components/Feedback";
import Projects from "./components/Projects";
import Media from "./components/Media";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <Navbar />
      <HeroSection />
      <Features />
      <Services />
      <QualityFeatures />
      <CoreFeatures />
      <Projects />
      <Team />
      <Feedback />
      <Contact />
      <Media />
      <ScrollTop />
      <Footer />
    </div>
  )
}

export default App
