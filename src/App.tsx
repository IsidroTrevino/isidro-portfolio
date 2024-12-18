import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-fixed bg-black bg-radial-at-bottom from-purple-800 to-black">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
