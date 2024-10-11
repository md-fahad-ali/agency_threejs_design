import Link from 'next/link';
import React, { useState, useRef } from 'react';
import gsap from 'gsap'

const AnimatedButton = ({ children, href = "#", className }) => {
    const [isHovered, setIsHovered] = useState(false);
    const arrowRef = useRef(null);
    const tl = gsap.timeline();

    const handleMouseEnter = () => {
        setIsHovered(true);
        tl.fromTo(
            arrowRef.current,
            {
                rotateZ: "-45deg",
            },
            {
                rotateZ: "0deg",
                duration: 0.2,
            }
        );
    };

    const handleAnimationEnd = () => {
        setIsHovered(false);
        tl.fromTo(
            arrowRef.current,
            {
                rotateZ: "0deg",
            },
            {
                rotateZ: "-45deg",
                duration: 0.2,
            }
        );
    };

    return (
        <>
            <style>{`
        @keyframes buttonText {
          0% { transform: translateY(0); }
          25% { transform: translateY(-150%); }
          50% { transform: translateY(150%); }
          100% { transform: translateY(0); }
        }

        .animate-buttonText {
          animation: buttonText 0.4s ease-in-out;
        }
      `}</style>

            <Link href={href} className={`${className} border cursor-pointer flex items-center gap-[13px] flex-row-reverse border-white rounded-[50px] p-[10px] w-[150px] m-[15px_5px] text-center text-white overflow-hidden no-underline`}
                onMouseEnter={handleMouseEnter}>
                <div>
                    <svg
                        width="25px"
                        height="100%"
                        viewBox="0 0 55 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative z-[9] -rotate-45"
                        ref={arrowRef}
                    >
                        <path
                            d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5L3 16.5ZM53.7678 20.7678C54.7441 19.7915 54.7441 18.2085 53.7678 17.2322L37.8579 1.32233C36.8816 0.34602 35.2986 0.34602 34.3223 1.32233C33.346 2.29864 33.346 3.88155 34.3223 4.85786L48.4645 19L34.3223 33.1421C33.346 34.1184 33.346 35.7014 34.3223 36.6777C35.2986 37.654 36.8816 37.654 37.8579 36.6777L53.7678 20.7678ZM3 21.5L52 21.5L52 16.5L3 16.5L3 21.5Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <span
                    className={`transition-transform duration-200 ${isHovered ? 'animate-buttonText' : ''}`}
                    onAnimationEnd={handleAnimationEnd}
                >
                    {children}
                </span>
            </Link>
        </>
    );
};

export default AnimatedButton;
