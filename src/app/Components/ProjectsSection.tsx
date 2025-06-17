"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
    {
      title: "Digital Mufti",
      description:
        "AI-based app for Islamic question answering using OpenAI SDK and Gemini API. Available on Android.",
      tech: ["OpenAI SDK", "Gemini API", "Chainlit"],
      github: "https://github.com/sabterrazaqadri/Digital-Mufti", // Replace with actual
      demo: "https://digital-mufti.onrender.com/", // Replace with actual
    },
  {
    title: "Apni Dukan",
    description:
      "An e-commerce platform built with Next.js, Sanity CMS, and Tailwind for selling general, herbal, and cosmetic items across Pakistan.",
    tech: ["Next.js", "Sanity", "TypeScript"],
    github: "https://github.com/sabterrazaqadri/ApniDukan.com", // Replace with actual
    demo: "https://apni-dukan-com.vercel.app/", // Replace with actual
  },
  {
    title: "Banquet Booking App",
    description:
      "Custom app to manage banquet bookings with date-wise event logs, customer payments, and monthly profit/loss reports.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    github: "https://github.com/sabterrazaqadri/Banquet-Booking-App", // Replace with actual
    demo: "https://banquet-booking-app.vercel.app/", // Replace with actual
},
  {
    title: "Naat Collection With Admin Panel",
    description:
      "Islamic Naat lyrics portal with admin access powered by Sanity CMS and fully dynamic content control.",
    tech: ["Next.js", "Sanity", "Tailwind", "Node.js"],
    github: "https://github.com/sabterrazaqadri/Naat-Collection-2.0", // Replace with actual
    demo: "https://naat-collection-2-0.vercel.app/", // Replace with actual
  },
  {
    title: "Zakat Calculator",
    description:
      "Simple web app to calculate Zakat based on user inputs, built with Next.js and Tailwind CSS.",
    tech: ["Gold Rate API", "Next.js", "Tailwind", "Vercel"],
    github: "https://github.com/sabterrazaqadri/zakat-calculator", // Replace with actual
    demo: "https://zakat-calculator-nine.vercel.app/", // Replace with actual
  },
  {
    title: "Trump Intl: AI Crypto Trading App",
    description:
      "Advanced crypto trading platform with TBC coin, AI-powered auto-trading on top 10 coins, investment plans, and real-time Binance APIs.",
    tech: ["Next.js", "Binance API", "AI", "Tailwind"],
    github: "https://github.com/sabterrazaqadri/whaleintldaywapp.vip", // Replace with actual
    demo: "/confidential", // Replace with actual
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
    id="projects"
      className="py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      >
      <h2 className="text-2xl font-bold mb-6 text-center" >Featured Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-3 mt-auto">
                <Button asChild variant="outline" size="sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
