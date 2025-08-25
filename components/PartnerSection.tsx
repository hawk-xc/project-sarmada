"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section id="partners-section" className="w-full py-16 bg-gradient-to-b from-white via-orange-50 to-purple-50 min-h-screen flex justify-center items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bg-gradient-to-b from-white to-transparent w-full bottom-0 h-full z-0" />
      <div className="absolute bg-gradient-to-tr from-orange-200 opacity-80 to-transparent w-full bottom-0 h-full" /> 
      <div className="absolute bg-gradient-to-tl from-sky-200 opacity-80 to-transparent w-full bottom-0 h-full" />
      
      <div className="w-full mx-auto text-center z-40">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="px-2 mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
            Who's Our <span className="text-orange-500 italic">Partners?</span>
          </h2>
          <p className="text-neutral-600 italic mt-4 sm:mt-5 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            We integrate with more than 50 brands you use daily
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-[100vw]"
        >
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={"auto"}
              spaceBetween={10}
              loop={true}
              speed={1500}
              centeredSlides={true}
              breakpoints={{
                320: {
                  slidesPerView: 4,
                  spaceBetween: 2,
                  centeredSlides: false,
                },
                480: {
                  slidesPerView: 4,
                  spaceBetween: 2,
                  centeredSlides: true,
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 28,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 32,
                },
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 16,
                },
              }}
              className="partner-swiper"
            >
              {sponsors.map((sponsor) => (
                <SwiperSlide key={sponsor.id} className="my-2 flex justify-center">
                  <div className="bg-white rounded-full shadow-md flex items-center justify-center w-36 max-sm:w-32 aspect-square xs:w-40 xs:h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56 p-3 hover:shadow-sm transition-all duration-300 hover:scale-105">
                    <div className="relative w-full h-full">
                      <Image
                        src={sponsor.logo}
                        fill
                        alt="sponsor logo"
                        className="object-contain p-3"
                        sizes="(max-width: 640px) 200px, (max-width: 768px) 120px, (max-width: 1024px) 140px, 160px"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .partner-swiper {
          padding: 2rem 0;
        }
        
        @media (max-width: 640px) {
          .partner-swiper {
            padding: 1.5rem 0;
          }
        }
        
        /* Ensure proper spacing on mobile */
        .partner-swiper .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default PartnerSection;