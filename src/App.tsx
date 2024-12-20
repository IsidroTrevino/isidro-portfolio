import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ParticlesComponent from "./Components/ParticlesComponent";
import Experience from "./Components/Experience";
import React from "react";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-fixed bg-black bg-radial-at-bottom from-purple-800 to-black">
      <ParticlesComponent />
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Experience />
      </div>
    </div>
  );
}

export default App;
