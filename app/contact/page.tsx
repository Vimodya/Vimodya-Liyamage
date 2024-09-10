// pages/contact.tsx
"use client";

import { FC, useEffect } from "react";
import gsap from "gsap";

const Contact: FC = () => {
  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      ".contact-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-lg w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6">Contact Me</h1>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 contact-item">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18v18H3V3z"
              />
            </svg>
            <a
              href="mailto:chamodivimodya@gmail.com"
              className="text-blue-400 hover:underline"
            >
              chamodivimodya@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4 contact-item">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18v18H3V3z"
              />
            </svg>
            <a
              href="tel:+947044951842"
              className="text-blue-400 hover:underline"
            >
              +94 70 4495 1842
            </a>
          </div>
          <div className="flex items-center space-x-4 contact-item">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18v18H3V3z"
              />
            </svg>
            <a
              href="https://linkedin.com/Vimodya"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center space-x-4 contact-item">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18v18H3V3z"
              />
            </svg>
            <a
              href="https://github.com/Vimodya"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center space-x-4 contact-item">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18v18H3V3z"
              />
            </svg>
            <a
              href="https://www.hackerrank.com/Vimodya"
              className="text-blue-400 hover:underline"
            >
              HackerRank
            </a>
          </div>
          <div className="flex items-center space-x-4 contact-item">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18v18H3V3z"
              />
            </svg>
            <a
              href="https://Vimodya.me"
              className="text-blue-400 hover:underline"
            >
              Vimodya.me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
