import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.28/build/spline-viewer.js';
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        {/* @ts-ignore */}
        <spline-viewer 
          url="https://prod.spline.design/AU9cDYfl7OTWAUVK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="absolute bottom-0 right-0 w-40 h-12 bg-background z-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/80 backdrop-blur-md border border-border/50 mb-6 sm:mb-8"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-foreground">
              Web Dev & AI ML Explorer
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-4 sm:mb-6 text-foreground drop-shadow-lg"
          >
            Building Meaningful
            <br />
            <span className="gradient-text">Digital Products</span>
            <br />& Experiences
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 max-w-2xl mx-auto mb-8 sm:mb-10 text-balance drop-shadow-md px-2"
          >
            I'm a product thinker and innovation-driven creator focused on designing
            powerful digital experiences, smart platforms, and systems that actually
            solve real user problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 sm:gap-6"
          >
            <a href="#projects">
              <Button variant="hero" size="lg" className="group text-sm sm:text-base min-h-[44px]">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                View My Work
              </Button>
            </a>
            
            <motion.a
              href="#about"
              className="flex flex-col items-center gap-1 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider">Scroll</span>
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
