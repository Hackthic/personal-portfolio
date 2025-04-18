import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Journey & Impact</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground mb-2">
                B.Tech in Computer Science (AIML) - Ajay Kumar Garg Engineering College
                <span className="text-sm"> (2021-2025)</span>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Data Analysis</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">Excel</Badge>
                <Badge variant="secondary">Prompt Engineering</Badge>
                <Badge variant="secondary">Social Media Strategy</Badge>
                <Badge variant="secondary">Graphic Design</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Impact Numbers</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Trained 8,000+ students in various technical domains</li>
                <li>50% boost in audience engagement through data-driven strategies</li>
                <li>Created 10+ comprehensive educational courses</li>
                <li>Developed 100+ strategic visual designs</li>
                <li>Led 7+ large-scale events with 300+ attendees</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
