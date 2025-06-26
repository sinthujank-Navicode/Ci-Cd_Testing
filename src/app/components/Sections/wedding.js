"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
const fadeUpVariantButton = {
  hidden: { opacity: 0, },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
const imageVariant = {
  hidden: { scale: 0.97, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function Wedding() {
  return (
    <div className="min-h-screen flex items-center justify-center my-8 bg-gradient-to-b from-pink-50 to-pink-100 bg-fixed">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center p-6 max-w-3xl"
      >
        {/* Heading */}
        <motion.h1
          variants={fadeUpVariant}
          className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2"
        >
          WEDDING SEASON
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUpVariant}
          className="text-gray-600 mb-6"
        >
          Make Your Wedding Memorable with Our Luxury And Affordable Cars.
        </motion.p>

        {/* Image */}
        <motion.div
          variants={imageVariant}
          className="relative w-full h-72 sm:h-96 mx-auto mb-6"
        >
          <Image
            src="/images/thumb3.jpg"
            alt="Wedding Car"
            layout="fill"
            objectFit="contain"
            className="drop-shadow-lg"
          />
        </motion.div>

        {/* Vehicle Options */}
        <motion.p
          variants={fadeUpVariant}
          className="text-red-600 font-medium mb-4"
        >
          Car | Jeep | Hiace | Bus
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={fadeUpVariantButton}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/booking-form")}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md"
        >
          BOOK NOW !
        </motion.button>
      </motion.div>
    </div>
  );
}
