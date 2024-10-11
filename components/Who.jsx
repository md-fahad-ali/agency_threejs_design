import React from "react";

import { motion } from "framer-motion";

import { Oswald } from "next/font/google";
import Button from "@/components/Button";

const oswald = Oswald({ subsets: ["latin"] });
export default function Who() {
  return (
    <div className="w-full h-[50vh] flex items-center content-center justify-center">
      <div className="w-[80%]">
        <div className="flex items-start content-center justify-between">
          <div>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className=""
            >
              <h1 className={`text-white text-xl `}>⚪ Who we are</h1>
            </motion.div>
          </div>
          <div className="text-right w-[75%] flex flex-col items-end">
            <p className={`text-white text-xl sm:text-2xl md:text-4xl `}>
              {`FlowBite is a web design, development, and digital marketing agency.
            We create impactful websites and strategies that enhance your online
            presence and drive success.`}
            </p>
            <br />
            <Button className="flex w-auto" height="54px" color="blue">
              About Flowbite
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
