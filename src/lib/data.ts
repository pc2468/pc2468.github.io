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
    title: "Simulating Spacetime",
    description:
      "Exploring the universe through numerical relativity with frameworks like GRChombo. I use high-performance computing to model black hole dynamics, scalar fields, and early-universe evolution.",
  },
  {
    icon: React.createElement(Beaker),
    title: "Black Holes as Physics Labs",
    description:
      "From event horizons to shadows, I study black holes as natural experiments for testing General Relativity and probing new physics beyond the Standard Model.",
  },
  {
    icon: React.createElement(Orbit),
    title: "Dark Matter & Cosmic Structure",
    description:
      "Investigating the invisible scaffolding of the cosmos. I analyze large-scale simulations to uncover how dark matter shaped galaxies, stellar halos, and the cosmic web we observe today.",
  },
  {
    icon: React.createElement(Telescope),
    title: "Bridging Theory and Observation",
    description:
      "My goal is to connect abstract theoretical models with astrophysical data—building simulations that can guide, interpret, and validate discoveries from next-generation surveys.",
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
    name: "Quantum Computing Course",
    issuer: "CDAC Hyderabad & IIT Roorkee",
    date: "May 2025",
    description:
      "Completed a four-week intensive course on quantum fundamentals, algorithms (like Grover's and VQE), and quantum machine learning.",
  },
  {
    name: "GW Open Data Workshop 2025",
    issuer: "LIGO, Virgo, and KAGRA",
    date: "May 2025",
    description:
      "Participated in a hands-on data challenge using real gravitational-wave data to detect binary black hole signals.",
  },
  {
    name: "Summer Conference on High Energy Physics & Astrophysics",
    issuer: "Organized by Ibrahim Mirza, University of Tennessee",
    date: "May 2025",
    description:
      "Attended sessions on Dark Matter, Supersymmetry, Modified Gravity, and Cosmic Dawn.",
  },
  {
    name: "AI Winter School",
    issuer: "Brown University",
    date: "Jan 2025",
    description:
      "Learned about various ways to apply AI and Machine Learning in physics research.",
  },
  {
    name: "PyaR (Python in Research)",
    issuer: "UC Santa Cruz",
    date: "Jan 2022",
    description:
      "Attended an online winter school focused on applying Python in a research context.",
  },
  {
  name: "Early Universe from Home 2025",
  issuer: "International Cosmology Collaboration",
  date: "Feb 2025",
  description:
    "Attended an online conference on early universe cosmology, covering topics like cosmological correlators, phase transitions, and primordial black holes.",
  },
  {
  name: "Quantum Revolution Workshop",
  issuer: "Indian Association of Physics Teachers",
  date: "Feb 2025",
  description:
    "Participated in a workshop on quantum technologies, focusing on programming quantum computers with Qiskit.",
  },
  {
  name: "Space Science and Technology Awareness Training (START-2025)",
  issuer: "IIRS, ISRO",
  date: "Jan 2025",
  description:
    "Completed a 26-day online lecture series on space science and technology through the IIRS distance learning platform.",
  },
  {
  name: "Space Science and Technology Awareness Training (START-2025)",
  issuer: "IIRS, ISRO",
  date: "Jan 2025",
  description:
    "Completed a 26-day online lecture series on space science and technology through the IIRS distance learning platform.",
  },
  {
  "name": "High Energy Physics Seminar Series: Unveiling New Frontiers",
  "issuer": "Central University of Karnataka",
  "date": "Aug-Nov 2024",
  "description": "Participated in a semester-long seminar series on current research and new developments in high energy physics."
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
