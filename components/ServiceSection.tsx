"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Laptop, Server, FlaskConical, Cog, ArrowRight } from "lucide-react"; // contoh icon
import Link from "next/link";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="service-section" className="w-full h-screen flex justify-center align-middle items-center py-16 bg-gradient-to-br from-white via-orange-50 to-purple-200/60">
      <div className="mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-center">
          Trusted service,{" "}
          <span className="text-orange-500 italic">for your various needs</span>
        </h2>

        <div className="embla relative mt-12 ml-96">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_30%] p-4"
                >
                  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-80 justify-between">
                    <div className="text-neutral-800 mb-20">{service.icon}</div>
                    <h3 className="text-3xl font-semibold text-neutral-700 mb-2">
                      {service.title}
                    </h3>
                    <Link
                      href={service.link}
                      className="flex justify-center align-middle items-center px-6 py-3 w-40 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                    >
                      <span className="mr-2">Learn More</span> <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
