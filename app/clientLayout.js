"use client";
import { ReactLenis } from "lenis/react";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ClientLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const lenisRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const checkMobile = () => setIsMobile(window.innerWidth <= 1000);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenisRef.current?.lenis) {
      // Force lenis to stop its current scroll animation to prevent glitches
      lenisRef.current.lenis.stop();
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
      lenisRef.current.lenis.start();

      // Delay resize and refresh to allow Next.js to fully swap DOM nodes
      setTimeout(() => {
        lenisRef.current?.lenis?.resize();
        ScrollTrigger.refresh();
      }, 150);
    }
  }, [pathname]);

  const scrollSettings = isMobile
    ? {
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
      autoResize: true,
    }
    : {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      autoResize: true,
    };

  return (
    <ReactLenis root options={scrollSettings} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}