  "use client";

import { useState, useEffect, useRef } from "react";
  import Image from "next/image";
  import { ChevronLeft, ChevronRight } from "lucide-react";

  const services = [
    { title: "Bridal Makeup", price: "$150", image: "/images/makeup.jpg" },
    { title: "Party Makeup", price: "$100", image: "/images/makeup.jpg" },
    { title: "Casual Makeup", price: "$50", image: "/images/makeup.jpg" },
    { title: "Photoshoot Makeup", price: "$120", image: "/images/makeup.jpg" },
    { title: "Evening Glam", price: "$80", image: "/images/makeup.jpg" },
    { title: "Natural Look", price: "$60", image: "/images/makeup.jpg" },
  ];

  export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
const scrollContainerRef = useRef(null);

    // Handle responsive logic
    useEffect(() => {
      const updateItemsPerPage = () => {
        if (window.innerWidth < 768) {
          setItemsPerPage(1); // Mobile
        } else {
          setItemsPerPage(3); // Desktop
        }
      };

      updateItemsPerPage();
      window.addEventListener("resize", updateItemsPerPage);
      return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + 1, services.length - itemsPerPage)
      );
    };

    const visibleServices = services.slice(
      currentIndex,
      currentIndex + itemsPerPage
    );
useEffect(() => {
  const container = scrollContainerRef.current;

  const handleWheel = (e) => {
    if (container && e.deltaY !== 0) {
      e.preventDefault(); // Prevent vertical scrolling
      const direction = e.deltaY > 0 ? 1 : -1;
      setCurrentIndex((prevIndex) =>
        Math.min(
          Math.max(prevIndex + direction, 0),
          services.length - itemsPerPage
        )
      );
    }
  };

  container?.addEventListener("wheel", handleWheel, { passive: false });

  return () => {
    container?.removeEventListener("wheel", handleWheel);
  };
}, [itemsPerPage]);

    return (
      <main className="bg-pink-100 text-gray-800 max-w-7xl mx-auto relative md:mt-5">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row justify-between items-center px-6 md:px-12 lg:px-24 py-12 md:pb-44">
          <div className="lg:w-1/2 space-y-6">
            <p className="text-pink-600  text-2xl">Makeup Studio</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 ">
              ENJOY THE BEST <br /> MAKEUP SERVICES
            </h1>
            <p className="text-md text-gray-700">
              Get the perfect look for any occasion!{" "}
            </p>
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
  Book an Appointment <ChevronRight size={16} />
</button>

          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:h-94 md:absolute md:top-37 md:right-[-9.7rem]">
            <div className="border-9 border-white">
              <Image
                src="/images/makeup2.jpg"
                alt="Nail Care"
                width={300}
                height={400}
                className="object-cover lg:h-89"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-pink-100 py-16 px-6 md:px-12 lg:px-11 text-center">
          <p className="text-pink-600  text-2xl">Our services</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            FEATURED MAKEUP SERVICES
          </h2>
          <p className="text-gray-600 mb-10">
            Professional makeup for all your special moments.
          </p>

          <div className="relative flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="z-10 bg-white p-2 shadow-md rounded-full mr-4  disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5 text-pink-700" />
            </button>

            <div
              ref={scrollContainerRef}

              className={`grid gap-12 flex-1 ${
                itemsPerPage === 1 ? "grid-cols-1 max-w-md" : "grid-cols-3"
              }`}
            >
              {visibleServices.map((service, index) => (
                <div key={index} className="space-y-7 md:min-h-[450px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full rounded-md object-cover md:h-[350px] h-[240px]  "
                  />
                  <h3 className="text-xl font-medium">
                    {service.title} –{" "}
                    <span className="text-gray-500">from {service.price}</span>
                  </h3>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="z-10 bg-white p-2 shadow-md rounded-full ml-4 disabled:opacity-50"
              disabled={currentIndex >= services.length - itemsPerPage}
            >
              <ChevronRight className="h-5 w-5 text-pink-700" />
            </button>
          </div>
        </section>
      </main>
    );
  }
