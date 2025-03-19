import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Offer.css";

function Offer() {
  // Ustawienia slidera
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Liczba widocznych zdjęć
    slidesToScroll: 1,
    autoplay: true, // Automatyczne przewijanie
    autoplaySpeed: 3000,
  };

  return (
    <section
      id="offer"
      className="snap-start h-screen w-full flex flex-col items-center justify-center"
      style={{ backgroundColor: "#0f172a" }} // Ciemne tło
    >
      <div className="container mx-auto px-4">
        {/* Nagłówek */}
        <h2
          className="text-4xl font-bold mb-8 text-center"
          style={{ color: "#fbbf24" }} // Żółty kolor nagłówka
        >
          Nasze Usługi
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {/* Kuchnie */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg">
            <img
              src="/src/assets/kuchnia.jpg" // Przykładowy obraz kuchni
              alt="Kuchnie"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3
              className="text-xl font-bold mt-4 text-center"
              style={{ color: "#0f172a" }}
            >
              Kuchnie
            </h3>
            <p className="text-center text-gray-700">
              Projektujemy i wykonujemy funkcjonalne kuchnie na wymiar.
            </p>
          </div>

          {/* Szafy wnękowe */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg">
            <img
              src="/src/assets/wardrobe.jpg" // Przykładowy obraz szafy wnękowej
              alt="Szafy wnękowe"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4" style={{ color: "#0f172a" }}>
              Szafy wnękowe
            </h3>
            <p className="text-center text-gray-700">
              Tworzymy szafy wnękowe dostosowane do Twojej przestrzeni.
            </p>
          </div>

          {/* Garderoby */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg">
            <img
              src="/src/assets/closet.jpg" // Przykładowy obraz garderoby
              alt="Garderoby"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4" style={{ color: "#0f172a" }}>
              Garderoby
            </h3>
            <p className="text-center text-gray-700">
              Projektujemy garderoby, które spełnią Twoje oczekiwania.
            </p>
          </div>

          {/* Meble łazienkowe */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg">
            <img
              src="/src/assets/bathroom.jpg" // Przykładowy obraz mebli łazienkowych
              alt="Meble łazienkowe"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4" style={{ color: "#0f172a" }}>
              Meble łazienkowe
            </h3>
            <p className="text-center text-gray-700">
              Wykonujemy estetyczne i trwałe meble łazienkowe.
            </p>
          </div>

          {/* Meble biurowe */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg">
            <img
              src="/src/assets/office.jpg" // Przykładowy obraz mebli biurowych
              alt="Meble biurowe"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4" style={{ color: "#0f172a" }}>
              Meble biurowe
            </h3>
            <p className="text-center text-gray-700">
              Zapewniamy funkcjonalne i eleganckie meble do biur.
            </p>
          </div>

          {/* Zabudowy sypialni */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg">
            <img
              src="/src/assets/bedroom.jpg" // Przykładowy obraz zabudowy sypialni
              alt="Zabudowy sypialni"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4" style={{ color: "#0f172a" }}>
              Zabudowy sypialni
            </h3>
            <p className="text-center text-gray-700">
              Wykonujemy zabudowy sypialni dopasowane do Twoich potrzeb.
            </p>
          </div>

          {/* Inne meble na wymiar */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg">
            <img
              src="/src/assets/custom.jpg" // Przykładowy obraz niestandardowych mebli
              alt="Meble na wymiar"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4" style={{ color: "#0f172a" }}>
              Meble na wymiar
            </h3>
            <p className="text-center text-gray-700">
              Realizujemy wszystkie inne projekty mebli na wymiar.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Offer;
