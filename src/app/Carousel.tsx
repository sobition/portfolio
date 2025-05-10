"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export function MobileCarousel({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      centeredSlides={true}
      slidesPerView={1}
      className="w-full h-64 bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 rounded-lg shadow-lg"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-64 flex items-center justify-center">
            <Image
              src={src}
              alt={`carousel ${idx + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
