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
      {/* Horizontal layout showing all panels at once on wide screens (each panel 1/3 width). On small screens panels stack vertically. */}
      <div className="w-full flex flex-row flex-wrap items-stretch h-screen px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Panel 1: Photo (1/3 width on md+, full width on small) */}
        <section className="w-full md:w-1/3 flex items-center justify-center p-6 md:h-screen">
          <div className="relative w-full max-w-none md:max-w-2xl lg:max-w-3xl h-full rounded-2xl overflow-hidden flex items-center justify-center">
            <Image src="/file_3_nobg.png" alt="Khussal Pradhan" fill className="object-cover" unoptimized />
          </div>
        </section>

        {/* Panel 2: Heading + Buttons (1/3 width on md+, full width on small) */}
        <section className="w-full md:w-1/3 flex items-center justify-center p-6 md:h-screen">
          <div className="flex flex-col items-center justify-center gap-6 h-full">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">Hi! I'm Khussal!</h1>
            <div className="flex gap-4 flex-wrap justify-center">
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
                      <button className="p-4 rounded-lg ring-1 ring-black bg-transparent text-black w-full sm:w-auto">View My Work</button>
                    </a>
                    <a href={toHref("/contact")}>
                      <button className="p-4 rounded-lg ring-1 ring-black bg-transparent text-black w-full sm:w-auto">Contact Me</button>
                    </a>
                  </>
                );
              })()}
            </div>
          </div>
        </section>

        {/* Panel 3: Description (1/3 width on md+, full width on small) */}
        <section className="w-full md:w-1/3 flex items-center justify-center p-6 md:h-screen">
          <p className="max-w-3xl text-center md:text-lg">
            I am a Software Developer & Automation Engineer with a strong foundation in Backend Systems, Distributed Systems, Enterprise Automation and Product Management. My portfolio reflects my commitment to building robust, high-performance, and scalable software solutions.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default Homepage;
