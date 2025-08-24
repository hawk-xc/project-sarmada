"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (scrollTotal > 0) {
      setProgress((window.pageYOffset / scrollTotal) * 100);
    }
    toggleVisibility();
  };

  const scrollToTop = () => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const circumference = 2 * Math.PI * 20; // 2 * pi * radius

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Scroll to top"
    >
      <div className="relative h-14 w-14">
        <svg className="h-full w-full" viewBox="0 0 44 44">
          <circle
            className="stroke-gray-200 dark:stroke-gray-700"
            cx="22"
            cy="22"
            r="20"
            fill="transparent"
            strokeWidth="3"
          ></circle>
          <circle
            className="stroke-blue-500 text-blue-600"
            cx="22"
            cy="22"
            r="20"
            fill="transparent"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress / 100) * circumference}
            transform="rotate(-90 22 22)"
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
          ></circle>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <ArrowUp className="h-6 w-6 text-blue-500 dark:text-gray-200" />
        </div>
      </div>
    </button>
  );
};

export default ScrollToTopButton;
