"use client";

import React, { useEffect, useState } from "react";
import InfiniteMovingCards from "../ui/infinite-moving-cards";
import Slider from 'react-infinite-logo-slider'
import Image from 'next/image'

export default function Brand() {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
      <Slider
        width="150px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={'#fff'}
      >
        {testimonials?.map((e, i) => (
          <Slider.Slide key={i}>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              <Image
                src={e?.image}
                width={100}
                height={100}
                alt="Brans pic"
              />
            </div>
          </Slider.Slide>
        ))}
      </Slider>
      {/* <InfiniteMovingCards items={testimonials} direction="left" speed="fast" /> */}
    </div>
  );
}

const testimonials = [
  {
    image: "/brands/brand.png",
  },
  {
    image: "/brands/brand.png",
  },
  {
    image: "/brands/brand.png",
  },
  {
    image: "/brands/brand.png",
  },
  {
    image: "/brands/brand.png",
  },
  {
    image: "/brands/brand.png",
  },
  {
    image: "/brands/brand.png",
  },
];
