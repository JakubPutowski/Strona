import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Offer() {
  // Ustawienia slidera
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="offer"
      className="snap-start h-screen w-full flex flex-col items-center justify-center bg-[#151924]"
    >
      <div className="container mx-auto px-4 md:w-[90%] lg:w-[80%] w-[95%]">
        {/* Nagłówek */}
        <h2 className="text-4xl font-bold mb-8 text-center text-[#fbbf24] pb-4">
          Nasze Usługi
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {/* Kuchnie */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg h-[400px]">
            <img
              src="./images/Offer/kuchnia.jpg"
              alt="Kuchnie"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4 text-center text-[#0f172a]">
              Kuchnie
            </h3>
            <p className="text-center text-gray-700">
              Projektujemy i wykonujemy funkcjonalne kuchnie na wymiar.
            </p>
          </div>

          {/* Szafy wnękowe */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg h-[400px]">
            <img
              src="./images/Offer/szafa_wnekowa.jpg"
              alt="Szafy wnękowe"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4 text-center text-[#0f172a]">
              Szafy wnękowe
            </h3>
            <p className="text-center text-gray-700">
              Tworzymy szafy wnękowe dostosowane do Twojej przestrzeni.
            </p>
          </div>

          {/* Garderoby */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg h-[400px]">
            <img
              src="./images/Offer/garderoba.jpg"
              alt="Garderoby"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4 text-center text-[#0f172a]">
              Garderoby
            </h3>
            <p className="text-center text-gray-700">
              Projektujemy garderoby, które spełnią Twoje oczekiwania.
            </p>
          </div>

          {/* Meble łazienkowe */}
          <div className="flex flex-col items-center bg-[#ede9fe] p-6 rounded-lg shadow-lg h-[400px]">
            <img
              src="./images/Offer/meble_lazienkowe.jpg"
              alt="Meble łazienkowe"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4 text-center text-[#0f172a]">
              Meble łazienkowe
            </h3>
            <p className="text-center text-gray-700">
              Wykonujemy estetyczne i trwałe meble łazienkowe.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Offer;
