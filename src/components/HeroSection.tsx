import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="personalInfo" // 👈 IMPORTANT: matches navLinks for "Home"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- Left side (text info) --- */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl font-bold mb-2 whitespace-nowrap"
              variants={childVariants}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-6"
              variants={childVariants}
            >
              Physics Student
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center text-sm text-muted-foreground"
                variants={childVariants}
              >
                <MapPin className="h-4 w-4 mr-2" />
                {personalInfo.location}
              </motion.div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
              >
                <Mail className="h-4 w-4 mr-2" />
                {personalInfo.email}
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </motion.a>
            </motion.div>
          </div>

         {/* --- Right side (PDF preview instead of profile pic) --- */}
        <motion.div
          className="mt-6 md:mt-0 flex justify-center w-full md:w-[600px]"
          variants={childVariants}
        >
          {/* Gradient border wrapper */}
          <div className="relative rounded-2xl p-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg">
            {/* Glass container */}
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-background/70 backdrop-blur-md">
              
              {/* Scrollable wrapper with grab-to-scroll */}
              <div
                className="w-full h-full overflow-auto rounded-2xl bg-black flex items-center justify-center [scrollbar-width:none] [-ms-overflow-style:none] cursor-grab"
                onMouseDown={(e) => {
                  const el = e.currentTarget;
                  el.classList.add("cursor-grabbing");
                  const iframe = el.querySelector("iframe") as HTMLIFrameElement;
                  if (iframe) iframe.style.pointerEvents = "none";
        
                  el.dataset.dragging = "true";
                  el.dataset.startX = e.pageX.toString();
                  el.dataset.startY = e.pageY.toString();
                  el.dataset.scrollLeft = el.scrollLeft.toString();
                  el.dataset.scrollTop = el.scrollTop.toString();
        
                  const onMouseUp = () => {
                    el.dataset.dragging = "false";
                    el.classList.remove("cursor-grabbing");
                    if (iframe) iframe.style.pointerEvents = "auto";
                    window.removeEventListener("mouseup", onMouseUp);
                  };
                  window.addEventListener("mouseup", onMouseUp);
                }}
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  if (el.dataset.dragging !== "true") return;
                  e.preventDefault();
                  const startX = parseInt(el.dataset.startX || "0", 10);
                  const startY = parseInt(el.dataset.startY || "0", 10);
                  const scrollLeft = parseInt(el.dataset.scrollLeft || "0", 10);
                  const scrollTop = parseInt(el.dataset.scrollTop || "0", 10);
                  const walkX = e.pageX - startX;
                  const walkY = e.pageY - startY;
                  el.scrollLeft = scrollLeft - walkX;
                  el.scrollTop = scrollTop - walkY;
                }}
              >
                {/* Universal PDF Viewer (works on mobile + desktop) */}
                <iframe
                  src="https://docs.google.com/gview?embedded=true&url=https://pc2468.github.io/Pc_Msc_Cv.pdf"
                  className="rounded-lg w-full h-full"
                  style={{ border: "none", background: "none" }}
                  title="Curriculum Vitae"
                ></iframe>
              </div>
        
              {/* Hide scrollbars */}
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
        
              {/* Glass Button (always works as fallback) */}
              <a
                href="https://pc2468.github.io/pc_msc_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 px-5 py-2 rounded-xl 
                           bg-white/50 backdrop-blur-md text-black font-medium 
                           border border-black/20 shadow-md
                           hover:bg-gradient-to-r hover:from-purple-200 hover:to-pink-200
                           transition-all duration-300"
              >
                View CV
              </a>
            </div>
          </div>
        </motion.div>

        </motion.div>

        {/* --- Hero description box --- */}
        <MotionWrapper>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-sm">
            <p className="text-muted-foreground pl-4 py-2 mb-4 relative">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              {personalInfo.heroDescription}
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
