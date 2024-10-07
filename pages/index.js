import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Poster from "./components/Poster";
import Navbar from "./components/Navbar";
import Brand from "./components/Brand";
import Who from "./components/Who";
import Button from "./ui/Buttons";
import What from "./components/What";
import List from "./components/List";
import Project from "./components/Project";
import Services from "./components/Services";

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
