import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Banner() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper relative">
        <SwiperSlide>
          <img
            className="object-fill w-full h-96"
            src="/img/banner.png"
            alt="image slide 1"
          />
          <p>PP</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-96"
            src="/img/reebok.png"
            alt="image slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full h-96"
            src="/img/puma.png"
            alt="image slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
