import { Button } from "@/components/ui/button";
import ContactFormDialog from "@/components/ContactFormDialog";
import { ArrowRight } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            At C7AI Solutions, we believe that every business, regardless of size, 
            deserves access to the same powerful AI technologies that drive Fortune 500 
            companies. Our mission is to democratize AI by making it accessible, 
            affordable, and practical for startups and small businesses.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            We combine deep technical expertise with a genuine understanding of 
            business challenges to create solutions that don't just impress—they 
            deliver real, measurable results.
          </p>
          <ContactFormDialog>
            <Button variant="hero" size="lg" className="group">
              Let's Work Together
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </ContactFormDialog>
        </div>
      </div>
    </section>
  );
};

export default Mission;
