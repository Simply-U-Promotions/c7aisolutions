import { Target, Lightbulb, Users, Rocket } from "lucide-react";

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

const Values = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The principles that guide everything we do at C7AI Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
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
  );
};

export default Values;
