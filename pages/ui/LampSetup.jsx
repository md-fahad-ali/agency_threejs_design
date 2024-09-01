"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex h-[50vh] flex-col overflow-hidden bg-transparent w-full rounded-md z-0",
        className
      )}
    >
      <div></div>
      {children}
    </div>
  );
};
