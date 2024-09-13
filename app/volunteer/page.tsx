"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface VolunteerItem {
  role: string;
  organization: string;
  duration: string;
}

export default function Volunteer() {
  const volunteerRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (volunteerRef.current.length > 0) {
      gsap.fromTo(
        volunteerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.3, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  const volunteerList: VolunteerItem[] = [
    {
      role: "Batch Representative",
      organization: "University of Moratuwa",
      duration: "July 2023 - July 2024",
    },
    {
      role: "Editorial Committee",
      organization: "Rotaract Club, University of Moratuwa",
      duration: "2023",
    },
    {
      role: "Event Coordination Committee",
      organization: "WIE, University of Moratuwa",
      duration: "2024",
    },
    {
      role: "Editorial Committee",
      organization: " IEEE Robotics and Automation Society of UOM",
      duration: "2024",
    },
  ];

  return (
    <section className="min-h-screen bg-[#000000] text-white p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-semibold mb-8">Volunteer Experience</h1>

        <div className="space-y-8">
          {volunteerList.map((volunteer, index) => (
            <div
              key={index}
              ref={(el) => {
                volunteerRef.current[index] = el;
              }}
              className="bg-[#1A2038] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold">{volunteer.role}</h2>
              <p className="mt-2 text-[#9CA3AF]">{volunteer.organization}</p>
              <p className="mt-2 text-[#FFC0CB] font-semibold">
                {volunteer.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
