import { motion } from "framer-motion";
import { GraduationCap, Brain, Palette, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <img
            src="/avatar.jpg"
            alt="Aviral Pandey"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20"
          />
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Aviral Pandey</span> 👋
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Transforming data into impact through analytics, education, and creative thinking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <Brain className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Data Analytics</h3>
            <p className="text-sm text-muted-foreground">
              Skilled in data cleaning, visualization, and extracting actionable insights
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <GraduationCap className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Education Design</h3>
            <p className="text-sm text-muted-foreground">
              Created 10+ outcome-focused courses, mentoring thousands
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <Palette className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Creative Strategy</h3>
            <p className="text-sm text-muted-foreground">
              Built 100+ visuals blending storytelling and strategy
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <Users className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Leadership</h3>
            <p className="text-sm text-muted-foreground">
              Managed large events and led a 35-member team
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
