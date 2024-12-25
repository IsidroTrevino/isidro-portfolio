import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ParticlesComponent from "./Components/ParticlesComponent";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import WattzOn from "./projects/WattzOn/WattzOn";
import SmartCovers from "./projects/SmartCovers/SmartCovers";
import Awaq from "./projects/Awaq/Awaq";
import Projects from "./Components/Projects";
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen w-full overflow-x-hidden bg-fixed bg-black bg-radial-at-bottom from-purple-800 to-black">
        <ParticlesComponent />
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen pb-10">
                <Header />
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
              </div>
            }
          />
          <Route path="/projects/WattzOn" element={<WattzOn />} />
          <Route path="/projects/SmartCovers" element={<SmartCovers />} />
          <Route path="/projects/Awaq" element={<Awaq />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}

export default App;
