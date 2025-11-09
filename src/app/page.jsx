"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


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
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center">
          {/* Rounded white panel + shadow to separate the photo from the page background */}
          <div className="relative w-full h-72 lg:h-full lg:w-11/12 rounded-2xl overflow-hidden flex items-center justify-center">
            {/* Use unoptimized so Next's custom loader is bypassed and the local public file is served */}
            {/* mix-blend-multiply applied so image edges blend with panel background. Other options: mix-blend-screen, mix-blend-overlay, mix-blend-darken, mix-blend-lighten */}
            <Image src="/file_3_nobg.png" alt="Khussal Pradhan" fill className="object-contain" unoptimized />
          </div>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi! I'm Khussal Pradhan!
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            <br /><br />
            I am a Software Development & Automation Engineer with a strong foundation in Backend Systems, Distributed Systems, Enterprise Automation and Product Management. My portfolio reflects my commitment to building robust, high-performance, and scalable software solutions.
           </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            </Link>
            <Link href="/contact">
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
