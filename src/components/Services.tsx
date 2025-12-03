import { 
  Brain, 
  Code2, 
  Blocks, 
  Bot, 
  Link2, 
  Search,
  ClipboardList,
  ArrowUpRight
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "Navigate the AI landscape with expert guidance. We help you identify opportunities and build a roadmap for AI transformation.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Code2,
    title: "AI-Powered Web Development",
    description: "Create intelligent, responsive web applications that leverage AI to deliver personalized experiences and automate workflows.",
    gradient: "from-teal-500 to-emerald-500"
  },
  {
    icon: Blocks,
    title: "Custom AI Applications",
    description: "Bespoke AI solutions tailored to your unique business challenges. From MVPs to enterprise-scale deployments.",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    description: "Deploy intelligent conversational agents that engage customers, automate support, and drive conversions 24/7.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Link2,
    title: "Blockchain & Crypto Development",
    description: "Build secure, decentralized applications with smart contracts, DeFi solutions, and Web3 integrations.",
    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: Search,
    title: "Next-Gen SEO Optimization",
    description: "AI-driven SEO strategies that boost visibility, analyze competitors, and continuously optimize for search performance.",
    gradient: "from-rose-500 to-red-500"
  },
  {
    icon: ClipboardList,
    title: "Program & Project Management",
    description: "Expert program and project management services to deliver complex initiatives on time, within scope, and on budget.",
    gradient: "from-slate-500 to-zinc-600"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-14 sm:py-18 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive AI and technology solutions designed to accelerate your business growth and competitive advantage.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div
                className="group relative glass-card rounded-2xl p-8 hover-glow transition-all duration-500 hover:-translate-y-1 h-full"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className="w-full h-full text-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
