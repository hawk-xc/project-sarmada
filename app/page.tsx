import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionSection from "@/components/VisionSection";
import ContentSection from "@/components/ContentSection";
import ReasonSection from "@/components/ReasonSection";
import CorporateCulture from "@/components/CorporateCulture";
import ExcessSection from "@/components/ExcessSection";
import CTASection from "@/components/CTASection";
import ClientSection from "@/components/ClientSection";
import FooterSection from "@/components/FooterSection";
import PartnerSection from "@/components/PartnerSection";
import ServiceSection from "@/components/ServiceSection";
// import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-100 overflow-x-hidden">
      {/* Particle Background */}
      {/* <ParticleBackground /> */}
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Vision Section */}
      <VisionSection />

      {/* Reason Section */}
      <ReasonSection />

      {/* Service Section */}
      <ServiceSection />

      {/* CorporateCulture Section */}
      <CorporateCulture />

      {/* Excess Section */}
      <ExcessSection />

      {/* Swiper Section */}
      <PartnerSection />

      {/* Client Section */}
      <ClientSection />

      {/* CTA Section */}
      <CTASection />
      
      {/* Footer Section */}
      <FooterSection />
    </main>
  );
}