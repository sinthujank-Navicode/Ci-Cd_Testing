"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const images = ["/images/hero1.webp", "/images/hero6.jpg", "/images/hero5.jpg"];

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div>
      <div className="min-h-[80vh] flex items-center justify-center p-4 sm:p-6 overflow-x-hidden">
        <div className="w-full max-w-[83rem] flex flex-col md:flex-row md:items-center gap-12">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex flex-col justify-center p-4"
          >
            <h1 className="md:text-7xl text-4xl font-bold text-gray-800 mb-4">
              Unleash the <br />
              Art of <br />
              Photography
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              At Capture Studio, we specialize in capturing life’s most precious
              moments, transforming them into timeless works of art.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.facebook.com/p/FX-creation-Studio-100069234291790/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 bg-white rounded-full p-2 shadow transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={32} />
              </a>
              <a
                href="https://www.instagram.com/fx_creation_studio/p/DDMMzxwTodL/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 bg-white rounded-full p-2 shadow transition"
                aria-label="Instagram"
              >
                <FaInstagram size={32} />
              </a>
            </div>

            <button className="text-sm transform hover:scale-105 hover:shadow-lg bg-red-600 hover:bg-red-700 transition duration-300 text-white font-semibold rounded-md px-6 py-4 md:my-4 w-max flex items-center gap-2">
              Book Your Session Now
              <ChevronRight size={16} />
            </button>
          </motion.div>

          {/* Image Section */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start gap-4">
            {/* Main Image without scroll-based zoom */}
            <div>
              <Image
                src={images[0]}
                alt="Main Hero Image"
                width={600}
                height={400}
                className="rounded-lg object-cover w-[24rem] md:w-[40rem] aspect-[3/2] md:h-[22rem]"
              />
            </div>

            {/* Thumbnails with subtle animation */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 w-full max-w-[40rem]">
              {images.slice(1).map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-full sm:w-1/2"
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    width={400}
                    height={267}
                    className="rounded-lg object-cover w-full aspect-[3/2] h-auto"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
