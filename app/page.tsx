"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from "react-icons/fa";

export default function HeroSection() {
  const router = useRouter();
  const nameRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null); // Ref for image
  const [isSidebarMoving, setIsSidebarMoving] = useState(false);
  const [showButtons, setShowButtons] = useState(false); // State for buttons visibility

  useEffect(() => {
    // Animate image first
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      );
    }

    // Animate name after the image
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
  }, []);

  useEffect(() => {
    if (showButtons && buttonsRef.current) {
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
  }, [showButtons]);

  // Handle the "Get in touch" button click
  const handleGetInTouchClick = () => {
    setIsSidebarMoving(true);

    gsap.to(sidebarRef.current, {
      x: window.innerWidth / 4 - 50,
      y: window.innerHeight / 4 - 10,
      scale: 1.5,
      borderColor: "yellow",
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
        setTimeout(() => {
          gsap.to(sidebarRef.current, {
            x: 0,
            y: 0,
            scale: 1,
            borderColor: "white",
            duration: 0.2,
            ease: "power2.out",
          });
          setIsSidebarMoving(false);
        }, 500);
      },
    });
  };

  // Toggle the visibility of the buttons
  const handleArrowClick = () => {
    setShowButtons((prev) => !prev);
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
      <div
        ref={imageRef}
        className="absolute top-4 left-4 w-20 h-20 rounded-full overflow-hidden"
      >
        <Image
          src="/IMG_0615.jpg"
          alt="Profile Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="text-center">
        <h1
          ref={nameRef}
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DE3163] to-[#F9EBE9] whitespace-nowrap"
        >
          Vimodya Liyanage
        </h1>
        <p className="mt-4 text-lg md:text-2xl">IT Undergraduate</p>

        {showButtons && (
          <div ref={buttonsRef} className="flex flex-col w-1/2 mt-6 space-x-4">
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
        )}
      </div>

      <div
        className="absolute bottom-10 cursor-pointer"
        onClick={handleArrowClick}
      >
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
