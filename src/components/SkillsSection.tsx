import React from "react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

function SkillTag({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.05 * index,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-md text-sm border border-purple-500/20 shadow-sm"
    >
      {skill}
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 bg-gradient-to-b from-background/80 to-muted/30"
    >
      {/* Use the SAME max-w and padding as your other sections (here: max-w-4xl). 
          Change to max-w-4xl if your other sections use that. */}
      <div className="max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          {/* keep heading alignment consistent with other sections */}
          <h2 className="text-2xl font-bold mb-8 text-left"> Skills</h2>
        </MotionWrapper>

        {/* gradient container that spans same width as other sections */}
        <div
          className={
            "w-full rounded-2xl p-6 bg-gradient-to-r from-purple-500/10 via-background/50 to-purple-500/10 " +
            "backdrop-blur-md border border-purple-500/20 shadow-lg ml-0"
          }
          /* If you still need to nudge the whole box slightly left, uncomment the transform line below:
             (make sure Tailwind JIT is active for the `-translate-x-4` utility)
             className += " transform md:-translate-x-4"
          */
        >
          {/* this flex row WILL be left-aligned */}
          <div className="flex flex-wrap gap-2 justify-start items-start">
            {skills.map((skill, index) => (
              <SkillTag key={skill} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
