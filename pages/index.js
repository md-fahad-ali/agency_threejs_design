import React from "react";

import { Inter } from "next/font/google";
import Poster from "../components/Poster";
import Navbars from "../components/Navbars";
import Brand from "../components/Brand";
import Who from "../components/Who";

import List from "../components/List";
import Services from "../components/Services";

export default function Home() {
  return (
    <main className={`relative z-[999] `}>
      <Navbars />
      <div className="mt-[70px]">
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
