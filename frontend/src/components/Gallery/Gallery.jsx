import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Gallery.css";

function Gallery() {
  return (
    <section
      id="gallery"
      className="snap-start h-screen w-full flex items-center justify-center"
      style={{ backgroundColor: "#0f172a" }} // Ciemne tło
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold mb-8 text-center"
          style={{ color: "#fbbf24" }} // Żółty kolor nagłówka
        >
          Nasze realizacje
        </h2>

        {/* Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="rounded-lg shadow-lg"
        >
          {/* Przykładowe zdjęcia */}
          <SwiperSlide>
            <img
              src="./images/przykład1.jpg"
              alt="Realizacja 1"
              className="object-cover w-full h-[400px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./images/przykład2.jpg"
              alt="Realizacja 2"
              className="object-cover w-full h-[400px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./images/przykład3.jpg"
              alt="Realizacja 3"
              className="object-cover w-full h-[400px] rounded-lg"
            />
          </SwiperSlide>
        </Swiper>

        {/* Opis */}
        <p
          className="text-lg text-center mt-8"
          style={{ color: "#ede9fe" }} // Biały kolor tekstu
        >
          Obejrzyj nasze dotychczasowe realizacje i przekonaj się, dlaczego
          warto nam zaufać!
        </p>
      </div>
    </section>
  );
}

export default Gallery;
