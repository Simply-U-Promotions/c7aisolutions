import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ContactFormDialog from "@/components/ContactFormDialog";
import { 
  Target, 
  Lightbulb, 
  Users, 
  Rocket,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every solution we build is designed to deliver measurable business impact and ROI."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay at the forefront of AI and technology to bring you cutting-edge solutions."
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work alongside you as true partners, invested in your long-term success."
  },
  {
    icon: Rocket,
    title: "Agile Delivery",
    description: "Fast iterations and continuous improvement to get you to market quickly."
  }
];

const expertise = [
  "Machine Learning & Deep Learning",
  "Natural Language Processing",
  "Computer Vision Applications",
  "Predictive Analytics",
  "Process Automation",
  "Smart Contract Development",
  "DeFi & Web3 Solutions",
  "Technical SEO & AI Content"
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              About <span className="gradient-text">C7AI Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of AI experts, developers, and strategists passionate about 
              helping startups and small businesses harness the transformative power of 
              artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
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
            
            {/* Stats/Highlights */}
            <div className="glass-card rounded-2xl p-8 lg:p-12">
              <h3 className="text-xl font-semibold mb-6">Our Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do at C7AI Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card rounded-2xl p-8 text-center hover-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to explore how AI can transform your business? We'd love to hear 
              about your challenges and ideas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <ContactFormDialog>
                <Button variant="hero" size="xl">
                  Get in Touch
                </Button>
              </ContactFormDialog>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
