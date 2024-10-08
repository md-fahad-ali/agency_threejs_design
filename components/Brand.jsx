"use client";

import React, { useEffect, useState } from "react";
import InfiniteMovingCards from "../ui/infinite-moving-cards";

export default function Brand() {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
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
