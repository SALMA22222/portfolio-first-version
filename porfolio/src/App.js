import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projets from "./components/Projets";
import Newsletter from "./components/Newsletter";
import Skills from "./components/Skills";






function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Hero/>
        <Projets/>
        <Skills/>
        <Newsletter/>
        
      </div>
  
  );
}
export default App
