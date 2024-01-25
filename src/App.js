import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import image from './quill.jpeg'
import About from "./Pages/About";
import Projects from "./Pages/Projects";


function App() {
 

  return (
    <div style={{backgroundImage: `url(${image})` }}>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
    </div>
    
  );
}

export default App;
