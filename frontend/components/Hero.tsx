import { motion } from "framer-motion";
import { GraduationCap, Brain, Palette, Users } from "lucide-react";
import profileImage from "../assets/profile.jpg"; // Add your image to this path

export function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white dark:from-background dark:to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32 mx-auto mb-6"
          >
            <img
              src={profileImage}
              alt="Aviral Pandey"
              className="w-full h-full rounded-full object-cover border-4 border-primary/20 hover:border-primary/40 transition-colors duration-300 shadow-lg"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary/20"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
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
          <div className="p-6 rounded-lg border bg-white dark:bg-card hover:shadow-lg transition-all hover:border-primary/50 hover:bg-blue-50/50 dark:hover:bg-card">
            <Brain className="w-10 h-10 text-blue-600 dark:text-primary mb-4" />
            <h3 className="font-semibold mb-2">Data Analytics</h3>
            <p className="text-sm text-muted-foreground">
              Skilled in data cleaning, visualization, and extracting actionable insights
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-white dark:bg-card hover:shadow-lg transition-all hover:border-primary/50 hover:bg-purple-50/50 dark:hover:bg-card">
            <GraduationCap className="w-10 h-10 text-purple-600 dark:text-primary mb-4" />
            <h3 className="font-semibold mb-2">Education Design</h3>
            <p className="text-sm text-muted-foreground">
              Created 10+ outcome-focused courses, mentoring thousands
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-white dark:bg-card hover:shadow-lg transition-all hover:border-primary/50 hover:bg-pink-50/50 dark:hover:bg-card">
            <Palette className="w-10 h-10 text-pink-600 dark:text-primary mb-4" />
            <h3 className="font-semibold mb-2">Creative Strategy</h3>
            <p className="text-sm text-muted-foreground">
              Built 100+ visuals blending storytelling and strategy
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-white dark:bg-card hover:shadow-lg transition-all hover:border-primary/50 hover:bg-green-50/50 dark:hover:bg-card">
            <Users className="w-10 h-10 text-green-600 dark:text-primary mb-4" />
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
