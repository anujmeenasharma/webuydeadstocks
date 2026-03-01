'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const items = [
    {
        id: 1,
        title: 'Electrical & Automation',
        image: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2667&auto=format&fit=crop',
        className: 'col-span-1 row-span-1',
    },
    {
        id: 2,
        title: 'Construction & Building Solutions',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop',
        className: 'col-span-1 md:row-span-2',
    },
    {
        id: 3,
        title: 'Energy, Marine & Aerospace',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
        className: 'col-span-1 row-span-1',
    },
    {
        id: 4,
        title: 'Tools & Equipments',
        image: 'https://images.unsplash.com/photo-1508344928928-7137b29de218?q=80&w=2000&auto=format&fit=crop',
        className: 'col-span-1 row-span-1',
    },
    {
        id: 5,
        title: 'Consumer Goods & Lifestyle',
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2000&auto=format&fit=crop',
        className: 'col-span-1 row-span-1',
    },
    {
        id: 6,
        title: 'Industrial Equipments & Components',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
        className: 'col-span-1 row-span-1',
    },
    {
        id: 7,
        title: 'Technology & Power Solutions',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop',
        className: 'col-span-1 row-span-1',
    },
    {
        id: 8,
        title: 'Scrap',
        image: 'https://images.unsplash.com/photo-1605814578131-4813084dc922?q=80&w=2000&auto=format&fit=crop',
        className: 'col-span-1 row-span-1',
    },
];

const OurInterest = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.interest-card',
                {
                    y: 80,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 50%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-white py-16 md:py-24 px-6 lg:px-16 overflow-hidden">
            <div className="w-full mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-[54px] font-black mb-4 text-[#1A1A1A] tracking-tight uppercase leading-none">OUR INTEREST</h2>
                        <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed font-medium">
                            We purchase a wide range of used and unused surplus, overstock or dead inventory and scrap from multiple industries, including manufacturing, construction, IT and retail. Discover the stocks we love.
                        </p>
                    </div>
                    <button className="flex items-center gap-3 border border-black px-6 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-colors min-w-max cursor-pointer">
                        LEARN MORE
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[320px]">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`interest-card group relative overflow-hidden rounded-2xl w-full h-full cursor-pointer ${item.className}`}
                            style={{ willChange: 'transform, opacity' }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300"></div>
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end gap-4">
                                <h3 className="text-white text-lg md:text-xl font-bold leading-snug drop-shadow-md">
                                    {item.title}
                                </h3>
                                <div className="w-10 h-10 shrink-0 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurInterest;