import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
// import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Particle Background */}
      {/* <ParticleBackground /> */}
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Content Section */}
      <ContentSection />
    </main>
  );
}