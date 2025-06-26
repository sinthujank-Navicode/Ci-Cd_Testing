"use client";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  const imageSrc = "/images/experience.jpg";

  return (
    <section className=" min-h-[60vh] flex items-center justify-around px-6 py-12">
      <div className="grid grid-cols-1 md:flex gap-6 max-w-7xl w-full items-stretch">
        {/* Left Column - 4 Boxes */}
        <div className="hidden md:flex flex-col justify-around gap-1 ">
          {/* Box 1 - Top Left */}
          <div className="w-16 h-16 rounded-xl overflow-hidden">
            <img
              src={imageSrc}
              className="w-full h-full object-contain object-[200%_0%] scale-499"
            />
          </div>

          {/* Box 2 - Top Right */}
          <div className="w-36 h-29 rounded-xl overflow-hidden">
            <img
              src={imageSrc}
              className="w-full h-full object-cover object-[0%_31%]  scale-328"
            />
          </div>

          {/* Box 3 - Bottom Left */}
          <div className="w-36 h-20 rounded-xl overflow-hidden">
            <img
              src={imageSrc}
              className="w-full h-full object-cover object-[190%_0%] scale-200"
            />
          </div>

          {/* Box 4 - Bottom Right */}
          <div className="w-16 h-16 rounded-xl overflow-hidden ml-[5rem]">
            <img
              src={imageSrc}
              className="w-full h-full object-cover object-[0%_170%] scale-260"
            />
          </div>
        </div>

        {/* Middle Column - One Big Image */}
        <div className="h-full md:flex items-center justify-start">
          <div className="w-full md:w-[25%] h-[500px] sm:h-[400px] xs:h-[300px] rounded-xl overflow-hidden">
            <img
              src={imageSrc}
              className="w-full h-full object-cover md:object-[170%_99%] md:scale-167"
            />
          </div>

          {/* Right Column - Text + Button */}
          <div className="   justify-center h-full md:ml-[7rem] ml-0 mt-9 md:mt-0">
            <p className="text-red-600 font-semibold text-sm mb-2 uppercase">
              Immortalize Your Memories
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Experience Photography
              <br />
              Like Never Before
            </h1>
            <p className="text-gray-600 mb-6 max-w-md">
              With our state-of-the-art equipment and artistic vision, we
              transform ordinary moments into extraordinary memories. Our
              talented photographers...
            </p>
            <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 md:mt-[5rem] mt-0 py-4 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <span>Explore Our Portfolio</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
