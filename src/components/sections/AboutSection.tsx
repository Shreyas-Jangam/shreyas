import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";
import aboutProfile from "@/assets/about-profile.jpeg";

const highlights = [
  {
    icon: Target,
    title: "Product Ideation",
    description: "Converting ideas into clear product functionality",
  },
  {
    icon: Lightbulb,
    title: "UX Thinking",
    description: "Designing seamless user experiences and journeys",
  },
  {
    icon: Users,
    title: "User-First Approach",
    description: "Understanding what users truly need",
  },
  {
    icon: Rocket,
    title: "Innovation Driven",
    description: "Creating scalable, engaging systems",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/10 rounded-full blur-[100px] sm:blur-[150px] -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <div>
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 sm:mb-8 flex justify-center lg:justify-start"
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-full blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                {/* Decorative ring */}
                <div className="absolute -inset-2 border-2 border-primary/30 rounded-full animate-pulse" />
                {/* Image container */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <img 
                    src={aboutProfile} 
                    alt="Shreyas Jangam" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Floating accent dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary/70 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block text-center lg:text-left"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 text-center lg:text-left"
            >
              Crafting Digital
              <br />
              <span className="gradient-text">Experiences</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base"
            >
              <p>
                I am a technology-minded creative, passionate about building impactful
                digital products, designing seamless user experiences, and shaping ideas
                into structured, working systems.
              </p>
              <p>
                Based in Maharashtra, India, I'm deeply motivated by innovation,
                problem-solving, and creating things that matter. I love working on
                social/community platforms, tech-driven applications, and digital
                ecosystems that empower users.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 sm:mt-8 p-4 sm:p-6 glass-card"
            >
              <h3 className="text-base sm:text-lg font-display font-semibold mb-2 sm:mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                My Mission
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                To contribute to forward-thinking companies by designing powerful digital
                products, enhancing user experience, and bringing clarity, creativity, and
                structured thinking to every project.
              </p>
            </motion.div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="glass-card-hover p-4 sm:p-6 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
