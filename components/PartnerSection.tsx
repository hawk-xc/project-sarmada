"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const sponsors = [
  { id: 1, logo: "/partners/1.png" },
  { id: 2, logo: "/partners/2.png" },
  { id: 3, logo: "/partners/3.png" },
  { id: 4, logo: "/partners/4.png" },
  { id: 5, logo: "/partners/5.png" },
  { id: 6, logo: "/partners/6.png" },
  { id: 7, logo: "/partners/7.png" },
  { id: 8, logo: "/partners/8.png" },
  { id: 9, logo: "/partners/9.png" },
  { id: 10, logo: "/partners/10.png" },
  { id: 11, logo: "/partners/11.png" },
  { id: 12, logo: "/partners/12.png" },
  { id: 13, logo: "/partners/13.png" },
  { id: 14, logo: "/partners/14.png" },
  { id: 15, logo: "/partners/15.png" },
  { id: 16, logo: "/partners/16.png" },
  { id: 17, logo: "/partners/17.png" },
  { id: 18, logo: "/partners/18.png" },
  { id: 19, logo: "/partners/19.png" },
  { id: 20, logo: "/partners/20.png" },
  { id: 21, logo: "/partners/21.png" },
  { id: 22, logo: "/partners/22.png" },
  { id: 23, logo: "/partners/23.png" },
];

const PartnerSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white via-orange-50 to-purple-50 h-screen flex justify-center align-middle items-center">
      <div className="max-w-7xl mx-auto text-center px-6">
        {/* Title */}
        <h2 className="text-5xl font-light">
          Who's Our <span className="text-orange-500 italic">Partners?</span>
        </h2>
        <p className="text-neutral-600 italic mt-5 text-xl">
          We integrate with more than 50 brands you use daily
        </p>

        {/* Slider */}
        <div className="mt-12 h-64 flex justify-center align-middle items-center">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={5}
            slidesPerGroup={5} 
            spaceBetween={30}
            loop={true}
            speed={1000}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 16 },
              640: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 30 },
            }}
          >
            {sponsors.map((sponsor) => (
              <SwiperSlide key={sponsor.id}>
                <div className="bg-white rounded-full shadow-md flex items-center justify-center w-52 aspect-square mx-auto my-1">
                  <Image
                    src={sponsor.logo}
                    width={250}
                    height={250}
                    alt="sponsor logo"
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
