import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Download, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github,
  Target,
  Briefcase,
  GraduationCap,
  Rocket,
  Trophy,
  FlaskConical,
  ArrowLeft,
  Calendar,
  Building2,
  Award,
  ChevronDown,
  Cloud,
  Code2,
  Coffee,
  Database,
  Globe,
  Palette,
  Monitor,
  Brain,
  FileCode
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skillsData = [
  {
    name: "Cloud Computing",
    icon: Cloud,
    level: "Intermediate",
    libraries: [
      { name: "Docker", desc: "Containerize apps easily" },
      { name: "Kubernetes (Basics)", desc: "Simple container orchestration understanding" },
      { name: "AWS SDK / Azure SDK / GCP SDK", desc: "Using cloud services via code" },
      { name: "Serverless Framework", desc: "Deploy simple serverless apps" },
      { name: "Firebase / Supabase", desc: "Easy backend + hosting" },
    ],
  },
  {
    name: "Python",
    icon: Code2,
    level: "Advanced",
    libraries: [
      { name: "Django", desc: "Beginner-friendly full web framework" },
      { name: "Flask", desc: "Lightweight web framework" },
      { name: "FastAPI", desc: "Modern and simple API building" },
      { name: "Pandas", desc: "Data analysis" },
      { name: "NumPy", desc: "Numerical computing" },
      { name: "Scikit-Learn", desc: "Basic machine learning" },
      { name: "OpenCV (Basics)", desc: "Beginner friendly computer vision" },
    ],
  },
  {
    name: "Java",
    icon: Coffee,
    level: "Intermediate",
    libraries: [
      { name: "Spring Boot", desc: "Most common Java web framework" },
      { name: "Hibernate", desc: "Database handling" },
      { name: "Maven / Gradle", desc: "Project management" },
      { name: "JavaFX", desc: "GUI applications" },
    ],
  },
  {
    name: "SQL",
    icon: Database,
    level: "Intermediate",
    libraries: [
      { name: "PostgreSQL / MySQL", desc: "Databases" },
      { name: "SQLite", desc: "Simple lightweight DB" },
      { name: "SQLAlchemy (Python)", desc: "ORM for handling SQL easily" },
      { name: "pgAdmin / MySQL Workbench", desc: "GUI database tools" },
    ],
  },
  {
    name: "HTML",
    icon: Globe,
    level: "Advanced",
    libraries: [
      { name: "React (Basics)", desc: "Component-based UI" },
      { name: "Next.js", desc: "SEO + SSR with React" },
      { name: "Astro", desc: "Framework" },
    ],
  },
  {
    name: "CSS",
    icon: Palette,
    level: "Advanced",
    libraries: [
      { name: "Tailwind CSS", desc: "Easy and powerful styling" },
      { name: "Bootstrap", desc: "Ready UI components" },
      { name: "Sass (SCSS)", desc: "Better CSS writing" },
      { name: "Framer Motion (Basic)", desc: "Simple animations with React" },
    ],
  },
  {
    name: "Operating Systems",
    icon: Monitor,
    level: "Intermediate",
    libraries: [
      { name: "Linux (Ubuntu)", desc: "Basic command line usage" },
      { name: "VirtualBox", desc: "Run operating systems virtually" },
      { name: "WSL", desc: "Linux inside Windows" },
      { name: "Process Hacker / htop", desc: "See processes visually" },
    ],
  },
  {
    name: "Data Structures",
    icon: Brain,
    level: "Intermediate",
    libraries: [
      { name: "Python Collections", desc: "deque, Counter, etc." },
      { name: "C++ STL", desc: "Built-in DS" },
      { name: "Java Collections Framework", desc: "Lists, Sets, Maps" },
      { name: "NetworkX (Basic graphs)", desc: "Graph data structures" },
    ],
  },
  {
    name: "TypeScript",
    icon: FileCode,
    level: "Intermediate",
    libraries: [
      { name: "React + TypeScript", desc: "Type-safe React development" },
      { name: "Next.js + TypeScript", desc: "Simple full-stack" },
      { name: "NestJS (Basic)", desc: "Structured backend" },
      { name: "Prisma", desc: "ORM" },
      { name: "Zod", desc: "Type validation" },
    ],
  },
];

const experience = [
  {
    period: "May 2025 – Present",
    title: "District Program Coordinator",
    company: "Shantilal Muttha Foundation",
    location: "Ratnagiri, India",
    isCurrent: true,
    highlights: [
      "Led district-level implementation of the Foundation's education development initiatives, ensuring smooth execution across schools and partner institutions.",
      "Coordinated with school leaders, teachers, government authorities, NGOs, and stakeholders to drive program adoption and impact.",
      "Conducted training, workshops, and capacity-building sessions for educators to improve teaching quality and student engagement.",
      "Monitored program performance using structured evaluation tools, prepared detailed progress reports, and ensured timely compliance and documentation.",
      "Identified on-ground challenges, provided strategic solutions, and supported continuous improvement in program delivery.",
      "Built strong community relationships and awareness to increase participation, outreach, and program sustainability.",
      "Ensured alignment with Foundation objectives, state education policies, and district-level requirements.",
      "Successfully implemented programs across 100% schools through active coordination and support.",
      "Cooperated & Conducted 42 workshops / training sessions for teachers and staff.",
    ],
  },
  {
    period: "Apr 2025 – Jun 2025",
    title: "Technical Consultant – ServiceNow",
    company: "SecureKloud Infosolutions",
    location: "Remote",
    highlights: [
      "Designed, configured, and implemented ServiceNow modules to support ITSM workflows, improving process efficiency and service delivery performance.",
      "Developed custom workflows, business rules, client scripts, UI policies, and integrations to automate key business processes and reduce manual effort.",
      "Collaborated with stakeholders to gather requirements, translate them into technical solutions, and ensure alignment with business objectives.",
      "Optimized platform performance by troubleshooting incidents, resolving defects, and enhancing existing functionalities.",
      "Ensured best practices, platform governance, and security compliance across implementations and enhancements.",
      "Supported deployment activities, user enablement, and documentation to ensure smooth adoption and operational stability.",
    ],
  },
  {
    period: "06/2022 - 07/2022",
    title: "Software Engineer Intern",
    company: "Gadre Infotech",
    location: "Ratnagiri, India",
    highlights: [
      "Led a 5-person team on a machine learning project to develop & improve Elevator simulation system algorithm, achieving to maximize efficiency by rewarding shorter wait times and fewer stops.",
      "Implemented reinforcement learning algorithms to dynamically adjust elevator routes, reducing wait times and energy consumption.",
      "Conducted extensive testing and model validation to ensure system accuracy, responsiveness, and reliability under various simulated conditions.",
      "Leveraged Python and popular ML libraries (e.g., TensorFlow, scikit-learn) for model development, achieving substantial improvements in simulation performance.",
      "Utilized simulation testing environments to model and refine elevator behavior under various scenarios, including high-demand situations and emergency operations.",
      "Optimized algorithm complexity and processing time to ensure quick decision-making suitable for real-world elevator systems.",
    ],
  },
  {
    period: "04/2019 - 06/2019",
    title: "Software Engineer Intern",
    company: "Aaryak Solutions Pvt",
    location: "Ratnagiri, India",
    highlights: [
      "Designed and developed a comprehensive Blood Bank Management System utilizing Java for backend logic, HTML/CSS for front-end design, and SQL for database management.",
      "Implemented user authentication and authorization features to ensure secure access for different user roles, including admin, donor, and recipient.",
      "Developed a relational database schema using SQL to efficiently manage donor information, blood inventory, and transaction records, ensuring data integrity and retrieval speed.",
      "Created responsive and user-friendly web interfaces using HTML and CSS, enhancing the overall user experience for both donors and hospital staff.",
      "Utilized object-oriented programming principles in Java to create modular and reusable code, enhancing maintainability and scalability of the application.",
    ],
  },
];

const education = [
  {
    period: "04/2022 - 07/2024",
    degree: "BE Computer Science (AI & ML)",
    institution: "Mumbai University",
    location: "Ratnagiri, India",
    grade: "7.19 CGPI",
  },
  {
    period: "12/2017 - 05/2021",
    degree: "Diploma in Computer Engineering",
    institution: "MSBTE",
    location: "Ratnagiri, India",
    grade: "91.13% (Topper of the College)",
    highlight: true,
  },
];

const projects = [
  {
    title: "Community Engagement App",
    description: "Social platform designed to foster meaningful connections and collaborative experiences among users.",
    tech: ["TypeScript", "Next.js", "Supabase", "Tailwind"],
  },
  {
    title: "Sentiment Analysis",
    description: "Developed a dynamic Sentiment Analysis web application using React, TypeScript, JavaScript, HTML, and CSS. This application leverages natural language processing techniques to analyze user-generated text input and determine the sentiment behind it, categorizing it as positive, negative, or neutral.",
    tech: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Transaction Tracking Using Blockchain Smart Contract",
    description: "Developed a robust funds transaction tracking system for NGO using smart contracts on the Ethereum blockchain, integrated with MetaMask for secure user authentication and transaction management. The project leverages AWS for cloud hosting and PostgreSQL for reliable data storage and retrieval.",
    tech: ["Ethereum", "Smart Contracts", "MetaMask", "AWS", "PostgreSQL"],
  },
  {
    title: "16 Personality Test",
    description: "Created a responsive web application for the 16 Personality Test. This application allows users to take a personality assessment and receive insights based on the Myers-Briggs Type Indicator (MBTI). The user-friendly interface guides users through a series of questions, dynamically calculates results, and displays personalized personality profiles.",
    tech: ["React", "TypeScript", "CSS"],
  },
];

const achievements = [
  "Published paper entitled 'Transaction tracking using Blockchain smart contracts' in National conference on 'Futuristic Trends in Engineering & Applied Science 2024'",
];

const experiments = [
  "GenAI-FLUX.1-Dev LoRA",
  "Tech YT Channel",
  "Data Analysis and Visualization",
  "Writing Technical Articles",
  "Virtualization",
  "IoT projects",
  "Network Protocols and Security",
];

const Resume = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggleSkill = (skillName: string) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
                <span className="gradient-text">SHREYAS JANGAM</span>
              </h1>
            </motion.div>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <span className="px-4 py-2 rounded-full glass-card text-sm font-medium">
                💻 Software Engineer
              </span>
              <span className="px-4 py-2 rounded-full glass-card text-sm font-medium">
                🤖 AI Enthusiast
              </span>
              <span className="px-4 py-2 rounded-full glass-card text-sm font-medium">
                🐧 Linux Hobbyist
              </span>
            </div>
            <a 
              href="https://drive.google.com/file/d/1TG1SOA3CiDzFJDvj5ierCyXTEKpqmZD2/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="group">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </Button>
            </a>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Contact Card */}
              <div className="glass-card p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
                <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact
                </h3>
                <div className="space-y-4 relative z-10">
                  <a href="mailto:shreyasjangam010@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 hover:bg-primary/10 transition-colors group">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm group-hover:text-primary transition-colors">shreyasjangam010@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">Ratnagiri, India</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-6 pt-4 border-t border-border">
                  <a
                    href="https://www.linkedin.com/in/shreyas-jangam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all hover:scale-105"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="flex-1 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Skills Card - Interactive */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Skills
                  <span className="text-xs text-muted-foreground font-normal ml-2">(Click to expand)</span>
                </h3>
                <div className="space-y-2">
                  {skillsData.map((skill, index) => {
                    const Icon = skill.icon;
                    const isExpanded = expandedSkill === skill.name;
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                      >
                        <button
                          onClick={() => toggleSkill(skill.name)}
                          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                            isExpanded 
                              ? 'bg-primary/15 border border-primary/30' 
                              : 'bg-muted/50 hover:bg-primary/10 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded-lg ${isExpanded ? 'bg-primary/20' : 'bg-muted'}`}>
                              <Icon className={`w-4 h-4 ${isExpanded ? 'text-primary' : 'text-muted-foreground'}`} />
                            </div>
                            <span className={`text-sm font-medium ${isExpanded ? 'text-primary' : 'text-foreground'}`}>
                              {skill.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                              {skill.level}
                            </span>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className={`w-4 h-4 ${isExpanded ? 'text-primary' : 'text-muted-foreground'}`} />
                            </motion.div>
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-2 pl-4 space-y-1.5">
                                {skill.libraries.map((lib, libIndex) => (
                                  <motion.div
                                    key={lib.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: libIndex * 0.05 }}
                                    className="flex items-start gap-2 p-2 rounded-lg bg-background/50 border border-border/50"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                    <div>
                                      <span className="text-xs font-medium text-foreground">{lib.name}</span>
                                      <p className="text-[10px] text-muted-foreground">{lib.desc}</p>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Key Achievement */}
              <div className="glass-card p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Key Achievement
                </h3>
                <div className="relative">
                  <Award className="w-12 h-12 text-primary/20 absolute -top-2 -right-2" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievements[0]}
                  </p>
                </div>
              </div>

              {/* Experiments */}
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-primary" />
                  Experiments
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experiments.map((exp, index) => (
                    <motion.span
                      key={exp}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.03 }}
                      className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      {exp}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* About Section */}
              <div className="glass-card p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
                <h3 className="font-display font-semibold text-xl mb-4">About Me</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enthusiastic web application developer with a strong foundation in programming 
                  and a focus on creating innovative, user-centric digital solutions. Skilled in 
                  developing efficient, responsive web applications and passionate about 
                  advancing technical skills in the evolving world of technology. Fresh in the field 
                  yet driven to leverage knowledge in programming and web development to 
                  deliver high-quality results. Known for a proactive approach to problem-solving 
                  and continuously seeking to expand expertise in web technologies, frameworks, 
                  and design principles.
                </p>
              </div>

              {/* Experience */}
              <div className="glass-card p-8">
                <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Experience
                </h3>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={exp.title + exp.company}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-display font-semibold text-lg">{exp.title}</h4>
                            {exp.isCurrent && (
                              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-green-500/20 text-green-500 border border-green-500/30 animate-pulse">
                                Currently Working
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-primary">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-2 pl-4">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground relative before:content-['•'] before:absolute before:-left-3 before:text-primary">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      {index < experience.length - 1 && (
                        <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="glass-card p-8">
                <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className={`p-5 rounded-xl border ${edu.highlight ? 'bg-gradient-to-br from-primary/10 to-secondary/5 border-primary/30' : 'bg-muted/30 border-border'}`}
                    >
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </div>
                      <h4 className="font-display font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-md ${edu.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                          {edu.grade}
                        </span>
                        {edu.highlight && (
                          <Trophy className="w-4 h-4 text-yellow-500" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="glass-card p-8">
                <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-primary" />
                  Projects
                </h3>
                <div className="grid gap-4">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="p-5 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-all group"
                    >
                      <h4 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {project.description}
                      </p>
                      {project.tech && (
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-[10px] font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Resume;
