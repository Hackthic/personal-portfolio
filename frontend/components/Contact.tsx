import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-8">
            Currently exploring opportunities in Data Analytics and Data Science
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="mailto:aviralpandey575@gmail.com">
                <Mail className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="https://linkedin.com/in/aviralpandey" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="https://github.com/aviralpandey" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="p-6 rounded-lg border bg-card">
            <h3 className="text-lg font-semibold mb-2">Looking for Opportunities</h3>
            <p className="text-muted-foreground mb-4">
              I'm passionate about leveraging data to drive decisions and create meaningful impact.
              Let's discuss how we can work together!
            </p>
            <Button variant="default" className="group">
              <span>View Resume</span>
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
