import React from "react";
import Header from "./Components/Header";

function App() {
  return (
    <div className="min-h-screen bg-fixed bg-black bg-radial-at-bottom from-purple-800 to-black">
      <Header />
      <div className="pt-16" id="Home">
        <h1 className="text-5xl text-center text-white font-bold">
          Hey! I&apos;m Isidro
        </h1>
      </div>
    </div>
  );
}

export default App;
