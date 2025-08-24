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
    <section className="w-full py-16 overflow-x-hidden bg-gradient-to-b from-white via-orange-50 to-purple-50 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="px-6"
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
          className="mt-12 w-full"
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={"auto"}
            spaceBetween={40}
            loop={true}
            speed={1000}
            centeredSlides={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                slidesPerGroup: 3,
                spaceBetween: 26,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 40,
              },
            }}
            className="!py-10" // Add padding to swiper to avoid shadows being cut
          >
            {sponsors.map((sponsor) => (
              <SwiperSlide key={sponsor.id} className="!w-auto">
                <div className="bg-white rounded-full shadow-md flex items-center justify-center w-48 h-48 sm:w-36 sm:h-36 max-sm:w-28 max-sm:h-28 md:w-56 md:h-56 aspect-square p-4 hover:shadow-lg transition-shadow duration-300">
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
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;
