import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Analytics Lead",
    company: "Tech Education Initiative",
    period: "2023 - Present",
    description: "Led data-driven decision making for educational content strategy, resulting in 50% increase in student engagement"
  },
  {
    title: "Course Designer & Educator",
    company: "Online Learning Platform",
    period: "2022 - 2023",
    description: "Designed and delivered technical courses to 8,000+ students across various domains"
  },
  {
    title: "Social Media Strategist",
    company: "Digital Marketing Agency",
    period: "2022",
    description: "Implemented data-driven content strategies leading to 50% boost in engagement metrics"
  }
];

export function Experience() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-primary/20"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary/20" />
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">• {exp.company}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {exp.period}
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
