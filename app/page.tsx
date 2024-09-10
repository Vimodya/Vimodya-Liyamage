"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  const router = useRouter(); // Use Next.js Router
  const nameRef = useRef<HTMLHeadingElement>(null); // Ref for name element
  const buttonsRef = useRef<HTMLDivElement>(null); // Ref for buttons container

  useEffect(() => {
    if (nameRef.current) {
      // Split text into individual letters
      const text = nameRef.current.innerText;
      nameRef.current.innerHTML = text
        .split("")
        .map((letter) => `<span class="letter">${letter}</span>`)
        .join("");

      // GSAP typewriter animation for each letter
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
        { opacity: 0, x: (index) => (index % 2 === 0 ? 100 : -100) }, // Alternates direction
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

  const handleButtonClick = () => {
    router.push("/about"); // Navigate to the About page
  };
  const handleButtonClick2 = () => {
    router.push("/projects"); // Navigate to the Projects page
  };
  const handleButtonClick3 = () => {
    router.push("/volunteer"); // Navigate to the Volunteer page
  };
  const handleButtonClick4 = () => {
    router.push("/contact"); // Navigate to the Contact page
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
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#906953] to-[#F9EBE9] whitespace-nowrap"
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
            onClick={handleButtonClick4}
          >
            Get in touch →
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 border-2 border-white rounded-full p-4">
        <a
          href="mailto:chamodivimodya@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-[#906953] transition duration-300"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Vimodya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-[#906953] transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/Vimodya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-pink-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://hackerrank.com/Vimodya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-[#906953] transition duration-300"
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
