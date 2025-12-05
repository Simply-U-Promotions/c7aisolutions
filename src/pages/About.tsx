import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ContactFormDialog from "@/components/ContactFormDialog";
import founderImage from "@/assets/founder-carlton-campbell.png";
import { 
  CheckCircle2,
  Award,
  GraduationCap
} from "lucide-react";

const certifications = [
  "Project Management Professional (PMP)",
  "SAFe® 6 Practice Consultant (SPC)",
  "SAFe® 6 Release Train Engineer (RTE)",
  "SAFe® 6 DevOps Practitioner (SDP)",
  "Professional Scrum Master (PSM)",
  "COBIT 5 Foundation Certified",
  "ITIL Foundation Certificate",
  "Executive Leadership Program (USDA)"
];

const industryExperience = [
  "Healthcare & Insurance",
  "Banking & Finance",
  "Education",
  "Government & Public Sector",
  "Software Development",
  "Real Estate & Consulting",
  "Hospitality",
  "Retail",
  "Supply Chain"
];

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

          <div className="grid gap-8">
            {/* Bio Card */}
            <div className="glass-card rounded-2xl p-8 lg:p-10">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Carlton is an accomplished Senior Information Technology Program Manager and Enterprise Business Technology Consultant with over 35 years of experience leading large-scale digital transformation initiatives across healthcare, finance, government, and education sectors.
                </p>
                <p>
                  His executive leadership spans roles as Senior Director of Engineering at Elevance Health, Managing Director at Integrated Business Systems, Chief Operating Officer at Solvern Innovations, and Staff Director at the FDIC. In these positions, Carlton led dynamic teams of engineers and analysts, managed multi-million dollar budgets, and oversaw 100+ software development projects with teams of over 130 developers.
                </p>
                <p>
                  Beyond corporate leadership, Carlton has served his community as a Board Member for the Hampton Economic Development Authority (2017-2021, reappointed 2024-2028) and the Hampton Planning Commission (2010-2017), helping guide strategic investments and foster economic growth.
                </p>
                <p>
                  A certified Project Management Professional (PMP), SAFe® Practice Consultant, and Release Train Engineer, Carlton brings deep expertise in program management, scaled agile delivery, DevOps practices, and continuous process improvement. His strategic vision combines technical excellence with a genuine understanding of business challenges to deliver solutions that create measurable impact.
                </p>
              </div>
            </div>

          </div>

          {/* Education & Industry Experience - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h4 className="font-semibold">Education</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Master of Public Administration (MPA)</li>
                <li>B.S. Computer Information Systems</li>
                <li className="text-xs opacity-75">Strayer University</li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <h4 className="font-semibold">Industry Experience</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {industryExperience.map((industry) => (
                  <span 
                    key={industry}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-8 glass-card rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h4 className="font-semibold">Professional Certifications</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{cert}</span>
                </div>
              ))}
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
