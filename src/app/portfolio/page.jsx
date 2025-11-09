"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const items = [
  {
    id: 1,
    color: "from-indigo-300 to-violet-300",
    title: "Split Expense",
    desc: "Devised microservices using Spring Boot (Backend), MongoDB, Elastic Search to deliver RESTful APIs for user management and expense splitting\tEngineered robust back-end functionalities that enabled the creation of over 150 user groups and facilitated real-time balance tracking.",
    img: "/splitExpense.webp",
    link: "https://github.com/khussalpradhan/SplitExpense",
  },
  {
    id: 2,
    color: "from-violet-300 to-fuchsia-300",
    title: "Diet Tracker",
    desc: "Architected a full-stack diet tracking platform using Ruby on Rails and PostgreSQL, integrating the OpenAI Vision API to deliver intelligent, image-based macro detection.",
    img: "/DietTracker.png",
    link: "https://diet-tracker-7b90cf3013e1.herokuapp.com/",
  },
  {
    id: 3,
    color: "from-fuchsia-300 to-pink-300",
    title: "Portfolio Website",
    desc: "Created a personal portfolio using Next.js 13 with advanced animations via Framer Motion, SMTP API integration, and Tailwind CSS.",
    img: "/PortfolioWebsite.png",
  // Replaced demo link with GitHub profile (no hardcoded demo references)
    link: "https://khussalpradhan-520f32dcece8.herokuapp.com/",
  },
  {
    id: 4,
    color: "from-pink-300 to-amber-300",
    title: "Atom To Byte",
    desc: "Developed a full-stack web application for NGO AtomToByte, featuring a responsive frontend design to optimize user experience. The application facilitates seamless event communication and enhances collaboration by leveraging modern web technologies.",
    img: "/AtomToByte.png",
    link: "https://atomtobyte.netlify.app/",
  },
  {
    id: 5,
    color: "from-amber-300 to-orange-300",
    title: "More Projects",
    desc: "Take a dive into my GitHub wonderland! From full-stack web escapades to AI-fueled adventures, explore the wild variety of projects I've tackled—and probably still am as you read this! Who knows, you might just catch me mid-debug!",
    img: "/github.jpg",
    link: "https://github.com/khussalpradhan",
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const slideRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = slideRefs.current.indexOf(entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.6 }
    );

    slideRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Remount animation-sensitive motion element on resize so Framer Motion
  // recalculates measurements and transforms. This prevents jumps when
  // layout/width changes cause percent-based transforms to behave oddly.
  const [resizeKey, setResizeKey] = useState(0);
  useEffect(() => {
    let t = null;
    const onResize = () => {
      clearTimeout(t);
      t = setTimeout(() => setResizeKey((k) => k + 1), 120);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });
  // compute container size and final translate based on number of slides
  // add one extra viewport height for the final static contact section below the carousel
  const containerHeight = `${(items.length + 1) * 100}vh`;
  // compute container size and final translate based on number of slides
  // translate using vw so the movement matches viewport widths exactly
  const endXVW = `${-(items.length - 1) * 100}vw`;
  // ensure the horizontal slide movement completes before the final static section scrolls into view
  const endProgress = items.length / (items.length + 1);
  const x = useTransform(scrollYProgress, [0, endProgress], ["0vw", endXVW]);
  const shouldReduceMotion = useReducedMotion();

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

  // simple mapping: use scroll progress to drive horizontal translate
  // (no snap-on-release) — keeps the original smooth scroll-driven behavior
  useEffect(() => {
    // nothing required here; useTransform is observing scrollYProgress directly
  }, [scrollYProgress]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* make container height and final slide translate dynamic based on items count to avoid white gaps */}
      <div style={{ height: containerHeight }} className="relative" ref={ref}>
  <div className="sticky top-0 flex min-h-screen items-center overflow-visible md:overflow-hidden">
          <motion.div key={resizeKey} style={{ x }} className="flex">
            {items.map((item, idx) => (
                <div
                  ref={(el) => (slideRefs.current[idx] = el)}
                  className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                  key={item.id}
                >
                  <div className="relative flex flex-col gap-8 text-white items-center pb-20 md:pb-32 lg:pb-40">
                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                      {item.title}
                    </h1>
                    <div className="flex items-center justify-center bg-gray-50/60 p-4 rounded-md">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-28 sm:h-40 md:h-56 lg:h-[420px] xl:h-[520px] w-auto object-cover"
                      />
                    </div>
                    <p className="max-w-[90vw] sm:max-w-[320px] md:max-w-[480px] lg:max-w-[600px] lg:text-lg text-center">
                      {item.desc}
                    </p>

                    {/* small screens: show a static button below the content (no fixed positioning) */}
                    <div className="block md:hidden w-full flex justify-center mt-4">
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-[90%] sm:w-[70%]">
                        <button className="w-full p-2 text-sm bg-white text-gray-600 font-semibold rounded">View the Repository/Demo</button>
                      </a>
                    </div>

                    {/* per-slide action (kept for md+ layouts) */}
                    <div className="hidden md:block absolute bottom-8 left-0 right-0 flex justify-center z-10">
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-6 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">View the Repository/Demo</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
      </div>
      
        {/* no floating CTA on small screens; per-slide buttons are used instead */}
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
            <a
              href={toHref("/contact")}
              className="w-16 h-16 md:w-28 md:h-28 absolute top-40 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      
    </motion.div>
  );
};

export default PortfolioPage;
