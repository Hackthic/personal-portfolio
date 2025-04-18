import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Brain, Code2, PenTool, Users, BarChart3, Database, Lightbulb } from "lucide-react";

const expertise = [
  {
    title: "Data Analysis",
    description: "Expert in data cleaning, visualization, and extracting actionable insights using Python, SQL, and Excel",
    icon: BarChart3,
    tools: ["Python", "SQL", "Excel", "Pandas", "Matplotlib"]
  },
  {
    title: "Programming",
    description: "Strong foundation in programming with focus on data structures and algorithms",
    icon: Code2,
    tools: ["Python", "SQL", "Data Structures", "Algorithms"]
  },
  {
    title: "Prompt Engineering",
    description: "Skilled in crafting effective prompts for AI models to generate desired outputs",
    icon: Brain,
    tools: ["GPT", "NLP", "AI Models", "Context Design"]
  },
  {
    title: "Social Media Strategy",
    description: "Data-driven approach to content strategy, resulting in 50% engagement boost",
    icon: Lightbulb,
    tools: ["Content Strategy", "Analytics", "Engagement Metrics"]
  },
  {
    title: "Graphic Design",
    description: "Created 100+ strategic visual designs blending creativity with business goals",
    icon: PenTool,
    tools: ["Visual Design", "Brand Identity", "UI/UX"]
  },
  {
    title: "Leadership",
    description: "Led 35-member team and managed 7+ large-scale events with 300+ attendees",
    icon: Users,
    tools: ["Team Management", "Event Planning", "Communication"]
  }
];

export function About() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Journey & Impact</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="p-4 rounded-lg border bg-card hover:shadow-lg transition-all">
                <p className="text-lg mb-1">B.Tech in Computer Science (AIML)</p>
                <p className="text-muted-foreground">
                  Ajay Kumar Garg Engineering College
                  <span className="text-sm ml-2">(2021-2025)</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Areas of Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertise.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group p-6 rounded-lg border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                      <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary"
                          className="group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Impact Numbers</h3>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="p-4 rounded-lg border bg-card hover:shadow-lg transition-all hover:border-primary/50">
                  <p className="text-3xl font-bold text-primary mb-2">8,000+</p>
                  <p className="text-muted-foreground">Students trained in technical domains</p>
                </div>
                <div className="p-4 rounded-lg border bg-card hover:shadow-lg transition-all hover:border-primary/50">
                  <p className="text-3xl font-bold text-primary mb-2">50%</p>
                  <p className="text-muted-foreground">Boost in audience engagement</p>
                </div>
                <div className="p-4 rounded-lg border bg-card hover:shadow-lg transition-all hover:border-primary/50">
                  <p className="text-3xl font-bold text-primary mb-2">10+</p>
                  <p className="text-muted-foreground">Educational courses created</p>
                </div>
                <div className="p-4 rounded-lg border bg-card hover:shadow-lg transition-all hover:border-primary/50">
                  <p className="text-3xl font-bold text-primary mb-2">100+</p>
                  <p className="text-muted-foreground">Strategic visual designs</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
