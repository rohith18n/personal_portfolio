"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Rohith N",
                3000,
                "App Developer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Turning complex problems into simple mobile solutions.
          </p>
          <div>
            <Link
              href="/#contact"
              className="
  px-6 inline-block py-3 w-full sm:w-fit rounded-md mr-4
  bg-gradient-to-br from-secondary-500 to-secondary-700
  mt-3 text-white text-center
  transition-transform duration-200 ease-in-out
  hover:scale-105 hover:shadow-lg
  focus:outline-none focus:ring-4 focus:ring-primary-300
  active:scale-95
  cursor-pointer
"


            >
              Connect Me
            </Link>
            <a
  href="/Rohith_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
  px-1 inline-block py-1 w-full sm:w-fit rounded-md
  bg-gradient-to-br from-secondary-500 to-secondary-700
  mt-3 text-white text-center
  transition-transform duration-200 ease-in-out
  hover:scale-105 hover:shadow-lg
  focus:outline-none focus:ring-4 focus:ring-primary-300
  active:scale-95
  cursor-pointer
"
>
  <span className="block bg-[#121212] hover:bg-slate-800 rounded-md px-5 py-2">
    View Resume
  </span>
</a>


          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
  <Image
    src="/images/hero-image.png"
    alt="hero image"
    fill
    className="object-contain"
  />
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
