import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Product Planning & Strategy", level: 95, category: "core" },
  { name: "UX Thinking & Flow Design", level: 90, category: "core" },
  { name: "Feature Architecture", level: 88, category: "core" },
  { name: "System Logic & Structure", level: 85, category: "core" },
  { name: "Strategic Thinking", level: 92, category: "soft" },
  { name: "Creative Problem Solving", level: 90, category: "soft" },
  { name: "Research & Analysis", level: 87, category: "soft" },
  { name: "Documentation (SRS, BRD)", level: 85, category: "technical" },
  { name: "AI Prompting", level: 80, category: "technical" },
  { name: "Clear Communication", level: 93, category: "soft" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/10 rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block">
            Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4">
            Skills & <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-2">
            A blend of strategic thinking, creative problem-solving, and technical understanding
            that enables me to design and build meaningful digital products.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
              className="glass-card p-4 sm:p-5 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <h3 className="font-medium text-foreground text-sm sm:text-base">{skill.name}</h3>
                <span className="text-xs sm:text-sm font-bold text-primary">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 sm:mt-16 flex flex-wrap justify-center gap-2 sm:gap-4 px-2"
        >
          {[
            "Product Ideation",
            "System Planning",
            "UX Flow",
            "Documentation",
            "AI Prompting",
            "Research-Driven",
            "Strategic Thinking",
            "User-First Design",
          ].map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-xs sm:text-sm font-medium text-foreground cursor-default hover:border-primary/50 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
