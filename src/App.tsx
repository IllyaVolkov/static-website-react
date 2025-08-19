import CoreFeatures from "./components/CoreFeatures";
import Expertise from "./components/Expertise";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Feedback from "./components/Feedback";
import Features from "./components/Features";
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
      <Services />
      <CoreFeatures />
      <Features />
      <Team />
      <Expertise />
      <Feedback />
      <Contact />
      <Media />
      <ScrollTop />
      <Footer />
    </div>
  )
}

export default App
