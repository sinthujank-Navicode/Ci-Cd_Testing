"use client";

import React, { useEffect, useRef } from "react";

const videos = [
  { video: "https://www.youtube.com/embed/ScMzIvxBSi4" },
  { video: "https://www.youtube.com/embed/kXYiU_JCYtU" },
  { video: "https://www.youtube.com/embed/e-ORhEE9VVg" },
  { video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
];

const VideoCard = ({ videoData }) => (
  <div className="min-w-[300px] md:min-w-[400px] snap-start rounded-xl overflow-hidden shadow  transition duration-300 transform  bg-white">
    <iframe
      src={videoData.video}
      className="w-full h-56 sm:h-64 md:h-72"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
);

const VideoSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  const onWheel = (e) => {
    if (e.deltaY === 0) return; // no vertical scroll

    e.preventDefault();

    const { scrollLeft, scrollWidth, clientWidth } = container;
    let newScrollLeft = scrollLeft + e.deltaY;

    if (newScrollLeft < 0) newScrollLeft = 0;
    if (newScrollLeft > scrollWidth - clientWidth)
      newScrollLeft = scrollWidth - clientWidth;

    container.scrollLeft = newScrollLeft;
  };

  container.addEventListener("wheel", onWheel, { passive: false });

  return () => {
    container.removeEventListener("wheel", onWheel);
  };
}, []);

  return (
    <main className="px-4 md:px-8 py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Discover Our Featured Wedding Videos
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Handpicked wedding moments from cities around the world. Explore and enjoy!
        </p>
      </div>

      <div
        ref={scrollRef}
        className=" flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 custom-scrollbar"
        style={{ overflowY: "hidden" }} // Prevent vertical scroll bar
      >
        {videos.map((video, idx) => (
          <VideoCard key={idx} videoData={video} />
        ))}
      </div>

      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .custom-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>
    </main>
  );
};

export default VideoSection;
