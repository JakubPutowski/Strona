import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-blue-500 text-white p-4 shadow-lg z-10">
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="#home" className="hover:text-yellow-300">O NAS</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-300">DANE FIRMOWE</a>
        </li>
        <li>
          <a href="#offer" className="hover:text-yellow-300">OFERTA</a>
        </li>
        <li>
          <a href="#form" className="hover:text-yellow-300">FORMULARZ KONTAKTOWY</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;