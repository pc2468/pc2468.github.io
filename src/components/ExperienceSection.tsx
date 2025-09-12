import { experience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Briefcase, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-12 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block">
            <motion.span
              className="inline-block mr-2"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            />
            Experience
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.type === "work" ? item.company + item.period : item.title}
              title={
                item.type === "work"
                  ? `👨‍💻 ${item.position} | ${item.company}`
                  : `🚀 ${item.title}`
              }
              subtitle={
                item.type === "work"
                  ? `🌍 ${item.location}`
                  : item.github
                  ? `🔗 ${item.github}`
                  : ""
              }
              date={item.type === "work" ? `📅 ${item.period}` : ""}
              isLast={index === experience.length - 1}
              index={index}
            >
              <motion.div
                className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                    {item.type === "work" ? (
                      <Briefcase className="h-4 w-4 text-purple-500" />
                    ) : (
                      <Code2 className="h-4 w-4 text-purple-500" />
                    )}
                  </div>
                  <h4 className="text-sm font-medium">
                    {item.type === "work"
                      ? "Key Achievements"
                      : "Project Highlights"}
                  </h4>
                </div>

                <ul className="list-none ml-4 space-y-2 text-sm">
                  {(item.type === "work"
                    ? item.achievements
                    : item.description
                  ).map((point, i) => (
                    <motion.li
                      key={i}
                      className="text-muted-foreground relative pl-6"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
