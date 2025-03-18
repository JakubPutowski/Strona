import React from "react";
import "./Home.css";

function Home() {
  return (
    <section
      id="home"
      className="snap-start h-screen w-full flex items-center justify-center bg-gray-100"
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
          }}
        >
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Krótka historia firmy
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
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
            backgroundColor: "#d1d5db", // Jasnoszary kolor linii
            height: "calc(100% - 20px)", // Wysokość linii z marginesem
            transform: "rotate(10deg)", // Obrót linii pod kątem -10 stopni
            transformOrigin: "center", // Punkt obrotu (środek elementu)
          }}
        ></div>

        {/* Zdjęcie po prawej stronie */}
        <div className="w-full md:w-[50%] flex justify-center relative">
          <img
            src="/images/home-image.jpg"
            alt="Zdjęcie firmy"
            className="rounded-lg shadow-lg object-cover w-full h-full"
            style={{
              clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)", // Obcięcie lewego górnego rogu zdjęcia
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}
export default Home;
