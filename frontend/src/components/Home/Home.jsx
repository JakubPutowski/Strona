import React from "react";
import "./Home.css";

function Home() {
  return (
    <section
      id="home"
      className="snap-start h-screen w-full flex items-center justify-center"
      style={{ backgroundColor: "#0f172a" }} // Ciemny kolor jako główne tło
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between w-[90%] max-w-[1400px] mx-auto"
        style={{ height: "80%" }}
      >
        {/* Tekst po lewej stronie */}
        <div
          className="w-full md:w-[45%] text-center"
          style={{
            marginTop: "-8%", // Podniesienie tekstu wyżej
            color: "#ede9fe", // Biały kolor tekstu
          }}
        >
          <h2
            className="text-4xl font-bold mb-6 leading-tight"
            style={{ color: "#fbbf24" }} // Żółty kolor nagłówka
          >
            Krótka historia firmy
          </h2>
          <p className="text-lg leading-relaxed">
            Nasza firma została założona w 1959 roku z pasji. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>

        {/* Separator */}
        <div
          className="hidden md:block mx-6"
          style={{
            width: "3px",
            backgroundColor: "#fbbf24", // Żółty kolor separatora
            height: "calc(100% - 20px)", // Wysokość linii z marginesem
            transform: "rotate(10deg)", // Obrót linii pod kątem -10 stopni
            transformOrigin: "center", // Punkt obrotu (środek elementu)
          }}
        ></div>

        {/* Zdjęcie po prawej stronie */}
        <div className="w-full md:w-[50%] flex justify-center relative">
          <img
            src="public/images/home-image.jpg"
            alt="Zdjęcie firmy"
            className="rounded-lg shadow-lg object-cover w-full h-full"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)", // Obcięcie lewego górnego rogu zdjęcia
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "cover",
              borderColor: "#fbbf24", // Żółty kolor obramowania (opcjonalnie)
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
