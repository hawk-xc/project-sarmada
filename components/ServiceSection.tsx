"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Laptop,
  Server,
  FlaskConical,
  Cog,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Digital Solutions & Website Development",
    icon: <Laptop size={32} />,
    link: "#",
  },
  {
    id: 2,
    title: "IT Hardware & Infrastructure Solutions",
    icon: <Server size={32} />,
    link: "#",
  },
  {
    id: 3,
    title: "Laboratory Equipment & Research Needs",
    icon: <FlaskConical size={32} />,
    link: "#",
  },
  {
    id: 4,
    title: "General IT Support & System Maintenance",
    icon: <Cog size={32} />,
    link: "#",
  },
  {
    id: 5,
    title: "Cloud & Data Security Services",
    icon: <Server size={32} />,
    link: "#",
  },
  {
    id: 6,
    title: "Networking & Communication Solutions",
    icon: <Laptop size={32} />,
    link: "#",
  },
];

const ServiceSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    startIndex: 1, // Mulai dari slide tengah (index 1 dari 3 yang terlihat)
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Efek untuk mengatur posisi awal ke tengah setelah render
  useEffect(() => {
    if (emblaApi) {
      // Tunggu hingga semua elemen di-render sepenuhnya
      setTimeout(() => {
        const totalSlides = services.length;
        const middleIndex = Math.floor(totalSlides / 2);
        emblaApi.scrollTo(middleIndex);
      }, 100);
    }
  }, [emblaApi]);

  return (
    <section
      id="service-section"
      className="w-full min-h-screen flex justify-center items-center py-16 bg-gradient-to-br from-white via-orange-50 to-purple-200/60 overflow-hidden"
    >
      <div className="w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
            Trusted service,{" "}
            <span className="text-orange-500 italic">
              for your various needs
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-screen"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_10%] px-4 py-6"
                >
                  <div
                    className={`bg-white rounded-2xl shadow-md p-6 flex flex-col h-72 md:w-96 w-72 justify-between hover:shadow-lg transition-all duration-300 ${
                      index === selectedIndex
                        ? "scale-105 border-2 border-orange-400"
                        : "scale-100"
                    }`}
                  >
                    <div className="text-neutral-800 mb-4">{service.icon}</div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-neutral-700 mb-4">
                        {service.title}
                      </h3>
                      <Link
                        href={service.link}
                        className="flex justify-center items-center px-5 py-2 w-36 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                      >
                        <span className="mr-2">Learn More</span>{" "}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <button 
            className="absolute top-1/2 -translate-y-1/2 -left-4 bg-white rounded-full p-3 shadow-md z-10"
            onClick={scrollPrev}
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            className="absolute top-1/2 -translate-y-1/2 -right-4 bg-white rounded-full p-3 shadow-md z-10"
            onClick={scrollNext}
          >
            <ArrowRight size={24} />
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
