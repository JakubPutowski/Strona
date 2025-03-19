import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full p-4 shadow-lg z-10 border-"
      style={{
        backgroundColor: "#0f172a",
        color: "#ede9fe",
        borderBottom: "1px solid #fbbf24",
      }} // Ciemne tło i biały tekst
    >
      <ul className="flex justify-center space-x-4">
        <li>
          <a
            href="#home"
            className="hover:underline"
            style={{
              color: "#ede9fe", // Biały kolor tekstu
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#fbbf24")} // Żółty kolor na hover
            onMouseOut={(e) => (e.target.style.color = "#ede9fe")} // Powrót do białego koloru
          >
            O NAS
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:underline"
            style={{
              color: "#ede9fe", // Biały kolor tekstu
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#fbbf24")} // Żółty kolor na hover
            onMouseOut={(e) => (e.target.style.color = "#ede9fe")} // Powrót do białego koloru
          >
            DANE FIRMOWE
          </a>
        </li>
        <li>
          <a
            href="#offer"
            className="hover:underline"
            style={{
              color: "#ede9fe", // Biały kolor tekstu
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#fbbf24")} // Żółty kolor na hover
            onMouseOut={(e) => (e.target.style.color = "#ede9fe")} // Powrót do białego koloru
          >
            OFERTA
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            className="hover:underline"
            style={{
              color: "#ede9fe", // Biały kolor tekstu
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#fbbf24")} // Żółty kolor na hover
            onMouseOut={(e) => (e.target.style.color = "#ede9fe")} // Powrót do białego koloru
          >
            NASZE REALIZACJE
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
