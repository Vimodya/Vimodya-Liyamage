"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HeroSection() {
  const router = useRouter(); // Use Next.js Router

  const handleButtonClick = () => {
    router.push("/about"); // Navigate to the About page
  };
  return (
    <section className="relative h-screen flex flex-col justify-center items-center bg-black text-white">
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
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-white">
          Vimodya Liyanage
        </h1>
        <p className="mt-4 text-lg md:text-2xl">IT Undergraduate</p>

        <div className="flex flex-col ms-52 w-1/2  mt-6 space-x-4">
          <button
            className="mt-6 px-6 py-3 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            onClick={handleButtonClick}
          >
            Education →
          </button>
          <button
            className="mt-6 px-6 py-3 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            onClick={handleButtonClick}
          >
            Projects →
          </button>
          <button
            className="mt-6 px-6 py-3 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            onClick={handleButtonClick}
          >
            Volunteer →
          </button>
          <button
            className="mt-6 px-6 py-3 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            onClick={handleButtonClick}
          >
            Get in touch →
          </button>
        </div>
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
