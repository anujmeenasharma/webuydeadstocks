import React from 'react';

const Landing = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 w-full w-full mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-start w-full md:w-auto">
          <h2 className="text-white text-2xl md:text-3xl lg:text-[38px] font-normal leading-snug mb-2">
            We Help Businesses, Turn Non-Moving<br />
            Inventory Into
          </h2>
          <h1 className="text-[#7ED957] text-6xl md:text-8xl lg:text-[110px] font-black tracking-tighter leading-none mb-10">
            Cash & Space.
          </h1>
          <button className="group flex items-center gap-3 border border-white text-white px-7 py-3 text-sm md:text-base font-semibold tracking-[0.15em] hover:bg-white hover:text-black transition-all uppercase cursor-pointer">
            GET FREE VALUATION
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-auto mt-12 md:mt-0">
          <p className="text-white text-xl lg:text-[26px] font-normal text-center leading-snug">
            Your Trusted Partner in Liquidating Non-Moving<br />
            Inventory in UAE ,GCC & Across the globe
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;