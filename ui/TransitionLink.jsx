// ui/TransitionLink.js
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import gsap from "gsap";

const TransitionLink = ({ children, href, className, trRef, loading, setLoading }) => {
    const router = useRouter();
    // const [isLoading, setIsLoading] = useState(false);

    const tl = gsap.timeline();
    const handleClick = (e) => {
        e.preventDefault();
        setLoading(true);
        window.scrollTo(0, 0);



        document.body.style.overflow = 'hidden';
        // Wait for the animation to play before navigating
        console.log(trRef?.current)
        tl.fromTo(trRef?.current, {
            y: "100%",
            duration: 0.1,
        }, {
            y: "0%",
            duration: 0.1
        })
        setTimeout(() => {
            router.push(href);
        }, 1000); // Match this with the duration in Tailwind
    };

    return (
        <div className="relative">
            <Link href={href} onClick={handleClick} className={className}>
                {children}
            </Link>
        </div>
    );
};

export default TransitionLink;
