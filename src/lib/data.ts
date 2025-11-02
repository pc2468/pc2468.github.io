import React from "react";
import { Cpu, Orbit, Telescope, Beaker } from "lucide-react";
// src/lib/data.ts

export const personalInfo = {
  name: "Prathamesh Changde",
  location: "Amaravati, Maharashtra, India",
  email: "changdeprathamesh@gmail.com",
  github: "https://github.com/pc2468",
  linkedin:
    "https://www.linkedin.com/in/prathamesh-changde-81bb30217/",
  profilePicture: "/profile.jpg",
  heroDescription:
    "Since school days, I’ve been hooked on those dazzling simulations of the universe — the kind that sneak you into adventures you never planned for and stretch your brain like an exothermic reaction, with curiosity as the catalyst. From freezing the night sky onto a camera sensor to wrestling with calculus (and learning to love it), I’ve tried to understand that love using bit-driven systems like Linux (I use Arch, btw), where Python and C do most of the heavy lifting. It all began with a simple why, but the real journey has always been about how.",
};

export const education = [
  {
    institution: "Central University of Karnataka",
    location: "Kalaburgi, India",
    degree: "M.Sc in Physics",
    period: "Aug 2024 - Present",
    achievements: [],
  },
  {
    institution: "Savitribai Phule Pune University",
    location: "Pune, India",
    degree: "B.Sc in Physics",
    period: "Jun 2020 - 2023",
    achievements: [
      "Graduated with a CGPA of 8.63.",
      "Dived deep into topics beyond the curriculum through self-study and hands-on projects.",
      "Developed a strong foundation in computational tools for data analysis and simulation.",
    ],
  },
];

// /lib/data.ts
export const Interests = [
  {
    icon: React.createElement(Cpu),
    title: "Computational Astrophysics & Simulation Frameworks",
    description:
      "Exploring the universe through large-scale simulations using frameworks like the Einstein Toolkit, Geant4, CAMB, and Fortran-based numerical codes. I focus on modeling spacetime dynamics, radiation interactions, and cosmological evolution through computational physics.",
  },
  {
    icon: React.createElement(Orbit),
    title: "N-body Simulations of Cosmic Structure",
    description:
      "Simulating large-scale structure formation using tools like CAMB, N-GenIC, and GADGET-4 to study matter clustering, halo evolution, and the growth of the cosmic web.",
  },
  {
    icon: React.createElement(Telescope),
    title: "CMB and Gravitational-Wave Data Analysis",
    description:
      "Analyzing Cosmic Microwave Background anisotropies and gravitational-wave signals using Python-based scientific libraries to probe the early universe and test cosmological models.",
  },
  {
    icon: React.createElement(Beaker),
    title: "Connecting Simulation with Observation",
    description:
      "Bridging theory and observation by developing pipelines that compare simulated data with results from cosmological surveys and multi-messenger experiments.",
  },
] as const;




export const experience = [
   {
    type: "project",
    title: "Geant4 Deployment Script",
    github: "https://github.com/pc2468/Geant4",
    description: [
      "Developed a Python script to fully automate the Geant4 installation and setup process.",
      "Engineered the tool to auto-resolve dependencies, manage build options, and configure system environments.",
      "Designed for cross-platform compatibility, simplifying deployment for researchers and new users.",
    ],
  },
  {
    type: "project",
    title: "Shadow of Kerr Black Holes with Scalar Hair",
    github: "https://github.com/pc2468/Shadow-of-Kerr-Black-Holes",
    description: [
      "Developed a ray-tracing model to visualize the shadows of Kerr black holes with and without scalar hair.",
      "Demonstrated that scalar hair produces smaller and more distorted shadows compared to the standard Kerr metric.",
      "Analyzed the theoretical implications for identifying exotic black holes with the Event Horizon Telescope (EHT).",
    ],
  },
  {
    type: "project",
    title: "Stellar Spectral Classification",
    github: "https://github.com/pc2468/Stellar-Spectral-Classification",
    description: [
      "Wrote a Python script to analyze stellar absorption spectra and estimate star temperatures using Wien's Law.",
      "Classified stars into spectral and luminosity classes based on the Morgan-Keenan (MK) system.",
      "Plotted the classified stars on a Hertzsprung-Russell (H-R) diagram to visualize patterns in stellar evolution.",
    ],
  },
];


export const skills = [
  "C",
  "C++",
  "Linux",
  "Python",
  "LaTeX",
  "Geant4",
  "Mathematica",
  "Scilab",
  "LabVIEW",
  "Numpy",
  "Pandas",
  "Matplotlib",
  "Scipy"
];


export const events = [
  {
    name: "3rd DAE-BRNS School on Very High Energy Astrophysics",
    issuer: "Department of Atomic Energy (DAE), India",
    date: "Oct 2025",
    description:
      "Attended a four-day offline school at Mount Abu, gaining exposure to current research on AGNs, GRBs, Cosmic Rays, and Multi-Messenger Astronomy. Acquired hands-on experience with the TACTIC telescope and learned about gamma-ray detection using HESS, MAGIC, VERITAS, CTA, and the MACE telescope at Hanle, Ladakh.",
  },
  {
    name: "GW Open Data Workshop 2025",
    issuer: "LIGO, Virgo, and KAGRA",
    date: "May 2025",
    description:
      "Participated in a hands-on data challenge using real gravitational-wave data to detect binary black hole signals.",
  },
  {
    name: "Quantum Computing Course",
    issuer: "CDAC Hyderabad & IIT Roorkee",
    date: "May 2025",
    description:
      "Completed a four-week intensive course on quantum fundamentals, algorithms (like Grover's and VQE), and quantum machine learning.",
  },
  {
    name: "Summer Conference on High Energy Physics & Astrophysics",
    issuer: "University of Tennessee (organized by Ibrahim Mirza)",
    date: "May 2025",
    description:
      "Attended sessions on Dark Matter, Supersymmetry, Modified Gravity, and Cosmic Dawn.",
  },
  {
    name: "Quantum Revolution Workshop",
    issuer: "Indian Association of Physics Teachers",
    date: "Feb 2025",
    description:
      "Participated in a workshop on quantum technologies, focusing on programming quantum computers with Qiskit.",
  },
  {
    name: "Early Universe from Home 2025",
    issuer: "International Cosmology Collaboration",
    date: "Feb 2025",
    description:
      "Attended an online conference on early universe cosmology, covering topics like cosmological correlators, phase transitions, and primordial black holes.",
  },
  {
    name: "Space Science and Technology Awareness Training (START-2025)",
    issuer: "IIRS, ISRO",
    date: "Jan 2025",
    description:
      "Completed a 26-day online lecture series on space science and technology through the IIRS distance learning platform.",
  },
  {
    name: "AI Winter School",
    issuer: "Brown University",
    date: "Jan 2025",
    description:
      "Learned about various ways to apply AI and Machine Learning in physics research.",
  },
  {
    name: "High Energy Physics Seminar Series: Unveiling New Frontiers",
    issuer: "Central University of Karnataka",
    date: "Aug–Nov 2024",
    description:
      "Participated in a semester-long seminar series on current research and new developments in high energy physics.",
  },
  {
    name: "PyaR (Python in Research)",
    issuer: "UC Santa Cruz",
    date: "Jan 2022",
    description:
      "Attended an online winter school focused on applying Python in a research context.",
  },
];


// ✅ Navigation with working anchors
export const navLinks = [
  { label: "Home", href: "#personalInfo" },
  { label: "Education", href: "#education" },
  { label: "Interests", href: "#interests" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Events", href: "#events" },
];

// ✅ Helper: smooth scroll to target id
export function scrollToId(id: string) {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
