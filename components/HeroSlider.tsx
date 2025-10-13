"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, PauseIcon, PlayIcon } from "./icons";

const slides = [
  {
    image: "/hero-slider-3.png",
    title: "Take Your Business Next Level",
    description:
      "Discover powerful tools and features that help you create, collaborate, and innovate like never before.",
    buttonText: "Learn More",
    buttonLink: "#",
  },
  {
    image: "/hero-slider-1.png",
    title: "Achieve the extraordinary",
    description:
      "Our services deliver cloud storage, security, and AI Copilot in your favourite apps – all in one plan.",
    buttonText: "Explore Services",
    buttonLink: "#",
  },
  {
    image: "/hero-slider-2.png",
    title: "Unlock Your Potential",
    description:
      "Discover powerful tools and features that help you create, collaborate, and innovate like never before.",
    buttonText: "Learn More",
    buttonLink: "#",
  },
];

const SLIDE_INTERVAL = 8000;

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(goToNext, SLIDE_INTERVAL);
      return () => clearInterval(timer);
    }
  }, [isPlaying, currentIndex, goToNext]);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative w-full h-[500px] overflow-hidden bg-purple-200">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start text-left">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            {currentSlide.title}
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            {currentSlide.description}
          </p>
          <Link
            href={currentSlide.buttonLink}
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {currentSlide.buttonText}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-4">
        <button
          onClick={goToPrevious}
          aria-label="Previous slide"
          className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause slider" : "Play slider"}
        >
          {isPlaying ? (
            <PauseIcon className="h-4 w-4 cursor-pointer" />
          ) : (
            <PlayIcon className="h-4 w-4 cursor-pointer" />
          )}
        </button>

        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors cursor-pointer ${
                currentIndex === index ? "bg-foreground" : "bg-foreground/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
