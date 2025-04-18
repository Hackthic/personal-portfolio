import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Prompt Engineering",
    description: "Leveraging AI models to generate creative and contextually relevant responses, enhancing human-AI interaction through advanced prompt design techniques.",
    tags: ["AI", "NLP", "GPT", "Prompt Design"],
    links: {
      github: "https://github.com/aviralpandey/prompt-engineering",
      live: "#"
    }
  },
  {
    title: "Digital Marketing Analytics",
    description: "Comprehensive digital marketing analysis project showcasing data-driven strategies that led to 50% increase in engagement metrics.",
    tags: ["Analytics", "Marketing", "Data Visualization", "Strategy"],
    links: {
      github: "https://github.com/aviralpandey/marketing-analytics"
    }
  },
  {
    title: "Educational Content Platform",
    description: "Platform reaching 8,000+ students with interactive learning materials and comprehensive course management system.",
    tags: ["Education", "Content Design", "User Experience"],
    links: {
      github: "https://github.com/aviralpandey/edu-platform",
      live: "#"
    }
  },
  {
    title: "Slum Swaraj Foundation Initiative",
    description: "Data analysis and visualization project for underprivileged student education programs, helping track and improve learning outcomes.",
    tags: ["Social Impact", "Data Analysis", "Education"],
    links: {
      github: "https://github.com/aviralpandey/slum-swaraj"
    }
  }
];

export function Projects() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-lg border bg-card hover:shadow-lg transition-all hover:border-primary/50"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 min-h-[3rem]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.links.github && (
                    <Button variant="ghost" size="sm" asChild>
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link"
                      >
                        <Github className="h-4 w-4 mr-1 group-hover/link:text-primary transition-colors" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.links.live && project.links.live !== "#" && (
                    <Button variant="ghost" size="sm" asChild>
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link"
                      >
                        <ExternalLink className="h-4 w-4 mr-1 group-hover/link:text-primary transition-colors" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
