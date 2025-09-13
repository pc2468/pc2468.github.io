import React from "react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { Interests } from "@/lib/data";

export default function InterestsSection() {
  return (
    <section
      id="interests"
      className="relative py-20 bg-gradient-to-b from-background via-muted/20 to-background border-t border-border/40"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <MotionWrapper>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-left text-foreground tracking-tight">
            Research Interests
          </h2>
        </MotionWrapper>

        {/* Interests List - Vertical Flow */}
        <div className="flex flex-col gap-10">
          {Interests.map((interest, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative p-8 rounded-3xl border border-white/10
                      bg-transparent backdrop-blur-2xl shadow-lg
                      hover:bg-transparent hover:shadow-2xl
                      transition-all duration-500"
          >
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr 
                            from-white/5 via-transparent to-black/20 opacity-30 pointer-events-none" />

            {/* Icon + Title */}
            <div className="relative flex items-center mb-4">
              {interest.icon && (
                <div className="flex items-center justify-center w-11 h-11 rounded-full 
                                bg-primary/20 text-primary shadow-sm mr-4 
                                backdrop-blur-md border border-white/10">
                  {interest.icon}
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground">
                {interest.title}
              </h3>
            </div>

            {/* Description */}
            <p className="relative text-base leading-relaxed text-foreground/80">
              {interest.description}
            </p>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
