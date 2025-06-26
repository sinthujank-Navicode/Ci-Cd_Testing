import Image from "next/image";

const images = [
  { src: "/images/gallery1.jpg", classes: "col-span-2 md:h-[18rem]" },
  {
    src: "/images/gallery8.jpg",
    classes: "col-start-3 row-start-1 md:h-[18rem]",
  },
  {
    src: "/images/gallery6.jpg",
    classes: "row-span-2 col-start-1 row-start-2 md:h-[40.7rem]",
  },
  {
    src: "/images/gallery9.jpg",
    classes: "col-span-2 col-start-2 row-start-2 md:h-[18rem]",
  },
  {
    src: "/images/gallery5.jpg",
    classes: "col-start-2 row-start-3 md:h-[22rem]",
  },
  {
    src: "/images/gallery10.jpg",
    classes: "col-start-3 row-start-3 md:h-[22rem]",
  },
];

export default function GalleryPage() {
  return (
    <div className=" md:min-h-screen min-h-[60vh] p-6 md:mb-30">
      {/* Header Section */}
      <div className="text-start max-w-2xl mx-auto mb-10 md:ml-[34rem]">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Journey Through Our Gallery
        </h1>
        <p className="text-gray-600 text-lg">
          Immerse yourself in the captivating world of photography.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 md:gap-8 gap-1 max-w-7xl mx-auto  h-auto md:h-[120vh] xl:h-[91vh]">
        {images.map((img, index) => (
          <div key={index} className={`${img.classes} p-1`}>
            <Image
              src={img.src}
              alt={`Gallery Image ${index + 1}`}
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
