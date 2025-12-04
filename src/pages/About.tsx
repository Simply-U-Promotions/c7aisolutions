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
  CheckCircle2,
  Award,
  Briefcase,
  GraduationCap
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
  "Department of Defense",
  "Government & Public Sector",
  "Software Development",
  "Real Estate & Consulting"
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

      {/* Founder Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Meet Our <span className="gradient-text">Founder</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Leading C7AI Solutions with over 35 years of technology leadership experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bio Card */}
            <div className="lg:col-span-2 glass-card rounded-2xl p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <Briefcase className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Carlton Campbell</h3>
                  <p className="text-primary font-medium">MPA, PMP, SPC, RTE, SDP, PSM</p>
                  <p className="text-muted-foreground">President & CEO</p>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Carlton is an accomplished Senior Information Technology Program Manager and Enterprise Business Technology Consultant with over 35 years of experience leading large-scale digital transformation initiatives across healthcare, finance, government, and defense sectors.
                </p>
                <p>
                  His executive leadership spans roles as Senior Director of Engineering at Elevance Health, Managing Director at Integrated Business Systems, Chief Operating Officer at Solvern Innovations, and Staff Director at the FDIC. In these positions, Carlton led dynamic teams of engineers and analysts, managed multi-million dollar budgets, and oversaw 100+ software development projects with teams of over 130 developers.
                </p>
                <p>
                  Beyond corporate leadership, Carlton has served his community as a Board Member for the Hampton Economic Development Authority (2017-2021, reappointed 2024-2028) and the Hampton Planning Commission (2010-2017), helping guide strategic investments and foster economic growth.
                </p>
                <p>
                  A certified SAFe® Practice Consultant and Release Train Engineer, Carlton brings deep expertise in scaled agile delivery, DevOps practices, and continuous process improvement. His strategic vision combines technical excellence with a genuine understanding of business challenges to deliver solutions that create measurable impact.
                </p>
              </div>
            </div>

            {/* Credentials Card */}
            <div className="space-y-6">
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

      {/* Values Section */}
      <section className="py-20">
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
