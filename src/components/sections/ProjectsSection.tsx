import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import workImage1 from "@/assets/work-image-1.jpg";
import workImage2 from "@/assets/work-image-2.jpg";
import workImage3 from "@/assets/work-image-3.png";

const projects = [
  {
    title: "Community Engagement App",
    description: "Social platform designed to foster meaningful connections and collaborative experiences among users.",
    tech: ["TypeScript", "Next.js", "Supabase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    color: "from-secondary/20 to-primary/20",
    liveDemo: "https://creaverse1-6.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "Modern personal portfolio showcasing projects, skills, and professional experience with elegant design and smooth animations.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    color: "from-primary/20 to-secondary/20",
    liveDemo: "https://shreyasjangam.netlify.app/",
  },
  {
    title: "Blockchain DAO Website",
    description: "Decentralized autonomous organization platform enabling transparent governance, voting mechanisms, and community-driven decision making.",
    tech: ["Ethereum", "Solidity", "Web3.js", "React"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    color: "from-primary/20 to-cyan-500/20",
    liveDemo: "https://creaverse-dao-home.vercel.app/",
  },
  {
    title: "Catering Service Website",
    description: "Professional catering service website showcasing menu offerings, event services, and seamless booking experience for customers.",
    tech: ["React", "Tailwind", "Vercel", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
    color: "from-orange-500/20 to-primary/20",
    liveDemo: "https://bittucaterers.vercel.app/",
  },
  {
    title: "Astrology Service Website",
    description: "Comprehensive astrology service platform offering horoscope readings, birth chart analysis, and personalized consultations.",
    tech: ["React", "Tailwind", "Vercel", "Modern UI"],
    image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=600&h=400&fit=crop",
    color: "from-purple-500/20 to-indigo-500/20",
    liveDemo: "https://jayeshmahant.vercel.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-secondary/10 rounded-full blur-[120px] sm:blur-[180px]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 block">
            Featured Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4">
            Projects & <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-2">
            A collection of digital products and platforms I've conceptualized and designed,
            focusing on user experience and meaningful functionality.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="glass-card-hover group overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10`} />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 sm:gap-3">
                  <Button 
                    variant="glass" 
                    size="sm" 
                    className="flex-1 text-xs sm:text-sm h-9 sm:h-10"
                    onClick={() => window.open(project.liveDemo, "_blank")}
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline">Live</span> Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm h-9 sm:h-10">
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline">View</span> Code
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Work Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <div className="text-center mb-6 sm:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold mb-2 sm:mb-3">
              Behind the <span className="gradient-text">Scenes</span>
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm max-w-lg mx-auto px-2">
              Moments from my professional journey, collaborations, and achievements
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { image: workImage1, caption: "Planning Of District Level Program Training" },
              { image: workImage2, caption: "With District Institute Of Education And Training Hon. Principal Sir" },
              { image: workImage3, caption: "Work Meet With Hon. Resident Deputy District Collector & Executive Magistrate" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl glass-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-xl sm:rounded-2xl transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs sm:text-sm font-medium text-foreground text-center leading-tight">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
