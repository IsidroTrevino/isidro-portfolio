import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ParticlesComponent from "./Components/ParticlesComponent";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Portfolio from "./projects/portfolio/Portfolio";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
              </div>
            }
          />
          <Route path="/projects/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
