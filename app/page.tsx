"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  const router = useRouter(); // Use Next.js Router
  const nameRef = useRef<HTMLHeadingElement>(null); // Ref for name element
  const buttonsRef = useRef<HTMLDivElement>(null); // Ref for buttons container
  const sidebarRef = useRef<HTMLDivElement>(null); // Ref for sidebar
  const [isSidebarMoving, setIsSidebarMoving] = useState(false); // State to track sidebar movement

  useEffect(() => {
    // Animate text and buttons
    if (nameRef.current) {
      const text = nameRef.current.innerText;
      nameRef.current.innerHTML = text
        .split("")
        .map((letter) => `<span class="letter">${letter}</span>`)
        .join("");

      gsap.fromTo(
        ".letter",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }

    if (buttonsRef.current) {
      const buttons = buttonsRef.current.children;
      gsap.fromTo(
        buttons,
        { opacity: 0, x: (index) => (index % 2 === 0 ? 100 : -100) },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, []);

  // Handle the "Get in touch" button click
  const handleGetInTouchClick = () => {
    setIsSidebarMoving(true); // Start moving the sidebar

    // Animate sidebar to the middle of the screen
    gsap.to(sidebarRef.current, {
      x: window.innerWidth / 4 - 50,
      y: window.innerHeight / 4 - 10,
      scale: 1.5, // Enlarge the sidebar
      borderColor: "yellow", // Highlight the border
      duration: 0.2, // Animation duration
      ease: "power2.out",
      onComplete: () => {
        // After a short delay, return the sidebar to its original position
        setTimeout(() => {
          gsap.to(sidebarRef.current, {
            x: 0,
            y: 0,
            scale: 1,
            borderColor: "white", // Return border color to original
            duration: 0.2,
            ease: "power2.out",
          });
          setIsSidebarMoving(false); // Stop movement
        }, 500); // Keep the sidebar in the middle for 3 seconds
      },
    });
  };

  const handleButtonClick = () => {
    router.push("/about");
  };
  const handleButtonClick2 = () => {
    router.push("/projects");
  };
  const handleButtonClick3 = () => {
    router.push("/volunteer");
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-[#001010] text-white">
      <div className="absolute top-4 left-4 w-10 h-10 rounded-full overflow-hidden">
        <Image
          src="/IMG_0615.jpg"
          alt="Profile Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Hero Text */}
      <div className="text-center">
        <h1
          ref={nameRef}
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DE3163] to-[#F9EBE9] whitespace-nowrap"
        >
          Vimodya Liyanage
        </h1>
        <p className="mt-4 text-lg md:text-2xl">IT Undergraduate</p>

        <div
          ref={buttonsRef}
          className="flex flex-col ms-52 w-1/2 mt-6 space-x-4"
        >
          <button
            className="mt-6 px-6 py-3 bg-transparent border-2 border-white rounded-full hover:bg-[#F9EBE9] hover:text-black transition duration-300"
            onClick={handleButtonClick}
          >
            Education →
          </button>
          <button
            className="mt-6 px-6 py-3 bg-transparent border-2 border-white rounded-full hover:bg-[#F9EBE9] hover:text-black transition duration-300"
            onClick={handleButtonClick2}
          >
            Projects →
          </button>
          <button
            className="mt-6 px-6 py-3 bg-transparent border-2 border-white rounded-full hover:bg-[#F9EBE9] hover:text-black transition duration-300"
            onClick={handleButtonClick3}
          >
            Volunteer →
          </button>
          <button
            className="mt-6 px-6 py-3 bg-transparent border-2 border-white rounded-full hover:bg-[#F9EBE9] hover:text-black transition duration-300"
            onClick={handleGetInTouchClick}
          >
            Get in touch →
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 border-2 border-white rounded-full p-4 transition duration-500 ${
          isSidebarMoving ? "highlighted" : ""
        }`}
      >
        <a
          href="mailto:chamodivimodya@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-[#DE3163] transition duration-300"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Vimodya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-[#DE3163] transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/chamodi-liyanage-8bb852270/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-pink-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.hackerrank.com/profile/Chamodi_HM"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-[#DE3163] transition duration-300"
        >
          <FaHackerrank />
        </a>
      </div>

      <div className="absolute bottom-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          className="w-6 h-6 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
