import React from "react";

import { Inter } from "next/font/google";
import Poster from "../components/Poster";
import Navbar from "../components/Navbar";
import Brand from "../components/Brand";
import Who from "../components/Who";

import List from "../components/List";
import Services from "../components/Services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`relative z-[999] ${inter.className}`}>
      <Navbar />
      <div>
        <Poster />
        <br />
        <Who />

        <Brand />
        <br />
        <br />
        {/* <What /> */}
        <Services />
        <List />
        {/* <Project /> */}
      </div>
    </main>
  );
}
