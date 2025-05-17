// app/components/Banner.js
'use client';
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const images = [
  "/banner1.png",
  "/banner1.png",
  "/banner1.png",
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`banner${index + 1}`}
            fill
            sizes="100vw"
            priority={index === 0}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
          />
        ))}
      </div>

       {/* dots */}
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}