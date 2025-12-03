import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactFormDialog from "@/components/ContactFormDialog";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up opacity-0">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powering the Future of Business</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 animate-fade-up opacity-0 stagger-1">
            Transform Your Business with{" "}
            <span className="gradient-text">Intelligent AI</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-2">
            Empowering startups and small businesses with cutting-edge AI solutions, 
            from strategy to deployment. Build smarter, scale faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 stagger-3">
            <ContactFormDialog>
              <Button variant="hero" size="xl" className="group">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </ContactFormDialog>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/30 animate-fade-up opacity-0 stagger-4">
            <p className="text-sm text-muted-foreground mb-4">Specializing in Next-Gen Technologies</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground/70">
              <span className="text-sm font-medium">AI Strategy</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span className="text-sm font-medium">Custom AI Apps</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span className="text-sm font-medium">Blockchain</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span className="text-sm font-medium">SEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
