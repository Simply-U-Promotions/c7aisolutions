import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Values from "@/components/Values";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="py-8 sm:py-12 bg-gradient-to-b from-card via-card to-card" />
      <Services />
      <div className="py-8 sm:py-12" />
      <Mission />
      <div className="py-8 sm:py-12" />
      <Values />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
