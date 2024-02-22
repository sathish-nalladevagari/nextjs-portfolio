import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated ",
    location: "Palamner, India",
    description:
      "I graduated after 7 months of studying. I immediately found a job as a software developer intern.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
 
  {
    title: "Software Developer intern",
    location: "Banglore, Karnataka",
    description:
      "I'm now a  intern working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Online Learning Platform",
    description:
      "I have developed online learning platform which lets users to purchase and do the course. I implemented Dashboard, Analytics, Checkout.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma","stripe"],
    imageUrl: "https://media.istockphoto.com/id/1225782564/photo/hispanic-teen-girl-school-student-wear-headphones-hold-smartphone-using-distance-learning.webp?b=1&s=170667a&w=0&k=20&c=U5Tn9KWRPnm4QSPveOg7n7r71Ndus-zyyFCo1K0tZnI=",
    link : "https://lms-platform-gules.vercel.app/" ,
  },
  {
    title: "Social View",
    description:
      "I have developed a social media clone in my final year while learning MERN Stack.",
    tags: ["React", "Firebase", "TailwindCSS"],
    imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9ubGluZSUyMHByb2plY3RzfGVufDB8fDB8fHww",
    link : "https://social-view-87e9c.web.app/" ,
  },
  {
    title: "Design of Virtual Sensors : Machine Learning",
    description:
      "Implemented machine learning-based virtual sensors for environmental parameter prediction.",
    tags: ["Python", "Matplotlib", "Scikit-Learn", "Pandas","Numpy"],
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwcHJvamVjdHN8ZW58MHx8MHx8fDA%3D",
    link : "https://github.com/sathish-nalladevagari/Design-of-virtual-sensors-for-environmental-analysis" ,
  },
  {
    title: "Drum Kit ",
    description:
      "A basic web game",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9ubGluZSUyMHByb2plY3RzfGVufDB8fDB8fHww",
    link : "https://sathish-nalladevagari.github.io/Drum-kit/" ,
  },
  
  {
    title: "A basic Todo App",
    description:
      "MERN Todo App",
    tags: ["React", "Nodejs", "ExpressJS",],
    imageUrl: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9ubGluZSUyMHByb2plY3RzfGVufDB8fDB8fHww",
    link : "https://crudtaskman.netlify.app/" ,
  },
  {
    title: "A Weather Web app",
    description:
      "MERN Weather App",
    tags: ["React", "Nodejs","WeatherApi", "ExpressJS",],
    imageUrl: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9ubGluZSUyMHByb2plY3RzfGVufDB8fDB8fHww",
    link : "https://weatherapp-ayn9.onrender.com/" ,
  },
  {
    title: "Portfolio",
    description:
      "My React Portfolio",
    tags: ["React"],
    imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9ubGluZSUyMHByb2plY3QlMjBwb3J0Zm9saW98ZW58MHx8MHx8fDA%3D",
    link : "https://sathish-reddy.netlify.app/" ,
  },
  {
    title: "Portfolio",
    description:
      "My HTML CSS JS Portfolio",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9ubGluZSUyMHByb2plY3QlMjBwb3J0Zm9saW98ZW58MHx8MHx8fDA%3D",
    link : "https://sathish-nalladevagari.github.io/portfolio/" ,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
