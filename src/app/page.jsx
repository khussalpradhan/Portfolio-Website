"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const Homepage = () => {
  return (
    <motion.div
      className="min-h-screen overflow-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Horizontal layout showing all panels at once on wide screens (each panel 1/2 width). On small screens panels stack vertically. */}
      <div className="w-full flex flex-row flex-wrap items-center h-screen px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Panel 1: Photo (1/2 width on md+, full width on small) */}
        <section className="w-full md:w-1/2 flex items-center justify-center md:h-screen">
          <div className="relative w-full h-[50vh] md:h-full flex items-center justify-center">
            <Image src="/file_3_nobg.png" alt="Khussal Pradhan" fill className="object-contain scale-125 md:scale-150" unoptimized />
          </div>
        </section>

        {/* Panel 2: Content (1/2 width on md+, full width on small) */}
        <section className="w-full md:w-1/2 flex items-center justify-center p-6 md:h-screen">
          <div className="flex flex-col items-center justify-center gap-8 h-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center">Hi! I'm Khussal!</h1>

            <p className="max-w-xl text-center md:text-xl font-medium">
              I am a Software Developer & Automation Engineer with a strong foundation in Backend Systems, Distributed Systems, Enterprise Automation and Product Management. My portfolio reflects my commitment to building robust, high-performance, and scalable software solutions.
            </p>

            <div className="flex gap-4 flex-wrap justify-center">
              {/* Helper function for consistent link handling */}
              {(() => {
                const toHref = (url) => {
                  if (typeof window === "undefined") {
                    return process.env.NODE_ENV === "production" && url !== "/" ? `${url}.html` : url;
                  }
                  const host = window.location.hostname || "";
                  const isLocal = host.includes("localhost") || host.startsWith("127.") || host.startsWith("192.168.");
                  return isLocal ? url : (url === "/" ? "/" : `${url}.html`);
                };

                return (
                  <>
                    <a href={toHref("/portfolio")}>
                      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white w-full sm:w-auto hover:bg-transparent hover:text-black transition-colors">View My Work</button>
                    </a>
                    <a href={toHref("/contact")}>
                      <button className="p-4 rounded-lg ring-1 ring-black bg-transparent text-black w-full sm:w-auto hover:bg-black hover:text-white transition-colors">Contact Me</button>
                    </a>
                  </>
                );
              })()}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Homepage;
