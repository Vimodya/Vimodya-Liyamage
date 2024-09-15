"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// Define the type for each project
interface ProjectItem {
  title: string;
  description: string;
  duration: string;
  technologies: string;
  imageUrl: string;
  vercelUrl: string;
}

export default function Projects() {
  const projectRef = useRef<Array<HTMLDivElement | null>>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  // Apply GSAP animation for a staggered effect on the project cards
  useEffect(() => {
    if (projectRef.current.length > 0) {
      gsap.fromTo(
        projectRef.current,
        {
          opacity: 0,
          x: (index) => (index % 2 === 0 ? -100 : 100), // Alternate direction
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.3,
          duration: 1,
          ease: "power2.out",
        }
      );
    }
  }, []);

  const projectList: ProjectItem[] = [
    {
      title: "EventsNow",
      description:
        "Contributed to a booking platform that is transforming the way people book venues. Developed features for seamless booking and management.",
      duration: "Dec 2023 - July 2024",
      technologies: "React, Node.js, MongoDB, Tailwind CSS",
      imageUrl: "/event.png",
      vercelUrl: "https://events-now.vercel.app/",
    },
    {
      title: "Color The World",
      description:
        "Developed a feature-rich blogging platform that allows users to share their thoughts and expertise through blogs.",
      duration: "Jan 2022 - Oct 2022",
      technologies: "Max, MongoDB, TypeScript, Vercel",
      imageUrl: "/blog.png",
      vercelUrl: "https://color-the-world.vercel.app/home",
    },
    {
      title: "NovaCart",
      description:
        "Developed an e-commerce platform for product spotlights, with added functionalities like product comparison and cart management.",
      duration: "Mar 2021 - Nov 2021",
      technologies: "Angular, Node.js, MongoDB",
      imageUrl: "/novacart.png",
      vercelUrl: "",
    },
    {
      title: "Wall Art Machine",
      description:
        "Developed a hardware solution to control a wall art painting machine, automating intricate art designs.",
      duration: "Jul 2020 - Dec 2020",
      technologies: "C, Arduino",
      imageUrl: "/path-to-image4.jpg",
      vercelUrl: "",
    },
  ];

  const openModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="min-h-screen bg-[#001010] text-white p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold mb-8 text-center text-[#F9EBE9]">
          Projects
        </h1>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                projectRef.current[index] = el;
              }}
              className="bg-[#001010] border-2 border-[#F9EBE9] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
              style={{ width: "320px", height: "420px" }}
            >
              {/* Project Image */}
              <a
                href={project.vercelUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </a>

              {/* Project Title */}
              <h2 className="text-2xl font-bold text-[#F9EBE9] text-center">
                {project.title}
              </h2>

              {/* Details Button */}
              <button
                onClick={() => openModal(project)}
                className="mt-4 bg-black border-2 border-[#DE3163] text-white px-4 py-2 rounded-full hover:bg-[#F9EBE9] hover:text-black transition duration-300"
              >
                Details
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-[#001010] border-2 border-[#f9ebe9] p-8 rounded-xl shadow-lg text-white max-w-lg w-full relative "
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold text-[#F9EBE9] mb-8">
                {selectedProject.title}
              </h2>
              <p className="text-lg text-[#9CA3AF] mb-8">
                {selectedProject.description}
              </p>
              <p className="text-md text-white mb-8">
                <strong>Duration:</strong> {selectedProject.duration}
              </p>
              <p className="text-md text-[#DE3163]">
                <strong>Technologies:</strong> {selectedProject.technologies}
              </p>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-xl bg-transparent text-white hover:text-[#DE3163] transition"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
