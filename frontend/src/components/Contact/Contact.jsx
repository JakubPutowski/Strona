import React from "react";
import "./Contact.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contact() {
  return (
    <section
      id="contact"
      className="snap-start h-screen w-full flex items-center justify-center"
      style={{ backgroundColor: "#151924" }} // Ciemny kolor jako główne tło
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Lewa kolumna */}
        <div className="w-full md:w-[40%] space-y-6 text-white bg-[#151924] p-6 rounded-lg shadow-lg">
          {" "}
          {/* Tekst biały */}
          <h2 className="text-4xl font-bold" style={{ color: "#fbbf24" }}>
            {" "}
            {/* Żółty kolor */}
            Dane firmowe
          </h2>
          {/* Adres */}
          <div>
            <p className="text-lg font-semibold">Adres:</p>
            <p>Partyzantów 68a</p>
            <p>28-300 Jędrzejów</p>
          </div>
          {/* Adres WWW */}
          <div>
            <p className="text-lg font-semibold">Adres WWW:</p>
            <a
              href="https://www.putowski.pl"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fbbf24" }} // Żółty kolor linku
              className="hover:underline"
            >
              www.putowski.pl
            </a>
          </div>
          {/* NIP */}
          <div>
            <p className="text-lg font-semibold">NIP:</p>
            <p>6562336837</p>
          </div>
          {/* Email i numer telefonu */}
          <div>
            <p className="text-lg font-semibold">Kontakt:</p>
            <div className="flex items-center space-x-2">
              <BsFillTelephoneFill style={{ color: "#fbbf24" }} />
              <a
                href="mailto:info@putowski.pl"
                style={{ color: "#fbbf24" }}
                className="hover:underline"
              >
                info@putowski.pl
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <BsFillTelephoneFill style={{ color: "#fbbf24" }} />
              <p style={{ color: "#fbbf24" }} className="font-bold text-lg">
                888-201-504, 888-201-505
              </p>
            </div>
          </div>
          {/* Ikony social media */}
          <div className="flex space-x-4 mt-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/PutowskiMeblesc/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border rounded transition duration-300"
              style={{
                borderColor: "#fbbf24", // Żółty kolor obramowania
                color: "white",
                backgroundColor: "transparent",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#fbbf24";
                e.target.style.color = "#0f172a"; // Ciemny kolor tekstu na hover
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "white";
              }}
            >
              <FaFacebookSquare />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/putowskimeble/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border rounded transition duration-300"
              style={{
                borderColor: "#fbbf24", // Żółty kolor obramowania
                color: "white",
                backgroundColor: "transparent",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#fbbf24";
                e.target.style.color = "#0f172a"; // Ciemny kolor tekstu na hover
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "white";
              }}
            >
              <FaInstagram />
            </a>
          </div>
          {/* Miejsce prowadzenia działalności */}
          <div className="mt-6">
            <p className="text-lg font-semibold">
              Miejsce prowadzenia działalności:
            </p>
            <p>Putowski Meble s.c.</p>
            <p>Adres: Strażacka 5</p>
            <p>28-300 Jędrzejów</p>
          </div>
        </div>

        {/* Prawa kolumna */}
        <div className="w-full md:w-[60%] flex justify-left mt-8 md:mt-0">
          {/* Obraz koperty */}
          <img
            src="./images/koperta.jpg" // Upewnij się, że obraz koperty znajduje się w folderze public/images
            alt="Koperta"
            className="max-w-md md:max-w-lg object-contain"
            style={{ marginLeft: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
