"use client";
import { FaGraduationCap } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Define the type for each education item
interface EducationItem {
  degree: string;
  institution: string;
  years: string;
}

export default function Education() {
  // Set types for the ref that holds the list of cards
  const cardRef = useRef<Array<HTMLDivElement | null>>([]);

  // GSAP animation for staggered fade-in effect
  useEffect(() => {
    if (cardRef.current.length > 0) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.3, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  // Education items list
  const educationList: EducationItem[] = [
    {
      degree: "B.Sc. (Hons) in Information Technology",
      institution: "University of Moratuwa",
      years: "2021 - 2026",
    },
    {
      degree: "Advanced Level (A/L)",
      institution: "Thellijjawilla Central College - Matara",
      years: "2020",
    },
    {
      degree: "Ordinary Level (O/L)",
      institution: "Godapitiya Central College - Matara",
      years: "2015",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0A0E27] text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold mb-8">Education</h1>

        {/* Education List */}
        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <div
              key={index}
              ref={(el) => {
                // Use a callback to set the refs but do not return anything
                cardRef.current[index] = el;
              }}
              className="bg-[#1A2038] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center">
                <FaGraduationCap className="text-4xl text-[#6EE7B7] mr-6" />
                <div>
                  <h2 className="text-2xl font-bold">{edu.degree}</h2>
                  <p className="text-xl text-[#9CA3AF]">{edu.institution}</p>
                  <p className="text-md text-[#6EE7B7] mt-1">{edu.years}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
