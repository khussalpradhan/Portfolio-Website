"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  // compute a friendly label for the transition overlay
  const raw = pathName === "/" ? "" : pathName.substring(1);
  const routeLabelMap = {
    "": "Dashboard",
    portfolio: "Studio",
    about: "Know Me",
    contact: "Contact",
    resume: "Resume",
  };
  const toTitleCase = (s) =>
    s
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  const overlayLabel = routeLabelMap[raw] ?? toTitleCase(raw);

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40 pointer-events-none"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {overlayLabel}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30 pointer-events-none"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        {/* make navbar fixed at top and add top padding to children so content can't sit under it */}
        <div className="fixed top-0 left-0 right-0 h-24 z-50 bg-white/0"> 
          <Navbar />
        </div>
        <div className="pt-24 h-[calc(100vh-6rem)] relative z-10">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;