"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-blue-300 to-violet-300",
    title: "AtomToByte",
    desc: "Developed a full-stack web application for NGO AtomToByte, featuring a responsive frontend design to optimize user experience. The application facilitates seamless event communication and enhances collaboration by leveraging modern web technologies.",
    img: "/AtomToByte.png",
    link: "https://atomtobyte.netlify.app/",
  },
  {
    id: 2,
    color: "from-red-300 to-blue-300",
    title: "OpenD",
    desc: "Built a full-stack NFT marketplace on the Internet Computer platform using React.js, JavaScript, Motoko, using Web3 technology to enable users to buy and sell NFTs",
    img: "/OpenD.jpeg",
    link: "https://github.com/satryampriyam01/OpenD",
  },
  
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "SplitExpense",
    desc: "Devised microservices using Spring Boot (Backend), MongoDB, Elastic Search to deliver RESTful APIs for user management and expense splitting	Engineered robust back-end functionalities that enabled the creation of over 150 user groups and facilitated real-time balance tracking.",
    img: "/splitExpense.webp",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Imager",
    desc: "Programmed an image processing app with a GUI using Java, Swing and Junit, designed as an Adobe-like clone, providing users with functionalities such as image compression, blurring, color correction, and more. Built with Haar wavelet implementation, Gaussian functions, and various mathematical operations. ",
    img: "/imager.gif",
    link: "https://lama.dev",
  },
  {
    id: 5,
    color: "from-pink-300 to-red-300",
    title: "My Portfolio Website",
    desc: "Created a personal portfolio using Next.js 13 with advanced animations via Framer Motion, SMTP API integration, and Tailwind CSS.",
    img: "/PortfolioWebsite.jpeg",
    link: "https://satyampriyam.netlify.app/",
  },
  {
    id: 6,
    color: "from-violet-300 to-purple-300",
    title: "More projects",
    desc: "Take a dive into my GitHub wonderland! From full-stack web escapades to AI-fueled adventures, explore the wild variety of projects I've tackled—and probably still am as you read this! Who knows, you might just catch me mid-debug!",
    img: "/Github.jpeg",
    link: "https://github.com/satryampriyam01",
  },

];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">View the Repository/Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Summer' 25/ Looking for Opportunities /
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
