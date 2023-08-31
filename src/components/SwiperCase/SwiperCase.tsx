"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/app/globals.css";
import { Pagination, Navigation } from "swiper/modules";
export const SwiperCase = () => {
  return (
    <Swiper
      slidesPerView={1.45}
      centeredSlides={true}
      spaceBetween={60}
      navigation={true}
      modules={[Pagination, Navigation]}
      color="white"
    >
      <SwiperSlide>
        <div className="h-full w-full bg-black border-[1px] border-[#0CC0DF]"></div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="h-full w-full bg-black border-[1px] border-[#0CC0DF]"></div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="h-full w-full bg-black border-[1px] border-[#0CC0DF]"></div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="h-full w-full bg-black border-[1px] border-[#0CC0DF]"></div>
      </SwiperSlide>
    </Swiper>
  );
};
