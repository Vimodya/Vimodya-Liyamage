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
  const sidebarRef = useRef<HTMLDivElement>(null); // Ref for bottom bar
  const largeImageRef = useRef<HTMLDivElement>(null); // Ref for larger image
  const smallImageRef = useRef<HTMLDivElement>(null); // Ref for smaller top-left image
  const [showButtons, setShowButtons] = useState(false); // State for showing buttons
  const [showName, setShowName] = useState(true); // State for showing name and text initially

  useEffect(() => {
    // Animate large image and name initially
    if (largeImageRef.current) {
      gsap.fromTo(
        largeImageRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      );
    }

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

  // Handle arrow click to hide name/text and show buttons
  const handleArrowClick = () => {
    setShowName(false);
    setShowButtons(true);
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
      {/* Small Profile Image (Top Left) */}
      <div
        ref={smallImageRef}
        className="absolute top-4 left-4 w-20 h-20 rounded-full overflow-hidden"
      >
        <Image
          src="/IMG_0615.jpg"
          alt="Profile Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Name, IT Undergraduate, and Large Profile Image */}
      {showName && (
        <div className="text-center">
          <div
            ref={largeImageRef}
            className="w-40 h-40 rounded-full overflow-hidden mx-auto"
          >
            <Image
              src="/IMG_0615.jpg"
              alt="Large Profile Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1
            ref={nameRef}
            className="mt-4 text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DE3163] to-[#F9EBE9] whitespace-nowrap"
          >
            Vimodya Liyanage
          </h1>
          <p className="mt-4 text-lg md:text-2xl">IT Undergraduate</p>
        </div>
      )}

      {/* Buttons */}
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
        </div>
      )}

      {/* Arrow to trigger buttons */}
      {!showButtons && (
        <div
          className="absolute bottom-14 cursor-pointer"
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
      )}

      {/* Bottom Bar with Links */}
      <div
        ref={sidebarRef}
        className="absolute bottom-0 left-[670px] w-48 flex justify-center items-center space-x-6 p-4 bg-[#001010] border-t border-white"
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
    </section>
  );
}
