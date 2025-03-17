import { useState, useEffect } from "react";

import { slides } from "../../../assets/images/laptops/laptops";
import { CardImage } from "../../cards";

export const SliderIndicators = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [maxSlide, setMaxSlide] = useState(0);

  useEffect(() => {
    const calculateResponsive = () => {
      const isMediumScreen = window.matchMedia("(min-width: 768px)").matches;
      const newSlidesPerView = isMediumScreen ? 2 : 1;
      setSlidesPerView(newSlidesPerView);
      setMaxSlide(Math.max(slides.length - newSlidesPerView, 0));
    };

    calculateResponsive();
    window.addEventListener("resize", calculateResponsive);
    return () => window.removeEventListener("resize", calculateResponsive);
  }, [slides.length]);

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, maxSlide));
  }, [maxSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const translateValue = `-${currentSlide * (100 / slidesPerView)}%`;

  return (
    <div className="relative w-full py-12 overflow-hidden">
      {/* Slides Container */}
      <div
        className="@container flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${translateValue})` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full @md:min-w-[50%] flex items-center justify-center p-4"
          >
            <CardImage slide={slide} />
          </div>
        ))}
      </div>

      {/* Controls Container */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-full bg-white/20 cursor-pointer hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? "bg-white w-6" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === maxSlide}
          className="p-2 rounded-full bg-white/20 cursor-pointer hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
