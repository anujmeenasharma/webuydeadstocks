"use client";

import { useRef } from "react";
import React from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Recycling = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const textContainerRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const bottomPanelRef = useRef(null);
    const cloud1Ref = useRef(null);
    const cloud2Ref = useRef(null);

    useGSAP(() => {
        const text1Split = new SplitType(text1Ref.current, { types: 'words' });
        const text2Split = new SplitType(text2Ref.current, { types: 'words' });
        const bottomItems = gsap.utils.toArray(bottomPanelRef.current.children);

        gsap.set(text1Ref.current, { opacity: 1 });
        gsap.set(text2Ref.current, { opacity: 1 });
        gsap.set(bottomPanelRef.current, { opacity: 1 });

        gsap.set(text1Split.words, { opacity: 0, y: 30 });
        gsap.set(text2Split.words, { opacity: 0, y: 30 });
        gsap.set(bottomItems, { opacity: 0, y: 30 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=3000",
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
            }
        });

        tl.to({}, { duration: 0.5 })
            .to(videoRef.current, {
                clipPath: "circle(100% at 50% 50%)",
                duration: 1,
                ease: "power2.inOut"
            })
            .to(cloud1Ref.current, {
                xPercent: -50,
                x: -300,
                opacity: 0,
                duration: 1,
                ease: "power1.inOut"
            }, "<")
            .to(cloud2Ref.current, {
                xPercent: 50,
                x: 300,
                opacity: 0,
                duration: 1,
                ease: "power1.inOut"
            }, "<")
            .to(text1Split.words, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.2")
            .to(bottomItems, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            }, "<+=0.1")
            .to(text1Split.words, {
                opacity: 0,
                y: -30,
                duration: 0.5,
                stagger: 0.05,
                ease: "power3.in"
            }, "+=0.5")
            .to(text2Split.words, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.2");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative block w-full h-screen overflow-hidden bg-[#57853A] z-10">

            <div ref={cloud1Ref} className="absolute top-10 md:top-20 left-10 opacity-80 z-20 w-96 md:w-[600px] pointer-events-none">
                <img src="/images/cloud.webp" alt="cloud" className="w-full h-auto object-contain" />
            </div>
            <div ref={cloud2Ref} className="absolute bottom-10 md:bottom-20 right-10 opacity-80 z-20 w-96 md:w-[600px] pointer-events-none">
                <img src="/images/cloud2.webp" alt="cloud" className="w-full h-auto object-contain" />
            </div>

            <div
                ref={videoRef}
                className="absolute inset-0 w-full h-full z-0"
                style={{ clipPath: "circle(20% at 50% 50%)" }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/video/nature.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="absolute inset-0 w-full h-full z-10 flex flex-col justify-between pointer-events-none">

                <div ref={textContainerRef} className="relative w-full h-full pt-16 pl-8 md:pt-24 md:pl-16 text-white pointer-events-auto">
                    <h2 ref={text1Ref} className="absolute text-6xl md:text-[80px] font-bold leading-[1.1] tracking-tight text-white mb-4" style={{ opacity: 0 }}>
                        Forget<br />Recycling
                    </h2>
                    <h2 ref={text2Ref} className="absolute text-6xl md:text-[80px] font-bold leading-[1.1] tracking-tight text-white mb-4" style={{ opacity: 0 }}>
                        We Re-sell<br />Responsibly<br />Worldwide
                    </h2>
                </div>

                <div ref={bottomPanelRef} className="w-full flex flex-col md:flex-row pointer-events-auto">

                    <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-end">
                        <p className="text-white text-sm md:text-base mb-6 max-w-lg leading-relaxed text-[#f0f0f0]">
                            We help you move dead stock responsibly by buying it and selling it to developing countries.
                            This approach not only reduces waste but also supports affordable access to goods in emerging markets.
                            By choosing this sustainable solution, you're making a positive impact on both your bottom line and the environment.
                        </p>
                        <button className="text-white border border-white px-6 py-2 text-xs tracking-widest hover:bg-white hover:text-black transition-colors w-fit font-medium">
                            LEARN MORE
                        </button>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col sm:flex-row">
                        <div className="flex-1 bg-[#57853A] p-8 md:p-14 text-white">
                            <div className="mb-6 h-12 w-12 flex items-center justify-center">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                    <path d="M3 3v5h5" />
                                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                                    <path d="M16 21v-5h5" />
                                    <path d="M12 9v2m0 4v2" />
                                    <path d="M10 11.5a2.5 2.5 0 0 1 5 0c0 2-5 1-5 3a2.5 2.5 0 0 0 5 0" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-[32px] font-bold leading-none mb-4 tracking-tight">
                                WE RESELL YOUR<br />DEAD INVENTORY
                            </h3>
                            <p className="text-sm text-[#f0f0f0] leading-relaxed">
                                Our service ensures that your dead stock is repurposed responsibly.
                            </p>
                        </div>

                        <div className="flex-1 bg-[#2D2D2D] p-8 md:p-14 text-white">
                            <div className="mb-6 h-12 w-12 flex items-center justify-center bg-white rounded-md">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D2D2D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-[32px] font-bold leading-none mb-4 tracking-tight">
                                BRAND<br />PROTECTION
                            </h3>
                            <p className="text-sm text-[#f0f0f0] leading-relaxed">
                                You never have to re-enter the market in ways that devalue your brand or harm your reputation.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Recycling;