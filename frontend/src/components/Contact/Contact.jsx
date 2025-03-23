import React from "react";
import "./Contact.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md"; // Ikona pineski
import { HiOutlineMail } from "react-icons/hi"; // Ikona koperty

function Contact() {
  return (
    <section
      id="contact"
      className="snap-start h-screen w-full flex items-center justify-center bg-[#151924]  pt-6" // Ciemne tło
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-[90%]">
        {/* Lewa kolumna */}
        <div className="w-full md:w-[40%] space-y-6 text-white bg-[#151924] p-6 rounded-lg shadow-lg">
          {/* Tekst biały */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#fbbf24]">
            Dane firmowe
          </h2>

          {/* Adres */}
          <div>
            <p className="text-lg font-semibold flex items-center space-x-2">
              <MdLocationPin style={{ color: "#fbbf24", fontSize: "1.5rem" }} />
              <span>Adres:</span>
            </p>
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
              className="hover:underline text-[#fbbf24]"
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
            <p className="text-lg font-semibold flex items-center space-x-2">
              <HiOutlineMail style={{ color: "#fbbf24", fontSize: "1.5rem" }} />
              <span>Kontakt:</span>
            </p>
            <div className="flex items-center space-x-2">
              <BsFillTelephoneFill style={{ color: "#fbbf24" }} />
              <a
                href="mailto:info@putowski.pl"
                className="hover:underline text-[#fbbf24]"
              >
                info@putowski.pl
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <BsFillTelephoneFill style={{ color: "#fbbf24" }} />
              <p className="font-bold text-lg text-[#fbbf24]">
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
              className="w-8 h-8 flex items-center justify-center border rounded transition duration-300 hover:bg-[#fbbf24] hover:text-[#151924]"
              style={{
                borderColor: "#fbbf24",
                color: "white",
                backgroundColor: "transparent",
              }}
            >
              <FaFacebookSquare />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/putowskimeble/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border rounded transition duration-300 hover:bg-[#fbbf24] hover:text-[#151924]"
              style={{
                borderColor: "#fbbf24",
                color: "white",
                backgroundColor: "transparent",
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

        {/* Prawa kolumna (ukryta na małych ekranach) */}
        <div className="hidden md:flex w-full md:w-[60%] justify-center mt-8 md:mt-0 h-full">
          {/* Obraz koperty */}
          <img
            src="./images/koperta.jpg" // Upewnij się, że obraz koperty znajduje się w folderze public/images
            alt="Koperta"
            className="max-w-md md:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
export default Contact;
