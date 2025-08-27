"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const mainClients = [
  { src: "/clients/client_1.png", width: 310, alt: "RSWN" },
  { src: "/clients/client_2.png", width: 230, alt: "SCCR" },
  { src: "/clients/client_3.png", width: 310, alt: "Kemenkes RS Soerojo" },
  { src: "/clients/client_4.png", width: 310, alt: "Kemenkes RSO Soeharso" },
];

const clients = [
  { src: "/clients/client_5.png", alt: "Universitas Muhammadiyah Magelang" },
  { src: "/clients/client_6.png", alt: "Universitas Muhammadiyah Yogyakarta" },
  { src: "/clients/client_7.png", alt: "UIN Sunan Kalijaga" },
  { src: "/clients/client_8.png", alt: "Universitas Diponegoro" },
  { src: "/clients/client_9.png", alt: "Universitas Jenderal Soedirman" },
];

const ClientSection = () => {
  return (
    <section
      id="client-section"
      className="flex flex-col items-center justify-center align-middle px-6 py-16 min-h-screen h-auto relative"
    >
      <div className="absolute bg-gradient-to-t from-white to-transparent w-full bottom-0 h-full z-0" />
      <div className="absolute bg-gradient-to-bl from-orange-200 opacity-80 to-transparent w-full bottom-0 h-full" />
      <div className="absolute bg-gradient-to-br from-sky-200 opacity-80 to-transparent w-full bottom-0 h-full" />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row text-center sm:text-left gap-2 mb-12 md:mb-20 z-40"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
          Who's Our{" "}
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-orange-500">
          Client?
        </h2>
      </motion.div>

      <div className="gap-10 max-w-8xl mx-auto flex flex-col lg:flex-row px-4 sm:px-10 z-40">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="grid grid-cols-2 gap-6 md:gap-10 mx-auto max-w-lg lg:max-w-none lg:mx-16">
            {mainClients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={client.width}
                  height={client.width}
                  className="object-contain w-32 h-32 sm:w-40 sm:h-40 md:w-auto md:h-auto"
                />
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-24 grid grid-cols-3 sm:grid-cols-5 gap-4 md:gap-1 mx-auto max-w-xs sm:max-w-md lg:max-w-none lg:mx-20">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={90}
                  height={90}
                  className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex-1 mt-12 lg:mt-0"
        >
          <h3 className="font-bold text-2xl md:text-3xl max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            Serving Education & Healthcare Excellence
          </h3>
          <p className="mt-5 text-base md:text-2xl text-slate-500 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            Sarmada has been trusted to serve strategic clients in the education
            and hospitality/healthcare sectors, including Universitas
            Muhammadiyah Surakarta, Universitas Muhammadiyah Yogyakarta,
            Universitas Sanata Dharma, Universitas Diponegoro, UIN Sunan
            Kalijaga, as well as healthcare institutions like Kemenkes RSO
            Soeharso, Kemenkes RSO Soerojo, RSWN, and the Stem Cell & Cancer
            Research Center.
          </p>
          <p className="mt-5 text-base md:text-2xl text-slate-500 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            We support their needs by providing hardware and software solutions,
            ensuring operations are more efficient, modern, and sustainable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSection;
