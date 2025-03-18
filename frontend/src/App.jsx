import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Offer from "./components/Offer/Offer";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth ">
      {/* Navbar */}
      <Navbar />

      {/* Sekcje */}
      <Home />
      <Contact />
      <Offer />
      <Form />
    </div>
  );
}

export default App;
