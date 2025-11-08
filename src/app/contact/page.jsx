"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Contact Me";
  const form = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  // Focus and select the text area
  const handleTextAreaFocus = () => {
    messageRef.current.select();
  };

  return (
    <motion.div
      className="h-full flex items-center justify-center bg-gray-100 my-4 px-4 sm:px-6 md:px-8 lg:px-24 xl:px-48 w-full"
      initial={{ y: "-100vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row w-full max-w-full lg:max-w-7xl">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-auto lg:w-1/2 flex items-center justify-center text-5xl sm:text-6xl font-bold text-gray-800 mb-4 lg:mb-0">
          <motion.div className="text-center">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="lg:w-1/2 bg-white shadow-lg rounded-lg p-6 sm:p-12 md:p-16 w-full max-w-md mx-auto lg:mx-0 text-lg flex flex-col gap-4"
        >
          {/* Contact Information */}
          <div className="mb-4 text-gray-700">
  <h1 className="text-xl font-bold text-white-700 mb-1">Email:</h1>
  <h1 className="text-lg text-yellow-700">
    <a href="mailto:priyam.s@northeastern.edu" className="text-yellow-500 hover:underline">
      priyam.s@northeastern.edu
    </a>
    {" "}
    <a href="mailto:satyampriyam01@gmail.com" className="text-yellow-500 hover:underline">
      satyampriyam01@gmail.com
    </a>
  </h1>
  <h1 className="text-xl font-bold text-white-700 mt-4 mb-1">Phone:</h1>
  <h1 className="text-lg text-yellow-500">
    <a href="tel:+18573437331" className="text-yellow-500 hover:underline">
      857-343-7331
    </a>
  </h1>
</div>


          <span className="font-semibold">Send a message:</span>
          <textarea
            ref={messageRef}
            rows={5}
            className="p-4 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-gray-500 resize-none"
            name="user_message"
            placeholder="Your message"
            required
            onClick={handleTextAreaFocus}
            onFocus={handleTextAreaFocus}
          />

          <span className="font-semibold">Your Email address:</span>
          <input
            name="user_email"
            type="email"
            className="p-4 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            placeholder="john@gmail.com"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md font-semibold text-lg py-3 transition-all hover:bg-purple-600 focus:ring-4 focus:ring-purple-300"
          >
            Send
          </button>

          {success && (
            <span className="text-green-600 font-semibold mt-2">
              ✔️ Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold mt-2">
              ❌ Something went wrong. Please try again.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
