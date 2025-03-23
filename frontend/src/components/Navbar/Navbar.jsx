import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Stan do kontrolowania widoczności menu

  return (
    <nav className="fixed top-0 left-0 right-0 w-full h-16 p-4 shadow-lg z-10 border-b bg-[#151924] text-[#ede9fe] flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center h-full">
        <img
          src="./images/logo.jpg"
          alt="Logo"
          className="h-full w-auto" // H: pełna wysokość navbaru, W: proporcjonalna szerokość
        />
      </div>

      {/* Hamburger menu dla urządzeń mobilnych */}
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

      {/* Menu nawigacyjne */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row justify-center items-center absolute md:static top-16 left-0 w-full md:w-auto bg-[#151924] md:bg-transparent space-y-4 md:space-y-0 md:space-x-8`}
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
