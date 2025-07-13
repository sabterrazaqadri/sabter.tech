"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Github, ExternalLink, Star, Users, Eye } from "lucide-react";

const projects = [
  {
    title: "Digital Mufti",
    description:
      "AI-based app for Islamic question answering using OpenAI SDK and Gemini API. Available on Android.",
    tech: ["OpenAI SDK", "Gemini API", "Chainlit"],
    github: "https://github.com/sabterrazaqadri/Digital-Mufti",
    demo: "https://digital-mufti.onrender.com/",
    category: "AI/ML",
    stars: 45,
    views: 1200,
  },
  {
    title: "Apni Dukan",
    description:
      "An e-commerce platform built with Next.js, Sanity CMS, and Tailwind for selling general, herbal, and cosmetic items across Pakistan.",
    tech: ["Next.js", "Sanity", "TypeScript"],
    github: "https://github.com/sabterrazaqadri/ApniDukan.com",
    demo: "https://apni-dukan-com.vercel.app/",
    category: "E-commerce",
    stars: 78,
    views: 2100,
  },
  {
    title: "Banquet Booking App",
    description:
      "Custom app to manage banquet bookings with date-wise event logs, customer payments, and monthly profit/loss reports.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    github: "https://github.com/sabterrazaqadri/Banquet-Booking-App",
    demo: "https://banquet-booking-app.vercel.app/",
    category: "Business",
    stars: 32,
    views: 890,
  },
  {
    title: "Naat Collection With Admin Panel",
    description:
      "Islamic Naat lyrics portal with admin access powered by Sanity CMS and fully dynamic content control.",
    tech: ["Next.js", "Sanity", "Tailwind", "Node.js"],
    github: "https://github.com/sabterrazaqadri/Naat-Collection-2.0",
    demo: "https://naat-collection-2-0.vercel.app/",
    category: "Content",
    stars: 56,
    views: 1500,
  },
  {
    title: "Zakat Calculator",
    description:
      "Simple web app to calculate Zakat based on user inputs, built with Next.js and Tailwind CSS.",
    tech: ["Gold Rate API", "Next.js", "Tailwind", "Vercel"],
    github: "https://github.com/sabterrazaqadri/zakat-calculator",
    demo: "https://zakat-calculator-nine.vercel.app/",
    category: "Utility",
    stars: 28,
    views: 750,
  },
  {
    title: "Trump Intl: AI Crypto Trading App",
    description:
      "Advanced crypto trading platform with TBC coin, AI-powered auto-trading on top 10 coins, investment plans, and real-time Binance APIs.",
    tech: ["Next.js", "Binance API", "AI", "Tailwind"],
    github: "https://github.com/sabterrazaqadri/whaleintldaywapp.vip",
    demo: "/confidential",
    category: "Finance",
    stars: 95,
    views: 3200,
  },
];

const categories = ["All", "AI/ML", "E-commerce", "Business", "Content", "Utility", "Finance"];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5" />
      <motion.div
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold gradient-text mb-6"
            style={{ y, opacity }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A showcase of my best work, demonstrating expertise in modern web development, 
            AI integration, and innovative solutions that drive real business value.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-lift ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <Card className="group h-full glass border-0 hover:border-primary/20 transition-all duration-500 hover-lift overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium glass">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{project.views}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className="flex-1 group/btn hover-lift"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
                        GitHub
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      size="sm"
                      className="flex-1 group/btn animated-gradient text-white border-0"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work or discuss a potential collaboration?
          </p>
          <motion.button
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover-lift animated-gradient"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
