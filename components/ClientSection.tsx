"use client";

import Image from "next/image";

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
    <section id="client-section" className="flex flex-col items-center px-6 py-16 h-screen">
      <div className="flex flex-row gap-2 mb-28">
        <h2 className="text-5xl font-light">who's our </h2>
        <h2 className="text-5xl font-light italic text-orange-500">Client?</h2>
      </div>

      <div className="gap-10 w-full flex flex-row px-10">
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-10 mx-16">
            {mainClients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={client.width}
                  height={client.width}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="mt-24 grid grid-cols-5 gap-1 mx-20">
            {clients.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-3xl max-w-sm">Serving Education & Healthcare Excellence</h3>
          <p className="mt-5 text-2xl text-slate-500 max-w-3xl">
            Sarmada has been trusted to serve strategic clients in the education
            and hospitality/healthcare sectors, including Universitas
            Muhammadiyah Surakarta, Universitas Muhammadiyah Yogyakarta,
            Universitas Sanata Dharma, Universitas Diponegoro, UIN Sunan
            Kalijaga, as well as healthcare institutions like Kemenkes RSO
            Soeharso, Kemenkes RSO Soerojo, RSWN, and the Stem Cell & Cancer
            Research Center.
          </p>
          <p className="mt-5 text-2xl text-slate-500 max-w-3xl">
            We support their needs by providing hardware and software solutions,
            ensuring operations are more efficient, modern, and sustainable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
