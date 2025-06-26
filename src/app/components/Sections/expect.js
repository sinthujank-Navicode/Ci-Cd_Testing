"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const expertiseData = [
  {
    title: "Professional editing",
    description: "Your creativity our inspiration.\nWhatever you want",
    image: "/img2.jpg",
  },
  {
    title: "Long hour shoots",
    description: "Your creativity our inspiration.\nWhatever you want",
    image: "/img2.jpg",
  },
  {
    title: "Extensive equipment",
    description: "Your creativity our inspiration.\nWhatever you want",
    image: "/img2.jpg",
  },
];

export default function Expertise() {
  return (
    <section className="py-1 pb-[66px]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Explore Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="w-16 h-16 mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.2,
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain rounded"
                />
              </motion.div>

              <h3 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {item.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}