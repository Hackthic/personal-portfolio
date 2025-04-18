import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard showcasing complex data analysis using Python and Streamlit",
    tags: ["Python", "Pandas", "Streamlit", "Data Analysis"],
    links: {
      github: "https://github.com/yourusername/project1",
      live: "https://project1.demo"
    }
  },
  {
    title: "Educational Platform",
    description: "Platform used by 5000+ students for interactive learning and course management",
    tags: ["React", "Node.js", "MongoDB", "Education"],
    links: {
      github: "https://github.com/yourusername/project2",
      live: "https://project2.demo"
    }
  },
  {
    title: "Social Media Analytics Tool",
    description: "Tool that increased engagement by 50% through data-driven content recommendations",
    tags: ["Python", "Machine Learning", "Social Media API"],
    links: {
      github: "https://github.com/yourusername/project3"
    }
  }
];

export function Projects() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
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
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
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
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.links.live && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
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
