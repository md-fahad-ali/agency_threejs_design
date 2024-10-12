import React, { useEffect, useRef } from "react";
import CityFuture from "./City";
import Navbar from "./Navbar";
import gsap from "gsap";
import Lottie from "lottie-react";
import Wave from '../pages/animations/wave.json'
import Button from "@/components/Button";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: '400', subsets: ["latin"] });

export default function Poster() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const canvaRef = useRef(null);

  const button1Ref = useRef(null);
  const button2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.7 });
    gsap.set([textRef1.current, textRef2.current, textRef3.current], {
      opacity: 0,
    });

    tl.fromTo(
      canvaRef.current,
      { opacity: 0, scale: 0.5, transformOrigin: "bottom" },
      { opacity: 1, scale: 1, transformOrigin: "bottom", duration: 0.6 }
    )
      .fromTo(
        textRef1.current,
        { opacity: 0, top: "10vw" },
        { opacity: 1, top: "0vw", duration: 0.5 },
        "+=0.1"
      )
      .fromTo(
        textRef2.current,
        { opacity: 0, top: "10vw" },
        { opacity: 1, top: "0vw", duration: 0.4 },
        "+=0.07" // delay between the spans
      )
      .fromTo(
        textRef3.current,
        { opacity: 0, top: "10vw" },
        { opacity: 1, top: "0vw", duration: 0.3 },
        "+=0.06"
      )
      .fromTo(
        button1Ref.current,
        { opacity: 0, y: 20, stagger: 0.1 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1 },
        "+=0.05"
      );
  }, []);

  return (
    <div className="bg-zinc-900 text-white">
      <section className="flex w-full items-center content-center justify-center">
        <div className="w-[100%] md:w-[85%]">
          <div className="flex pl-[3.5rem] lg:pl-16 z-[9] items-center relative gap-[10px] top-[39px]">
            <p className=" text-white">Hey We are Flowbit</p>
            <Lottie animationData={Wave} loop={true} className="w-[30px]" />
          </div>
          <div className="relative w-full flex flex-col md:flex-row items-start justify-between p-12 bg-zinc-900">
            <div className="z-10 top-[50px] absolute">
              <div className="gooey-container">
                <div className="flex">
                  <div className="relative">
                    <h1
                      className={`gooey-text text-xl lg:text-6xl dm:text-5xl sm:text-4xl ss:text-2xl bg-zinc-900 inline tracking-tight ${roboto.className}`}
                      style={{
                        lineHeight: 1.3,
                        paddingBottom: "25px",
                        borderRadius: "21px 0 21px 21px",
                        position: "relative",
                        left: "-7px",
                        paddingTop: "7px",
                      }}
                    >
                      <span
                        ref={textRef1}
                        className="flex-shrink-0 opacity-0 truncate inline relative pl-3 lg:pl-5"
                        style={{ zIndex: 2 }}
                      >
                        Creative Agency Designing&nbsp;&nbsp;
                        <br />
                      </span>
                      <span
                        ref={textRef2}
                        className="flex-shrink-0 opacity-0 truncate inline relative pl-3 lg:pl-5"
                        style={{ zIndex: 1 }}
                      >
                        {`Tomorrow's Visions `}&nbsp;&nbsp;
                        <br />
                      </span>
                      <span
                        ref={textRef3}
                        className="flex-shrink-0 opacity-0 truncate inline relative pl-3 lg:pl-5"
                        style={{ zIndex: 0 }}
                      >
                        of the Future&nbsp;&nbsp;
                        <br />
                      </span>
                    </h1>
                    <svg
                      width="43"
                      height="39"
                      viewBox="0 0 43 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[15px] relative top-[7px] sm:top-[9px]"
                    >
                      <path
                        d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"
                        fill="#18171b"
                      ></path>
                    </svg>
                    {/* SVG Filter Definition */}
                    <svg width="0" height="0">
                      <defs>
                        <filter id="goo">
                          <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="6"
                            result="blur"
                          ></feGaussianBlur>
                          <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="goo"
                          ></feColorMatrix>
                          <feComposite
                            in="SourceGraphic"
                            in2="goo"
                            operator="atop"
                          ></feComposite>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <svg
                    width="21px"
                    height=""
                    viewBox="0 0 43 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[21px] relative -top-[1px] -left-[15px] sm:-left-[12px]"
                  >
                    <path
                      d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"
                      fill="#18171b"
                    ></path>
                  </svg>
                </div>
                <div className="flex space-x-4">
                  <Button
                    className=" bg-black relative -left-[9px] -top-[25px] border-none"
                    button1Ref={button1Ref}
                  >
                    Contact Us
                  </Button>
                  {/* <button
                    ref={button2Ref}
                    className="px-6 py-3 hidden opacity-0 sm:block bg-black text-white rounded-lg"
                  >
                    Schedule a Call
                  </button> */}
                </div>
              </div>
            </div>
            <div
              className="w-[100%] relative top-[2px] h-[70vh] ss:h-[80dvh] overflow-hidden rounded-[30px]"
              style={{ borderRadius: "30px" }}
            >
              <CityFuture canvaRef={canvaRef} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
