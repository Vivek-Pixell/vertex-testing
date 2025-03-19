"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";

const ComA = () => {
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample video sources - replace with your actual videos
  const carouselVideos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselVideos.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[83vh] xl:h-screen overflow-hidden">
      {/* Video Carousel Background */}
      {carouselVideos.map((vid, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onError={(e) => console.error("Video error:", e)}
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay to darken video */}
        </div>
      ))}

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 mb-5 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-16">
        <div className="">
          <div className=" px-8 my-4">
            <h1 className="text-4xl md:text-5xl lg:text-[70px] text-white font-semibold mb-4">
              Heading
            </h1>
            <p className="text-sm text-white font-light mt-2 mb-8">Sub heading</p>
            <div className="flex items-center gap-2">
              <a
                href="#details"
                className="text-white text-sm md:text-base font-normal hover:text-gray-300 transition"
              >
                More details
              </a>

              <svg
                width="55"
                height="13"
                viewBox="0 0 55 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_179_9)">
                  <path
                    d="M1.4191 6.54758H53.2977M53.2977 6.54758L48.2919 11.5534M53.2977 6.54758L48.2919 1.54175"
                    stroke="white"
                    strokeWidth="0.910151"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_179_9">
                    <rect
                      width="53.6989"
                      height="11.832"
                      fill="white"
                      transform="translate(0.508942 0.631592)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center space-x-2 mb-16 md:mb-12">
            {carouselVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-8 h-1 rounded-full transition-all cursor-pointer ${
                  index === currentSlide
                    ? " bg-gray-700"
                    : "bg-white bg-opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComA;
