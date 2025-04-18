import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Brain, Code2, PenTool, Users, BarChart3, Database, Lightbulb } from "lucide-react";

const expertise = [
  {
    title: "Data Analysis",
    description: "Expert in data cleaning, visualization, and extracting actionable insights using Python, SQL, and Excel",
    icon: BarChart3,
    tools: ["Python", "SQL", "Excel", "Pandas", "Matplotlib"],
    color: "blue"
  },
  {
    title: "Programming",
    description: "Strong foundation in programming with focus on data structures and algorithms",
    icon: Code2,
    tools: ["Python", "SQL", "Data Structures", "Algorithms"],
    color: "purple"
  },
  {
    title: "Prompt Engineering",
    description: "Skilled in crafting effective prompts for AI models to generate desired outputs",
    icon: Brain,
    tools: ["GPT", "NLP", "AI Models", "Context Design"],
    color: "pink"
  },
  {
    title: "Social Media Strategy",
    description: "Data-driven approach to content strategy, resulting in 50% engagement boost",
    icon: Lightbulb,
    tools: ["Content Strategy", "Analytics", "Engagement Metrics"],
    color: "yellow"
  },
  {
    title: "Graphic Design",
    description: "Created 100+ strategic visual designs blending creativity with business goals",
    icon: PenTool,
    tools: ["Visual Design", "Brand Identity", "UI/UX"],
    color: "green"
  },
  {
    title: "Leadership",
    description: "Led 35-member team and managed 7+ large-scale events with 300+ attendees",
    icon: Users,
    tools: ["Team Management", "Event Planning", "Communication"],
    color: "orange"
  }
];

const colorMap = {
  blue: "hover:bg-blue-50/80 hover:border-blue-200 dark:hover:bg-card",
  purple: "hover:bg-purple-50/80 hover:border-purple-200 dark:hover:bg-card",
  pink: "hover:bg-pink-50/80 hover:border-pink-200 dark:hover:bg-card",
  yellow: "hover:bg-yellow-50/80 hover:border-yellow-200 dark:hover:bg-card",
  green: "hover:bg-green-50/80 hover:border-green-200 dark:hover:bg-card",
  orange: "hover:bg-orange-50/80 hover:border-orange-200 dark:hover:bg-card"
};

const iconColorMap = {
  blue: "text-blue-600 dark:text-primary",
  purple: "text-purple-600 dark:text-primary",
  pink: "text-pink-600 dark:text-primary",
  yellow: "text-yellow-600 dark:text-primary",
  green: "text-green-600 dark:text-primary",
  orange: "text-orange-600 dark:text-primary"
};

export function About() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-muted/50 dark:to-background">
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
              <div className="p-4 rounded-lg border bg-white dark:bg-card hover:shadow-lg transition-all hover:bg-blue-50/50 hover:border-blue-200 dark:hover:bg-card">
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
                    className={`group p-6 rounded-lg border bg-white dark:bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${colorMap[item.color as keyof typeof colorMap]}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className={`w-6 h-6 ${iconColorMap[item.color as keyof typeof iconColorMap]} group-hover:scale-110 transition-transform`} />
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
                <div className="p-4 rounded-lg border bg-white dark:bg-card hover:shadow-lg transition-all hover:bg-blue-50/50 hover:border-blue-200 dark:hover:bg-card">
                  <p className="text-3xl font-bold text-blue-600 dark:text-primary mb-2">8,000+</p>
                  <p className="text-muted-foreground">Students trained in technical domains</p>
                </div>
                <div className="p-4 rounded-lg border bg-white dark:bg-card hover:shadow-lg transition-all hover:bg-purple-50/50 hover:border-purple-200 dark:hover:bg-card">
                  <p className="text-3xl font-bold text-purple-600 dark:text-primary mb-2">50%</p>
                  <p className="text-muted-foreground">Boost in audience engagement</p>
                </div>
                <div className="p-4 rounded-lg border bg-white dark:bg-card hover:shadow-lg transition-all hover:bg-pink-50/50 hover:border-pink-200 dark:hover:bg-card">
                  <p className="text-3xl font-bold text-pink-600 dark:text-primary mb-2">10+</p>
                  <p className="text-muted-foreground">Educational courses created</p>
                </div>
                <div className="p-4 rounded-lg border bg-white dark:bg-card hover:shadow-lg transition-all hover:bg-green-50/50 hover:border-green-200 dark:hover:bg-card">
                  <p className="text-3xl font-bold text-green-600 dark:text-primary mb-2">100+</p>
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
