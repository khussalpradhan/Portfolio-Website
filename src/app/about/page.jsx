"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
  {/* TEXT CONTAINER */}
  <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-3/4 xl:w-4/5 lg:pr-0">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/About_me.jpg"
              alt="khussal image"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
              unoptimized
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">About Me</h1>
            {/* BIOGRAPHY DESC */}
            <p className="md:text-lg">
              As a Software & Automation Engineer, I specialize in weaving AI with distributed backend systems to
              architect software that’s not only smart but also scales beautifully.
              <br />
              <br />
              I’m all about creating efficient, high-performance systems. I embrace the future of development by leveraging AI
              coding assistants to accelerate my workflow, allowing me to focus on complex system architecture. My experience is
              rooted in enterprise-scale automation and performance optimization. When not immersed in code, I’m likely exploring
              new ways to build resilient, high-availability services.
              <br />
              <br />
              Ready to build something great? Let's architect software that delivers real-world impact
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">Rise and fall are part of "The Journey".</span>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {/* Languages */}
              <div className="w-full">
                <h3 className="font-semibold">Languages</h3>
                <div className="flex gap-4 flex-wrap mt-2">
                  {[
                    "Python",
                    "JavaScript",
                    "C++",
                    "SQL",
                    "Bash",
                    "PowerShell",
                    "Ruby",
                  ].map((t) => (
                    <div
                      key={t}
                      className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="w-full">
                <h3 className="font-semibold">Frameworks</h3>
                <div className="flex gap-4 flex-wrap mt-2">
                  {[
                    "Django",
                    "Spring Boot",
                    "React",
                    "Node.js",
                    "Rails",
                  ].map((t) => (
                    <div
                      key={t}
                      className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="w-full">
                <h3 className="font-semibold">Databases</h3>
                <div className="flex gap-4 flex-wrap mt-2">
                  {["MySQL", "PostgreSQL", "MongoDB", "SQL Server"].map((t) => (
                    <div
                      key={t}
                      className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud / DevOps */}
              <div className="w-full">
                <h3 className="font-semibold">Cloud / DevOps</h3>
                <div className="flex gap-4 flex-wrap mt-2">
                  {["Docker", "GitHub Actions", "CI/CD", "Linux"].map((t) => (
                    <div
                      key={t}
                      className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Systems & Tools */}
              <div className="w-full">
                <h3 className="font-semibold">Systems & Tools</h3>
                <div className="flex gap-4 flex-wrap mt-2">
                  {[
                    "Nutanix Calm/Prism",
                    "Citrix DaaS APIs",
                    "ServiceDesk Plus",
                  ].map((t) => (
                    <div
                      key={t}
                      className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Expertise */}
              <div className="w-full">
                <h3 className="font-semibold">Core Expertise</h3>
                <div className="flex gap-4 flex-wrap mt-2">
                  {[
                    "Backend Systems",
                    "Automation",
                    "Distributed Systems",
                    "Event Driven Architecture",
                    "Async Processing",
                    "API Design",
                    "LLM-powered Apps",
                  ].map((t) => (
                    <div
                      key={t}
                      className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-50px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div initial={{ x: "-10px" }} animate={isExperienceRefInView ? { x: "0" } : {}} className="">
              {/* RBL */}
              <div className="flex justify-center h-auto md:h-48">
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">RBL Bank Ltd.</div>
                  <div className="p-3 text-sm italic">
                    Software & Automation Engineer (Deputy Manager)
                    <br/><br/>
                    Led enterprise automation and infra projects,
                    including geo-fenced monitoring, Nutanix Calm orchestration, and Citrix DaaS automation.
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">June 2023 - July 2025</div>
                </div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 "></div>
              </div>

              {/* Tata Digital */}
              <div className="flex justify-between h-auto md:h-48">
                <div className="w-1/3 "></div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Tata Digital (Tata Neu)</div>
                  <div className="p-3 text-sm italic">
                    Software Engineering Intern
                    <br/><br/>
                    Built federated auth/SSO (Spring Boot, OAuth2/JWT) and improved reliability
                    and performance for authentication services.
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">June 2022 - May 2023</div>
                </div>
              </div>

              {/* AtomToByte (NGO) */}
              <div className="flex justify-between h-auto md:h-48">
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">AtomToByte (NGO)</div>
                  <div className="p-3 text-sm italic">
                    Contributed pro-bono web and product engineering support for NGO initiatives.
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">2020 - Present</div>
                </div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            <motion.h1 initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">
              EDUCATION
            </motion.h1>
            <motion.div initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: "0" } : {}} className="">
              {/* Texas A&M */}
              <div className="flex justify-between h-48">
                <div className="w-1/3 "></div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Texas A&amp;M University, College Station, Texas</div>
                  <div className="p-3 text-sm italic">Master of Science in Computer Science</div>
                  <div className="p-3 text-red-400 text-sm font-semibold">August 2025 - May 2027</div>
                </div>
              </div>

              {/* Kalinga Institute */}
              <div className="flex justify-between h-48">
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Kalinga Institute of Industrial Technology, Bhubaneswar, India</div>
                  <div className="p-3 text-sm italic">
                    Bachelor of Technology in Computer Science and Systems Engineering 
                    <br/> GPA: 3.98/4
                    <br /><br/>
                    Coursework: Analysis of Algorithms, Software Engineering, Artificial Intelligence, Machine Learning, Data Structures, Operating Systems, Computer Networks, Information Storage &amp; Retrieval
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">July 2019 - May 2023</div>
                </div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block lg:w-1/4 xl:w-1/5 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
