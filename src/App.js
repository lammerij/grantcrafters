import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import image from './quill.jpeg'
import About from "./Pages/About";


function App() {
 

  return (
    <div style={{backgroundImage: `url(${image})` }}>
      <Navbar />
      <Hero />
      <About/>
    </div>
    
  );
}

export default App;
