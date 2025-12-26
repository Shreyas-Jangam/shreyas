import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle2, Star, TrendingUp } from "lucide-react";
import certServiceNow from "@/assets/cert-servicenow.jpg";

const achievements = [
  {
    icon: Award,
    title: "Product Concepts Built",
    description: "Structured and designed multiple platform concepts from ideation to detailed specifications",
    highlight: "10+ Concepts",
  },
  {
    icon: CheckCircle2,
    title: "Documentation Excellence",
    description: "Created comprehensive product documentation including SRS, BRD, and feature specifications",
    highlight: "20+ Documents",
  },
  {
    icon: Star,
    title: "User Experience Focus",
    description: "Designed clear system flows with strong focus on usability and intuitive user experience",
    highlight: "UX Champion",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Consistently improving skills, learning new methodologies, and evolving with industry trends",
    highlight: "Always Learning",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Milestones
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Achievements & <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key milestones and recognitions that reflect my commitment to excellence
            in product design and digital innovation.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="glass-card-hover p-6 text-center group"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Highlight Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                {achievement.highlight}
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-3">
              <span className="gradient-text">Certifications</span>
            </h3>
          </div>

          <div className="flex justify-center">
            <div className="glass-card-hover overflow-hidden rounded-2xl max-w-2xl group">
              <img
                src={certServiceNow}
                alt="ServiceNow Micro-Certification - Predictive Intelligence"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-4 text-center">
                <h4 className="font-display font-semibold text-lg mb-1">ServiceNow Micro-Certification</h4>
                <p className="text-primary text-sm font-medium">Predictive Intelligence</p>
                <p className="text-muted-foreground text-xs mt-1">Issued: April 5, 2025</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 glass-card p-8 md:p-12 text-center max-w-3xl mx-auto gradient-border"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            My <span className="gradient-text">Vision</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            To work with great teams, contribute to meaningful products, grow professionally,
            and keep building impactful digital experiences that genuinely help people.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
