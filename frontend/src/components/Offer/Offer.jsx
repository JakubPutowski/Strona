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
    slidesToShow: 3, // Domyślnie wyświetla 3 slajdy
    slidesToScroll: 1,
    autoplay: true, // Automatyczne przewijanie
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Na ekranach o szerokości poniżej 1024px
        settings: {
          slidesToShow: 2, // Wyświetla 2 slajdy
        },
      },
      {
        breakpoint: 768, // Na ekranach o szerokości poniżej 768px
        settings: {
          slidesToShow: 1, // Wyświetla 1 slajd
        },
      },
    ],
  };

  return (
    <section
      id="offer"
      className="snap-start h-screen w-full flex flex-col items-center justify-center  bg-[#151924]"
    >
      <div className="container mx-auto px-4">
        {/* Nagłówek */}
        <h2 className="text-4xl font-bold mb-8 text-center text-[#fbbf24] pb-4">
          Nasze Usługi
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {/* Kuchnie */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg">
            <img
              src="./images/Offer/kuchnia.jpg" // Przykładowy obraz kuchni
              alt="Kuchnie"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4 text-center text-[#0f172a]">
              Kuchnie
            </h3>
            <p className="text-center text-gray-700">
              Projektujemy i wykonujemy funkcjonalne kuchnie na wymiar.
            </p>
          </div>

          {/* Szafy wnękowe */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg">
            <img
              src="./images/Offer/szafa_wnekowa.jpg" // Przykładowy obraz szafy wnękowej
              alt="Szafy wnękowe"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4 text-center text-[#0f172a]">
              Szafy wnękowe
            </h3>
            <p className="text-center text-gray-700">
              Tworzymy szafy wnękowe dostosowane do Twojej przestrzeni.
            </p>
          </div>

          {/* Garderoby */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg">
            <img
              src="./images/Offer/garderoba.jpg" // Przykładowy obraz garderoby
              alt="Garderoby"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4 text-center text-[#0f172a]">
              Garderoby
            </h3>
            <p className="text-center text-gray-700">
              Projektujemy garderoby, które spełnią Twoje oczekiwania.
            </p>
          </div>

          {/* Meble łazienkowe */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg">
            <img
              src="./images/Offer/meble_lazienkowe.jpg" // Przykładowy obraz mebli łazienkowych
              alt="Meble łazienkowe"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4 text-center text-[#0f172a]">
              Meble łazienkowe
            </h3>
            <p className="text-center text-gray-700">
              Wykonujemy estetyczne i trwałe meble łazienkowe.
            </p>
          </div>

          {/* Meble biurowe */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg">
            <img
              src="./images/Offer/meble_biurowe.jpg" // Przykładowy obraz mebli biurowych
              alt="Meble biurowe"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4 text-center text-[#0f172a]">
              Meble biurowe
            </h3>
            <p className="text-center text-gray-700">
              Zapewniamy funkcjonalne i eleganckie meble do biur.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Offer;
