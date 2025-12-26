import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpeg";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#articles", label: "Articles" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = "/" + href;
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2 sm:py-3 backdrop-blur-xl bg-background/80 border-b border-border/50"
            : "py-3 sm:py-4 md:py-6 bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="relative group flex items-center gap-2 sm:gap-3">
            <img 
              src={profileImage} 
              alt="Shreyas Jangam" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-primary/50"
            />
            <motion.span
              className="text-base sm:text-lg md:text-xl font-display font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="hidden xs:inline">Shreyas Jangam</span>
              <span className="xs:hidden">SJ</span>
            </motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <Link to="/research-paper">
              <Button variant="outline" size="sm" className="mr-2">
                Research
              </Button>
            </Link>
            <Link to="/resume">
              <Button variant="glass" size="sm">
                Resume
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <nav className="absolute right-0 top-0 h-full w-64 bg-card border-l border-border p-8 pt-24 flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: index * 0.1 }}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
          <Link to="/research-paper" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="outline" className="w-full mt-4">
              Research Paper
            </Button>
          </Link>
          <Link to="/resume" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="hero" className="w-full mt-2">
              Resume
            </Button>
          </Link>
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;
