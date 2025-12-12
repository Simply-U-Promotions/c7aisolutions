import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ContactFormDialog from "@/components/ContactFormDialog";
import founderImage from "@/assets/founder-carlton-campbell.png";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Founder Section */}
      <section className="pt-32 pb-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Founder Header with Photo */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Meet Our <span className="gradient-text">Founder</span>
            </h2>
            <img 
              src={founderImage} 
              alt="Carlton Campbell - President & CEO of C7AI Solutions"
              className="w-52 h-52 rounded-2xl object-cover object-top mx-auto mb-6 ring-4 ring-primary/20 shadow-xl"
            />
            <h3 className="text-2xl font-bold">Carlton Campbell</h3>
            <p className="text-primary font-medium">MPA, PMP, SPC, RTE, SDP, PSM</p>
            <p className="text-muted-foreground">President & CEO</p>
            <p className="text-lg text-muted-foreground mt-4">
              Leading C7AI Solutions with over 35 years of technology leadership experience.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 lg:p-10">
            <div className="space-y-4 text-muted-foreground">
              <p>
                I've spent over 35 years in the tech world, and honestly, it's been quite a ride. From healthcare to finance, government to education—I've had the chance to work across so many different industries, and each one taught me something new about how technology can genuinely transform the way we do things.
              </p>
              <p>
                My journey has taken me through some incredible roles—Senior Director of Engineering at Elevance Health, Managing Director at Integrated Business Systems, COO at Solvern Innovations, Director of Information Technology at Norfolk State University, and Staff Director at the FDIC. Along the way, I've led teams of over 130 developers, managed multi-million dollar budgets, and delivered more than 100 software projects. But what I'm most proud of is the relationships I've built and the real impact we've made together.
              </p>
              <p>
                I'm a bit of a lifelong learner—earned my Master of Public Administration and B.S. in Computer Information Systems from Strayer University. And yes, I've collected a few certifications along the way: PMP, SAFe® Practice Consultant, Release Train Engineer, DevOps Practitioner, Professional Scrum Master, COBIT 5, ITIL, and completed the USDA Executive Leadership Program. They've all helped me bring structure and best practices to the chaos that can be enterprise technology.
              </p>
              <p>
                Beyond the corporate world, I care deeply about my community. I've served on the Hampton Economic Development Authority and the Hampton Planning Commission, helping guide strategic investments and growth in my hometown.
              </p>
              <p>
                At C7AI Solutions, I get to bring all of this experience together to help startups and small businesses unlock the power of AI. Whether you're in healthcare, banking, retail, hospitality, education, or supply chain—I've probably worked in your space, and I'd love to help you figure out how AI can work for you.
              </p>
            </div>
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
