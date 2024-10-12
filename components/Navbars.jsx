"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion, useAnimation, useScroll } from 'framer-motion';
import gsap from 'gsap';
import { Pivot as Hamburger } from 'hamburger-react'
import Button from "@/components/Button";

const Navbars = () => {
    const [isVisible, setIsVisible] = useState(true);

    const [lastScrollY, setLastScrollY] = useState(0);
    const [latests, setLatests] = useState();
    const controls = useAnimation();
    const { scrollY } = useScroll();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const animationRef = useRef(null);

    const linksRef = useRef(null);

    const controlNavbar = useCallback(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        const handleScroll = () => {
            window.requestAnimationFrame(controlNavbar);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controlNavbar]);

    useEffect(() => {
        scrollY.onChange((latest) => {
            if (latest === 0) {
                console.log("hi")
            }
            setLatests(latest)
            controls.start({
                backgroundColor: latest > 0 ? "rgba(74, 74, 74, 0.165)" : "rgba(87, 86, 86, 0)",
                backdropFilter: latest > 0 ? "blur(10px)" : "blur(0px)",
                width: latest > 0 ? "70%" : "100%",
                borderRadius: latest > 0 ? "9999px" : "0px",
                // boxShadow: latest > 0 ? "0 4px 6px -1px rgba(74, 74, 74, 0.165)), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "none",
            });
        });
    }, [controls, scrollY]);



    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    //     const tl = gsap.timeline();

    //     if (!isMenuOpen) {
    //         document.body.style.overflow = 'hidden';
    //         if (latests > 0) {
    //             tl.fromTo(animationRef.current, {
    //                 backgroundColor: "rgba(74, 74, 74, 0.165)",
    //                 backdropFilter: "blur(10px)",
    //                 width: "70%",
    //                 boxShadow: "0 4px 6px -1px rgba(74, 74, 74, 0.165), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    //                 duration: 0.3,
    //                 ease: "power2.out"
    //             }, {
    //                 backgroundColor: "rgba(74, 74, 74, 0.165)",
    //                 backdropFilter: "blur(10px)",
    //                 borderRadius: "0px",
    //                 width: "100%",
    //                 boxShadow: "0 4px 6px -1px rgba(74, 74, 74, 0.165), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    //                 duration: 0.3,
    //                 ease: "power2.out",
    //             }).fromTo(animationRef.current, {
    //                 delay: 1,
    //                 backgroundColor: "rgba(74, 74, 74, 0.165)",
    //                 backdropFilter: "blur(10px)",
    //                 height: "64px",
    //                 borderRadius: "0px",
    //                 boxShadow: "0 4px 6px -1px rgba(74, 74, 74, 0.165), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    //                 duration: 0.3,
    //                 ease: "power2.out"
    //             }, {
    //                 backgroundColor: "rgba(74, 74, 74, 0.165)",
    //                 backdropFilter: "blur(10px)",
    //                 borderRadius: "0px",
    //                 height: "100%",
    //                 boxShadow: "0 4px 6px -1px rgba(74, 74, 74, 0.165), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    //                 duration: 0.3,
    //                 ease: "power2.out",
    //             }, "+=1").fromTo(linksRef.current, {
    //                 opacity: 0,
    //                 y: 20
    //             }, {
    //                 opacity: 1,
    //                 y: 0,
    //                 duration: 0.5,
    //                 ease: "power2.out"
    //             })
    //         } else {
    //             tl.fromTo(animationRef.current, {
    //                 height: "64px",
    //                 borderRadius: "0px",
    //                 ease: "power2.out"
    //             }, {
    //                 backgroundColor: "rgba(74, 74, 74, 0.165)",
    //                 boxShadow: "0 4px 6px -1px rgba(74, 74, 74, 0.165), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    //                 backdropFilter: "blur(10px)",
    //                 height: "100%",
    //                 duration: 0.5,
    //                 borderRadius: "0px",
    //                 ease: "power2.out",
    //             }).fromTo(linksRef.current, {
    //                 opacity: 0,
    //                 y: 20
    //             }, {
    //                 opacity: 1,
    //                 y: 0,
    //                 duration: 0.5,
    //                 ease: "power2.out"
    //             })
    //         }
    //     } else {
    //         if (latests > 0) {
    //             tl.fromTo(animationRef.current, {
    //                 width: "100%",
    //                 height: "100%", // Animate to 100%
    //                 duration: 0.5, // Duration for height animation,
    //                 borderRadius: "0px",
    //                 ease: "power2.out"
    //             }, {
    //                 width: "100%",
    //                 height: "64px", // Animate to 100%
    //                 duration: 0.5, // Duration for height animation,
    //                 borderRadius: "0px",
    //                 ease: "power2.out"
    //             }).fromTo(animationRef.current, {
    //                 width: "100%",
    //                 duration: 0.5, // Duration for height animation,
    //                 borderRadius: "0px",
    //                 ease: "power2.out"
    //             }, {
    //                 width: "70%",
    //                 duration: 0.5, // Duration for height animation,
    //                 borderRadius: "9999px",
    //                 ease: "power2.out",

    //             },)
    //         } else {
    //             tl.fromTo(animationRef.current, {
    //                 width: "100%",
    //                 height: "100%", // Animate to 100%
    //                 duration: 0.5, // Duration for height animation,
    //                 borderRadius: "0px",
    //                 ease: "power2.out"
    //             }, {
    //                 width: "100%",
    //                 backgroundColor: "transparent",
    //                 height: "64px", // Animate to 100%
    //                 duration: 0.5, // Duration for height animation,
    //                 borderRadius: "0px",
    //                 ease: "power2.out",

    //             })
    //         }
    //         document.body.style.overflow = 'unset'; // Enable scrolling
    //     }
    // };




    return (
        <div>
            <motion.nav
                className={cn(
                    "fixed -top-[16px] left-0 right-0 transition-all duration-300 ease-in-out mx-auto mt-4 z-[9999]"
                )}
                initial={{ y: 0 }}
                animate={controls}
                style={{
                    y: isVisible ? 0 : -100,
                }}
                ref={animationRef}
                transition={{ duration: 0.3 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="text-white font-bold text-lg">
                                Logo
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4 text-white">
                                <Link href="/" className="navanimation py-2 px-3 text-3xl md:text-base">Home</Link>
                                <Link href="/about" className="navanimation py-2 px-3 text-3xl md:text-base">About</Link>
                                <Link href="/contact" className="navanimation py-2 px-3 text-3xl md:text-base">Contact</Link>
                            </div>
                        </div>

                        <Button className="hidden md:flex text-nowrap">Get Started</Button>
                        <div className="block md:hidden">
                            <Hamburger onToggle={toggled => {
                                const tl = gsap.timeline();
                                if (toggled) {
                                    setIsMenuOpen(true)
                                    // open a menu
                                    console.log("open")
                                    document.body.style.overflow = 'hidden';
                                    if (latests > 0) {
                                        tl.fromTo(animationRef.current, {
                                            backgroundColor: "rgba(74, 74, 74, 0.165)",
                                            backdropFilter: "blur(10px)",
                                            width: "70%",
                                            // boxShadow: "0 4px 6px -1px rgba(74, 74, 74, 0.165), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                            duration: 0.3,
                                            ease: "power2.out"
                                        }, {
                                            backgroundColor: "rgba(74, 74, 74, 0.165)",
                                            backdropFilter: "blur(10px)",
                                            borderRadius: "0px",
                                            width: "100%",
                                            // boxShadow: "0 4px 6px -1px rgba(74, 74, 74, 0.165), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                            duration: 0.3,
                                            ease: "power2.out",
                                        }).fromTo(animationRef.current, {
                                            delay: 1,
                                            backgroundColor: "rgba(74, 74, 74, 0.165)",
                                            backdropFilter: "blur(10px)",
                                            height: "64px",
                                            borderRadius: "0px",
                                            // boxShadow: "0 4px 6px -1px rgba(74, 74, 74, 0.165), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                            duration: 0.3,
                                            ease: "power2.out"
                                        }, {
                                            backgroundColor: "rgba(74, 74, 74, 0.165)",
                                            backdropFilter: "blur(10px)",
                                            borderRadius: "0px",
                                            height: "100%",
                                            // boxShadow: "0 4px 6px -1px rgba(74, 74, 74, 0.165), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                            duration: 0.3,
                                            ease: "power2.out",
                                        }, "+=1").fromTo(linksRef.current, {
                                            opacity: 0,
                                            y: 20
                                        }, {
                                            opacity: 1,
                                            y: 0,
                                            duration: 0.5,
                                            ease: "power2.out"
                                        })
                                    } else {
                                        tl.fromTo(animationRef.current, {
                                            height: "64px",
                                            borderRadius: "0px",
                                            ease: "power2.out"
                                        }, {
                                            backgroundColor: "rgba(74, 74, 74, 0.165)",
                                            // boxShadow: "0 4px 6px -1px rgba(74, 74, 74, 0.165), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                            backdropFilter: "blur(10px)",
                                            height: "100%",
                                            duration: 0.5,
                                            borderRadius: "0px",
                                            ease: "power2.out",
                                        }).fromTo(linksRef.current, {
                                            opacity: 0,
                                            y: 20
                                        }, {
                                            opacity: 1,
                                            y: 0,
                                            duration: 0.5,
                                            ease: "power2.out"
                                        })
                                    }
                                } else {
                                    // close a menu
                                    console.log("closed")
                                    setIsMenuOpen(false)
                                    if (latests > 0) {
                                        tl.fromTo(animationRef.current, {
                                            width: "100%",
                                            height: "100%", // Animate to 100%
                                            duration: 0.5, // Duration for height animation,
                                            borderRadius: "0px",
                                            ease: "power2.out"
                                        }, {
                                            width: "100%",
                                            height: "64px", // Animate to 100%
                                            duration: 0.5, // Duration for height animation,
                                            borderRadius: "0px",
                                            ease: "power2.out"
                                        }).fromTo(animationRef.current, {
                                            width: "100%",
                                            duration: 0.5, // Duration for height animation,
                                            borderRadius: "0px",
                                            ease: "power2.out"
                                        }, {
                                            width: "70%",
                                            duration: 0.5, // Duration for height animation,
                                            borderRadius: "9999px",
                                            ease: "power2.out",

                                        },)
                                    } else {
                                        tl.fromTo(animationRef.current, {
                                            width: "100%",
                                            height: "100%", // Animate to 100%
                                            duration: 0.5, // Duration for height animation,
                                            borderRadius: "0px",
                                            ease: "power2.out"
                                        }, {
                                            width: "100%",
                                            backgroundColor: "transparent",
                                            height: "64px", // Animate to 100%
                                            duration: 0.5, // Duration for height animation,
                                            borderRadius: "0px",
                                            ease: "power2.out",

                                        })
                                    }
                                    document.body.style.overflow = 'unset'; // Enable scrolling
                                }
                            }} />
                        </div>
                    </div>

                    <div
                        className={`text-white text-lg z-50 flex-col items-center h-[50dvh] ${isMenuOpen ? 'flex' : 'hidden'} justify-center`}
                        ref={linksRef}
                    >
                        <Link href="/" className="navanimation pt-[30px]  text-5xl  " >
                            Home
                        </Link>
                        <Link href="/about" className="navanimation pt-[30px]  text-5xl  " >
                            About
                        </Link>
                        <Link href="/contact" className="navanimation pt-[30px]  text-5xl  " >
                            Contact
                        </Link>
                    </div>
                </div>
            </motion.nav>
        </div>
    );
};

export default Navbars;