import React from "react";
import Navbar from './Navbar'
import Hero from "./Pages/Hero";
import image from './quill.jpeg'
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Scrollup from "./Pages/Scrollup";


function App() {
 

  return (
    <div style={{backgroundImage: `url(${image})` }}>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Scrollup/>
    </div>
    
  );
}

export default App;
