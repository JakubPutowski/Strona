import React from "react";
import "./Home.css";

function Home() {
  return (
    <section
      id="home"
      className="snap-start h-screen w-full flex items-center justify-center bg-[#151924] pt-4" // Dodano padding-top
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] max-w-[1400px] mx-auto h-[80%]">
        {/* Tekst po lewej stronie */}
        <div className="w-full md:w-[45%] text-center md:text-left text-[#ede9fe]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#fbbf24]">
            Krótka historia firmy
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Nasza firma została założona w 1959 roku z pasji. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </p>
        </div>

        {/* Separator */}
        <div className="hidden md:block mx-6 h-full w-[3px] bg-[#fbbf24] rotate-10 origin-center"></div>

        {/* Zdjęcie po prawej stronie */}
        <div className="w-full md:w-[50%] flex justify-center relative mt-6 md:mt-0">
          <img
            src="./images/home-image.jpg"
            alt="Zdjęcie firmy"
            className="rounded-lg shadow-lg object-cover w-[90%] md:w-full h-auto border-2 border-[#fbbf24] [clip-path:none] md:[clip-path:polygon(10%_0%,_100%_0%,_100%_100%,_0%_100%)]"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
