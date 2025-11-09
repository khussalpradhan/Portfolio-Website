"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-violet-300 to-purple-300",
    title: "SplitExpense",
    desc: "Devised microservices using Spring Boot (Backend), MongoDB, Elastic Search to deliver RESTful APIs for user management and expense splitting\tEngineered robust back-end functionalities that enabled the creation of over 150 user groups and facilitated real-time balance tracking.",
    img: "/splitExpense.webp",
    link: "https://github.com/khussalpradhan/SplitExpense",
  },
  {
    id: 2,
    color: "from-violet-300 to-purple-300",
    title: "Diet Tracker",
    desc: "Architected a full-stack diet tracking platform using Ruby on Rails and PostgreSQL, integrating the OpenAI Vision API to deliver intelligent, image-based macro detection.",
    img: "/DietTracker.png",
    link: "https://diet-tracker-7b90cf3013e1.herokuapp.com/",
  },
  {
    id: 3,
    color: "from-pink-300 to-red-300",
    title: "My Portfolio Website",
    desc: "Created a personal portfolio using Next.js 13 with advanced animations via Framer Motion, SMTP API integration, and Tailwind CSS.",
    img: "/PortfolioWebsite.png",
  // Replaced demo link with GitHub profile (no hardcoded demo references)
    link: "https://github.com/khussalpradhan",
  },
  {
    id: 4,
    color: "from-blue-300 to-violet-300",
    title: "AtomToByte",
    desc: "Developed a full-stack web application for NGO AtomToByte, featuring a responsive frontend design to optimize user experience. The application facilitates seamless event communication and enhances collaboration by leveraging modern web technologies.",
    img: "/AtomToByte.png",
    link: "https://atomtobyte.netlify.app/",
  },
  {
    id: 5,
    color: "from-violet-300 to-purple-300",
    title: "More projects",
    desc: "Take a dive into my GitHub wonderland! From full-stack web escapades to AI-fueled adventures, explore the wild variety of projects I've tackled—and probably still am as you read this! Who knows, you might just catch me mid-debug!",
    img: "/github.jpg",
    link: "https://github.com/khussalpradhan",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Studio
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white items-center">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="flex items-center justify-center bg-gray-50/60 p-4 rounded-md">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-40 md:h-56 lg:h-[420px] xl:h-[520px] w-auto object-contain"
                    />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] text-center">
                    {item.desc}
                  </p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">View the Repository/Demo</button>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project for me?</h1>
        <div className="relative w-full flex justify-center">
          <div className="w-full max-w-2xl overflow-hidden">
            <motion.div
              className="whitespace-nowrap text-center text-xl md:text-2xl"
              animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 12, ease: "linear", repeat: Infinity }
              }
            >
              <span className="mx-4">Summer' 26/ Looking for Opportunities /</span>
              <span className="mx-4">Summer' 26/ Looking for Opportunities /</span>
            </motion.div>
          </div>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-40 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
