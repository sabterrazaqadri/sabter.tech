"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <motion.section
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Sabter Iqbal
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-primary">
          Full-Stack Developer & AI Enthusiast
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl">
          I build modern, performant web apps and integrate AI to solve real-world problems. Passionate about clean code, beautiful UI, and continuous learning.
        </p>

        <div className="flex gap-4 mt-2">
          <Button asChild>
            <a href="/SabterIqbal_Resume.pdf" download>
              Download Resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>

      {/* Avatar Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <Avatar className="w-40 h-40 shadow-lg border-4 border-primary ">
          <Image src="/img2.jpg" alt="Sabter Iqbal" width={150} height={0} className="object-cover" />
          {/* <AvatarFallback>SI</AvatarFallback> */}
        </Avatar>

        
      </motion.div>
    </motion.section>
  );
}
