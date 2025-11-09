"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-2/3 flex items-center justify-center">
          {/* Rounded white panel + shadow to separate the photo from the page background */}
          <div className="relative w-full h-96 md:h-[28rem] lg:h-[42rem] lg:w-11/12 rounded-2xl overflow-hidden flex items-center justify-center">
            {/* Use unoptimized so Next's custom loader is bypassed and the local public file is served */}
            {/* mix-blend-multiply applied so image edges blend with panel background. Other options: mix-blend-screen, mix-blend-overlay, mix-blend-darken, mix-blend-lighten */}
            {/* Use object-cover so the image fills more of the panel and appears larger */}
            <Image src="/file_3_nobg.png" alt="Khussal Pradhan" fill className="object-cover" unoptimized />
          </div>
        </div>
        {/* TEXT CONTAINER */}
  <div className="h-1/2 lg:h-full lg:w-1/3 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi! I'm Khussal Pradhan!
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            <br /><br />
            I am a Software Developer & Automation Engineer with a strong foundation in Backend Systems, Distributed Systems, Enterprise Automation and Product Management. My portfolio reflects my commitment to building robust, high-performance, and scalable software solutions.
           </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 flex-wrap justify-center sm:justify-start">
            {(() => {
              const toHref = (url) => {
                const isServer = typeof window === "undefined";
                if (isServer) {
                  if (process.env.NODE_ENV === "production") {
                    return url === "/" ? "/" : `${url}.html`;
                  }
                  return url;
                }
                const host = window.location.hostname || "";
                const isLocal = host.includes("localhost") || host.startsWith("127.") || host.startsWith("192.168.");
                if (isLocal) return url;
                return url === "/" ? "/" : `${url}.html`;
              };
              return (
                <>
                  <a href={toHref("/portfolio")}>
                    <button className="p-4 rounded-lg ring-1 ring-black bg-transparent text-black w-full sm:w-auto">
                      View My Work
                    </button>
                  </a>
                  <a href={toHref("/contact")}>
                    <button className="p-4 rounded-lg ring-1 ring-black bg-transparent text-black w-full sm:w-auto">
                      Contact Me
                    </button>
                  </a>
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
