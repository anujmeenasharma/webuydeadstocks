"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const TextReveal = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    const text =
        "We Buy Dead Stocks is the leading dead stock buyer in the UAE and GCC region. With over 21 years of turning non- moving inventory into cash for businesses,startups and manufacturers, we have solidified ourselves as the most trusted choice in the region. We deal in B2B by buying non-moving/dead stock from companies in the GCC and export them to developing countries across the globe, all the while promising 100% privacy for the company's image and brand name.";

    useGSAP(
        () => {
            const words = textRef.current.querySelectorAll(".word");
            gsap.to(words, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "top top",
                    scrub: 1,
                },
                color: "#222222",
                stagger: 0.1,
            });
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            className="w-full h-screen bg-white py-20 px-6 lg:px-16 flex flex-col items-center"
        >
            <div className="w-full h-full flex flex-col mx-auto">
                <h2 className="text-[#222222] text-3xl md:text-4xl lg:text-[42px] font-bold mb-4 tracking-tight">
                    Quick, Simple, & Guaranteed
                </h2>
                <div className="w-full h-[1px] bg-gray-300 mt-6 mb-8"></div>
                <p
                    ref={textRef}
                    className="text-[20px] md:text-[26px] lg:text-[34px] leading-[1.3] font-normal text-[#e5e7eb] mb-20 lg:mb-32"
                >
                    {text.split(" ").map((word, index) => (
                        <span key={index} className="word inline-block mr-[6px] lg:mr-[10px]">
                            {word}
                        </span>
                    ))}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 w-full mt-auto">
                    <div className="flex flex-col">
                        <h3 className="text-[#7ED957] text-4xl lg:text-[46px] font-bold mb-2">
                            21+
                        </h3>
                        <p className="text-gray-600 text-lg lg:text-[20px] font-normal">
                            Year of Experience
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-[#7ED957] text-4xl lg:text-[46px] font-bold mb-2">
                            3359+
                        </h3>
                        <p className="text-gray-600 text-lg lg:text-[20px] font-normal">
                            Dead Stocks Cleared
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-[#7ED957] text-4xl lg:text-[46px] font-bold mb-2">
                            15+
                        </h3>
                        <p className="text-gray-600 text-lg lg:text-[20px] font-normal">
                            Countries Served in The
                            <br className="hidden lg:block" /> GCC & Worldwide
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-[#7ED957] text-4xl lg:text-[46px] font-bold mb-2">
                            04
                        </h3>
                        <p className="text-gray-600 text-lg lg:text-[20px] font-normal">
                            Offices Worldwide
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextReveal;
