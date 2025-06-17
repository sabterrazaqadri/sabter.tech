"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
    { name: "Python", icon: "/skills/python.svg" },
    { name: "OpenAI SDK", icon: "/skills/openai.svg" },
  { name: "React", icon: "/skills/react.svg" },
  { name: "Next.js", icon: "/skills/nextjs.svg" },
  { name: "TypeScript", icon: "/skills/typescript.svg" },
  { name: "Tailwind", icon: "/skills/tailwind.svg" },
  { name: "Gemini API", icon: "/skills/gemini.svg" },
  { name: "Sanity", icon: "/skills/sanity.svg" },
  { name: "Vercel", icon: "/skills/vercel.svg" },
  { name: "Node.js", icon: "/skills/nodejs.svg" },
];

export default function SkillsSection() {
  return (
    <motion.section
      className="py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-semibold mb-6 text-center">Skills</h3>
      <TooltipProvider>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <Card className="flex flex-col items-center justify-center p-4 hover:shadow-lg transition">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={50}
                    height={50}
                    className="mb-2"
                  />
                  <span className="font-medium">{skill.name}</span>
                </Card>
              </TooltipTrigger>
              <TooltipContent>{skill.name}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </motion.section>
  );
}
