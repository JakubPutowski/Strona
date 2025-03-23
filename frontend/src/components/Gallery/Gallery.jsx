import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Gallery.css";

function Gallery() {
  return (
    <section
      id="gallery"
      className="snap-start h-screen w-full flex items-center justify-center pt-6 bg-[#151924]" // Ciemne tło
    >
      <div className="container mx-auto px-4">
        {/* Nagłówek */}
        <h2 className="text-4xl font-bold mb-8 text-center text-[#fbbf24]">
          Nasze realizacje
        </h2>

        {/* Opis */}
        <p className="text-lg text-center mt-8 pb-5 text-[#ede9fe]">
          Obejrzyj nasze dotychczasowe realizacje i przekonaj się, dlaczego
          warto nam zaufać!
        </p>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1} // Wyświetlanie jednego obrazu na raz domyślnie
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-lg shadow-lg"
        >
          {/* Przykładowe zdjęcia */}
          <SwiperSlide>
            <img
              src="./images/Gallery/przykład1.jpg"
              alt="Realizacja 1"
              className="object-cover w-full h-[450px] md:h-[400px] lg:h-[500px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./images/Gallery/przykład2.jpg"
              alt="Realizacja 2"
              className="object-cover w-full h-[450px] md:h-[400px] lg:h-[500px] rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./images/Gallery/przykład3.jpg"
              alt="Realizacja 3"
              className="object-cover w-full h-[450px] md:h-[400px] lg:h-[500px] rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Gallery;
