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
      <div className="py-4 sm:py-7 bg-background" />
      <Services />
      <div className="py-8 sm:py-12 bg-gradient-to-b from-background to-background" />
      <Mission />
      <div className="py-8 sm:py-12 bg-background" />
      <Values />
      <div className="py-8 sm:py-12 bg-gradient-to-b from-background to-background" />
      <CTA />
      <div className="py-16 sm:py-24 bg-background" />
      <Footer />
    </main>
  );
};

export default Index;
