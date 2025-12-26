import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, User, Share2 } from "lucide-react";
import { getArticleById } from "@/data/articles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(id || "");
  const { toast } = useToast();

  if (!article) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container-custom pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/articles">
            <Button variant="glass">Back to Articles</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: article.title,
        text: article.description,
        url: window.location.href,
      });
    } catch {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Article link has been copied to clipboard.",
      });
    }
  };

  // Convert markdown-style content to formatted sections
  const formatContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let isInList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            {listItems.map((item, i) => (
              <li key={i} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
      isInList = false;
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold mt-10 mb-4 gradient-text">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-semibold mt-8 mb-3 text-foreground">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('- ') || trimmedLine.match(/^\d+\.\s/)) {
        isInList = true;
        const itemText = trimmedLine.replace(/^[-\d.]\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1');
        listItems.push(itemText);
      } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        flushList();
        elements.push(
          <p key={index} className="font-semibold text-foreground mb-4">
            {trimmedLine.replace(/\*\*/g, '')}
          </p>
        );
      } else if (trimmedLine.startsWith('↳ ')) {
        flushList();
        elements.push(
          <div key={index} className="flex items-start gap-3 mb-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
            <span className="text-primary font-bold">↳</span>
            <p className="text-muted-foreground">
              {trimmedLine.replace('↳ ', '').replace(/\*\*(.*?)\*\*/g, '$1')}
            </p>
          </div>
        );
      } else if (trimmedLine) {
        flushList();
        elements.push(
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {trimmedLine.replace(/\*\*(.*?)\*\*/g, '$1')}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/articles" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-white mb-6">
              {article.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-primary font-medium mb-6">
              {article.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} read</span>
              </div>
              <Button variant="ghost" size="sm" onClick={handleShare} className="ml-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container-custom">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {formatContent(article.content)}
            </div>
          </motion.article>

          {/* Author Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto mt-16 p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
                {article.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{article.author}</h3>
                <p className="text-muted-foreground">Web Developer & AI ML Researcher</p>
              </div>
            </div>
          </motion.div>

          {/* Back to Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/articles">
              <Button variant="glass" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Browse More Articles
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ArticleDetail;
