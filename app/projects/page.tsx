"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Define the type for each project
interface ProjectItem {
  title: string;
  description: string;
  duration: string;
  technologies: string;
  imageUrl: string; // New property for the image URL
}

export default function Projects() {
  // Create a reference for the project cards to apply GSAP animations
  const projectRef = useRef<Array<HTMLDivElement | null>>([]);

  // Apply GSAP animation for a staggered effect on the project cards
  useEffect(() => {
    if (projectRef.current.length > 0) {
      gsap.fromTo(
        projectRef.current,
        { opacity: 0, scale: 0.8, rotation: 10 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          stagger: 0.3,
          duration: 1,
          ease: "back.out(1.7)",
          transformOrigin: "center",
        }
      );
    }
  }, []);

  // List of projects
  const projectList: ProjectItem[] = [
    {
      title: "Bent Managing & Booking System",
      description:
        "Contributed to a booking platform that is transforming the way people book venues. Developed features for seamless booking and management.",
      duration: "Dec 2023 - July 2024",
      technologies: "Technologies: React, Node.js, MongoDB, Tailwind CSS",
      imageUrl: "/event.png", // Add path to the image
    },
    {
      title: "Blogging Platform",
      description:
        "Developed a feature-rich blogging platform that allows users to share their thoughts and expertise through blogs.",
      duration: "Jan 2022 - Oct 2022",
      technologies: "Technologies: Max, MongoDB, TypeScript, Vercel",
      imageUrl: "/blog.png",
    },
    {
      title: "Commerce Platform",
      description:
        "Developed an e-commerce platform for product spotlights, with added functionalities like product comparison and cart management.",
      duration: "Mar 2021 - Nov 2021",
      technologies: "Technologies: Angular, Node.js, MongoDB",
      imageUrl: "/novacart.png",
    },
    {
      title: "Wall Art Printing Machine",
      description:
        "Developed a software solution to control a wall art painting machine, automating intricate art designs.",
      duration: "Jul 2020 - Dec 2020",
      technologies: "Technologies: C, Augmented Reality",
      imageUrl: "/path-to-image4.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0A0E27] text-white p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold mb-8">Projects</h1>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                projectRef.current[index] = el;
              }}
              className="bg-[#1A2038] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
              style={{ width: "300px", height: "400px" }} // Adjusted to have a lower width than height
            >
              {/* Image at the top of the card */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-1/2 object-cover rounded-lg mb-4"
              />

              {/* Project Title */}
              <h2 className="text-xl font-bold text-center">{project.title}</h2>

              {/* Project Details */}
              <p className="mt-2 text-[#9CA3AF] text-center">
                {project.description}
              </p>
              <p className="mt-2 text-[#6EE7B7] font-semibold text-center">
                {project.duration}
              </p>
              <p className="mt-2 text-sm text-[#9CA3AF] text-center">
                {project.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
