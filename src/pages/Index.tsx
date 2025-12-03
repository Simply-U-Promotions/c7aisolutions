import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SectionDivider />
      <Services />
      <div className="py-8 sm:py-12" />
      <SectionDivider />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
