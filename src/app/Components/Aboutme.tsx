"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMeSection() {
  return (
    <motion.section
    id="about"
      className="flex flex-col md:flex-row items-center gap-8 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="flex-shrink-0 " >
        <Avatar className="w-28 h-28 border-2 border-primary">
          <Image src="/img1.jpg" alt="About Sabter" width={112} height={112} />
          <AvatarFallback>SI</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-2">About Me</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          I&apos;m a passionate developer with a knack for building scalable, modern web applications. My strengths include:
        </p>
        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
          <li>Modern web app development (React, Next.js, TypeScript)</li>
          <li>AI integration (OpenAI, Gemini, custom LLMs)</li>
          <li>Clean, maintainable code and beautiful UI</li>
        </ul>
      </div>
    </motion.section>
  );
}
