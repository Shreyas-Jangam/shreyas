import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, FileText, Users, Calendar, BookOpen, Award, ExternalLink, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

const ResearchPaper = () => {
  const authors = [
    { name: "Akshay Shetye", email: "akshay.shetye@famt.ac.in" },
    { name: "Shreyas Deepak Jangam", email: "shreyasjangam010@gmail.com", corresponding: true },
    { name: "Hashim Shakeel Hawaldar", email: "hashimhawaldar2002@gmail.com" },
    { name: "Hruturaj Dhakalu Davri", email: "davariruturaj1513@gmail.com" },
    { name: "Suraj Maruti Sawant", email: "sawantsuraj8413@gmail.com" },
  ];

  const keywords = [
    "Blockchain",
    "Smart contract",
    "Transaction tracking",
    "Donation tracking",
    "Fund tracking",
    "Solidity",
  ];

  const highlights = [
    "Novel approach combining blockchain immutability with smart contract automation",
    "Development of smart contracts for secure transaction recording and timestamping",
    "Case studies from healthcare, banking, and supply chain management",
    "Real-time tracking and transparency for charitable donations",
    "Automated disbursement and accountability through predefined rules",
  ];

  return (
    <>
      <Helmet>
        <title>Research Paper - Transaction Tracking Using Blockchain Smart Contracts | Shreyas Jangam</title>
        <meta name="description" content="Published research paper on leveraging smart contracts to enhance transaction tracking in blockchain systems. National Conference on Futuristic Trends in Engineering & Applied Science 2024." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_50%)]" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>

              {/* Conference Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
              >
                <Award className="w-4 h-4" />
                <span>Published Research Paper</span>
              </motion.div>

              {/* Paper Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                <span className="gradient-text">Transaction Tracking</span>
                <br />
                <span className="text-foreground">Using Blockchain Smart Contracts</span>
              </h1>

              {/* Conference Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6 rounded-2xl max-w-3xl mb-8"
              >
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Published In</p>
                      <p className="font-medium text-sm">National Conference on Futuristic Trends in Engineering & Applied Science 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Publication Date</p>
                      <p className="font-medium text-sm">June 2024 | Vol. 47, Special Issue No. 2</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Institution */}
              <p className="text-muted-foreground text-lg mb-8">
                Department of Computer Science & Engineering<br />
                <span className="text-primary font-medium">Finolex Academy of Management and Technology</span>, Ratnagiri, Maharashtra
              </p>
            </motion.div>
          </div>
        </section>

        {/* Authors Section */}
        <section className="py-12 border-y border-border/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-display font-semibold">Authors</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {authors.map((author, index) => (
                  <motion.div
                    key={author.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`glass-card-hover p-4 rounded-xl ${
                      author.corresponding ? "border-primary/50 bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {author.name}
                          {author.corresponding && <span className="text-primary ml-1">*</span>}
                        </h3>
                        <p className="text-sm text-muted-foreground">{author.email}</p>
                      </div>
                      {author.corresponding && (
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                          Corresponding
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Abstract Section */}
        <section className="py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-display font-semibold">Abstract</h2>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  The objective of this research is to leverage smart contracts to enhance transaction tracking in blockchain systems. We propose a novel approach that combines the immutability and transparency of blockchain with the automation capabilities of smart contracts to create a robust and efficient transaction tracking system.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  The core components of our approach include the development of smart contracts that record transaction details, timestamp them securely, and trigger predefined actions based on predefined conditions. The paper discusses the key benefits of using smart contracts for transaction tracking, such as enhancing security, cutting down on mistakes, doing away with the need for middlemen, and raising overall monitoring process efficiency.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  Furthermore, we delve into the technical implementation details, including the choice of blockchain platform, smart contract development, and integration with existing systems. To validate the effectiveness of our proposed approach, we present case studies and real-world examples from several sectors, including healthcare, banking, and supply chain management.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Keywords Section */}
        <section className="py-12 bg-muted/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Tag className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-display font-semibold">Keywords</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {keywords.map((keyword, index) => (
                  <motion.span
                    key={keyword}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {keyword}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-display font-semibold mb-8 text-center">
                <span className="gradient-text">Research Highlights</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card-hover p-6 rounded-xl flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
                    </div>
                    <p className="text-muted-foreground">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Publication Info */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-display font-semibold mb-4">Publication Details</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="text-foreground font-medium">Journal:</span> ISTE Online (www.isteonline.in)</p>
                <p><span className="text-foreground font-medium">Volume:</span> 47</p>
                <p><span className="text-foreground font-medium">Issue:</span> Special Issue No. 2</p>
                <p><span className="text-foreground font-medium">Pages:</span> 245-249</p>
                <p><span className="text-foreground font-medium">Date:</span> June 2024</p>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="https://www.ijteonline.in/special_issues" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Full Paper
                </Button>
              </a>
                <Link to="/#contact">
                  <Button variant="glass">Contact Author</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ResearchPaper;
