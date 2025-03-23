import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Offer from "./components/Offer/Offer";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Sekcje */}
      <section id="home" className="snap-start h-screen">
        <Home />
      </section>
      <section id="contact" className="snap-start h-screen">
        <Contact />
      </section>
      <section id="offer" className="snap-start h-screen">
        <Offer />
      </section>
      <section id="gallery" className="snap-start h-screen">
        <Gallery />
      </section>
    </div>
  );
}
export default App;
