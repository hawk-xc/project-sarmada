"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Laptop, Server, FlaskConical, Cog, ArrowRight, ArrowLeft } from "lucide-react"; 
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="service-section" className="w-full min-h-screen flex justify-center items-center py-16 bg-gradient-to-br from-white via-orange-50 to-purple-200/60">
      <div className="w-full max-sm:max-w-7xl md:translate-x-24 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center">
            Trusted service,{" "}
            <span className="text-orange-500 italic">for your various needs</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="embla relative mt-12 md:ml-96"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-[0_0_90%] sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_30%] p-4"
                >
                  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-80 justify-between hover:shadow-xl transition-shadow duration-300">
                    <div className="text-neutral-800 mb-4 sm:mb-8 md:mb-20">{service.icon}</div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-700 mb-2">
                      {service.title}
                    </h3>
                    <Link
                      href={service.link}
                      className="flex justify-center items-center px-5 py-2 w-36 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                    >
                      <span className="mr-2">Learn More</span> <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <button className="absolute top-1/2 -translate-y-1/2 left-0 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-md hidden sm:block" onClick={scrollPrev}><ArrowLeft/></button> */}
          {/* <button className="absolute top-1/2 -translate-y-1/2 right-0 transform translate-x-1/2 bg-white rounded-full p-2 shadow-md hidden sm:block" onClick={scrollNext}><ArrowRight/></button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
