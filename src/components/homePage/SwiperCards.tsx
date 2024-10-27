import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const SwiperCards = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          1920: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          1028: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          380: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          200: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        className="multiple-slide-carousel border border-border dark:border-dark-border"
      >
        {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-2xl h-96 flex justify-center items-center bg-card dark:bg-dark-card">
              <span className="text-2xl font-semibold text-foreground dark:text-dark-foreground">
                Slide {index + 1}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute flex justify-center items-center m-auto  left-0 right-0 w-fit bottom-8 z-20 border border-red-600">
        <button className="swiper-button-prev group !p-2 flex justify-center items-center border border-solid border-card !w-12 !h-12 transition-all duration-500 rounded-full  !-translate-x-16 bg-dark-card dark:bg-card">
            <MdKeyboardArrowLeft className="text-card dark:text-card-foreground" />
        </button>
        <button className="swiper-button-next group !p-2 flex justify-center items-center border border-solid border-card !w-12 !h-12 transition-all duration-500 rounded-full  !translate-x-16 bg-dark-card dark:bg-card">
        <MdKeyboardArrowRight className="text-card dark:text-card-foreground"/>

        </button>
      </div>
    </>
  );
};

export default SwiperCards;
