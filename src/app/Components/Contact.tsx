"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <motion.section
      className="py-16 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg">
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>

      <Button asChild className="mb-4">
        <Link href="/contact">Go to Contact Page</Link>
      </Button>

      <div className="flex gap-6 mt-4">
        <Link
          href="mailto:sabterrazaqadri@gmail.com"
          aria-label="Email"
          className="hover:text-primary transition"
        >
          <Mail size={28} />
        </Link>
        <Link
          href="https://github.com/sabterrazaqadri"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-primary transition"
        >
          <Github size={28} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sabter-iqbal-4a3b702b4/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-primary transition"
        >
          <Linkedin size={28} />
        </Link>
      </div>
    </motion.section>
  );
}
