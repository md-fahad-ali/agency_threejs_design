"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/Highligher";
import React, { useRef, useState, useEffect } from "react";
import { Roboto } from "next/font/google";
import { gsap } from "gsap";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

// Array of image URLs
const imageArray = [
  "https://via.placeholder.com/150/FF0000/FFFFFF?text=Image1",
  "https://via.placeholder.com/150/00FF00/FFFFFF?text=Image2",
  "https://via.placeholder.com/150/0000FF/FFFFFF?text=Image3",
  "https://via.placeholder.com/150/FFFF00/FFFFFF?text=Image4",
  "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Image5",
];

export default function List() {
  const parentRef = useRef(null);
  const [currentImage, setCurrentImage] = useState("");
  const hiddenImageRef = useRef(null);
  const [rotate, setRotate] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile or tablet
    const checkIfMobileOrTablet = () => {
      const isMobileOrTablet = window.matchMedia("(max-width: 1024px)").matches;
      setIsMobile(isMobileOrTablet);
    };

    checkIfMobileOrTablet(); // Initial check

    window.addEventListener("resize", checkIfMobileOrTablet); // Recheck on resize

    return () => {
      window.removeEventListener("resize", checkIfMobileOrTablet);
    };
  }, []);

  // Handle hover events
  function hoverCommand(event) {
    const itemId = event.target.dataset.item;
    const imageSrc = imageArray[itemId - 1];
    setCurrentImage(imageSrc);

    if (!isMobile) {
      gsap.to(hiddenImageRef.current, {
        duration: 0.5,
        scale: 1,
        opacity: 1,
        visibility: "visible",
      });
    }
  }

  // Hide image
  function hideImage() {
    if (!isMobile) {
      gsap.to(hiddenImageRef.current, {
        duration: 0.5,
        scale: 0,
        opacity: 0,
        visibility: "hidden",
      });
    }
  }

  // Update image position to follow cursor and apply rotateX
  function handleMouseMove(event) {
    if (!isMobile) {
      const imageElement = hiddenImageRef.current;
      if (imageElement) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const { left, width } = imageElement.getBoundingClientRect();
        const centerX = left + width / 2;
        const rotationX = ((mouseX - centerX) / width) * 30;
        setRotate(rotationX);

        gsap.to(imageElement, {
          duration: 0.1,
          x: mouseX - imageElement.clientWidth / 2,
          y: mouseY - imageElement.clientHeight / 2,
          ease: "power1.out",
        });
      }
    }
  }

  useEffect(() => {
    if (parentRef.current && !isMobile) {
      const items = parentRef.current.querySelectorAll("li");
      items.forEach((item) => {
        item.addEventListener("mouseenter", hoverCommand);
        item.addEventListener("mouseleave", hideImage);
      });
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        items.forEach((item) => {
          item.removeEventListener("mouseenter", hoverCommand);
          item.removeEventListener("mouseleave", hideImage);
        });
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [isMobile]); // Re-bind events if isMobile changes

  return (
    <div className=" w-[100%] flex justify-center flex-col">
      <div>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            We craft custom websites, focusing on{" "}
            <Highlight className="text-white">three key</Highlight> elements.
          </motion.h1>
        </HeroHighlight>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="relative flex justify-center md:justify-center items-start w-full h-auto">
          <ul
            className="flex w-[90%] flex-col justify-center items-start p-10"
            ref={parentRef}
          >
            <li
              className={` w-full pt-5 pb-7 flex text-5xl sm:text-7xl md:text-9xl cursor-pointer ${roboto.className}`}
              data-item="1"
            >
              <sup className="text-lg">01.</sup>Item 1
            </li>
            <hr className="text-5xl w-[100%] border-zinc-700" />
            <li
              className={` w-full pt-5 pb-7 flex text-5xl sm:text-7xl md:text-9xl cursor-pointer ${roboto.className}`}
              data-item="2"
            >
              <sup className="text-lg">02.</sup> Item 2
            </li>
            <hr className="text-5xl w-[100%] border-zinc-700" />
            <li
              className={` w-full pt-5 pb-7 text-5xl sm:text-7xl md:text-9xl flex cursor-pointer ${roboto.className}`}
              data-item="3"
            >
              <sup className="text-lg">03.</sup> Item 3
            </li>
            <hr className="text-5xl w-[100%] border-zinc-700" />
          </ul>
          <img
            ref={hiddenImageRef}
            src={currentImage}
            alt="Hidden"
            className="hidden-image"
          />
        </div>
      </div>
    </div>
  );
}
