import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Stan do kontrolowania widoczności menu

  return (
    <nav className="fixed top-0 left-0 right-0 w-full p-4 shadow-lg z-10 border-b bg-[#151924] text-[#ede9fe]">
      {/* Hamburger menu dla urządzeń mobilnych */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">
          <img src="./favicon.ico" alt="Ikona"></img>
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#ede9fe] focus:outline-none"
        >
          {/* Ikona hamburgera */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Menu nawigacyjne */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex justify-center space-x-4 mt-4 md:mt-0 md:space-x-8`}
      >
        <li>
          <a
            href="#home"
            className="hover:underline text-sm md:text-base"
            style={{
              color: "#ede9fe",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#fbbf24")}
            onMouseOut={(e) => (e.target.style.color = "#ede9fe")}
          >
            O NAS
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:underline text-sm md:text-base"
            style={{
              color: "#ede9fe",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#fbbf24")}
            onMouseOut={(e) => (e.target.style.color = "#ede9fe")}
          >
            DANE FIRMOWE
          </a>
        </li>
        <li>
          <a
            href="#offer"
            className="hover:underline text-sm md:text-base"
            style={{
              color: "#ede9fe",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#fbbf24")}
            onMouseOut={(e) => (e.target.style.color = "#ede9fe")}
          >
            OFERTA
          </a>
        </li>
        <li>
          <a
            href="#gallery"
            className="hover:underline text-sm md:text-base"
            style={{
              color: "#ede9fe",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#fbbf24")}
            onMouseOut={(e) => (e.target.style.color = "#ede9fe")}
          >
            NASZE REALIZACJE
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
