"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Languages, ChevronDown, X, Instagram, Linkedin, Facebook } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import { switchLanguage } from "@/components/GoogleTranslate";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const container = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useGSAP(() => {
    if (isSidebarOpen) {
      gsap.fromTo(
        ".nav-link-item",
        { y: "100%" },
        {
          y: "0%",
          duration: 0.85,
          stagger: 0.04,
          ease: "power4.out",
          delay: 0.3
        }
      );
    } else {
      gsap.set(".nav-link-item", { y: "100%" });
    }
  }, { scope: container, dependencies: [isSidebarOpen] });

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "GET FREE\nVALUATION", href: "https://www.webuydeadstock.com/get-free-valuation-dead-stocks" },
    { label: "OUR INTEREST", href: "/interest" },
    { label: "ABOUT US", href: "/about" },
    { label: "BLOGS", href: "/blogs" },
    { label: "BOOK A CALL", href: "https://calendly.com/webuydeadstocks-info/30min?primary_color=80d741" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <>
      <nav className="w-full py-4 px-6 lg:px-10 flex items-center justify-between fixed top-0 z-40">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
        </Link>

        <div className="flex items-center gap-4 lg:gap-8">
          <div className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <div className="flex items-center gap-1.5 cursor-pointer text-[#84CC16] p-2 -ml-2">
                <span className="text-xl leading-none">文A</span>
                <ChevronDown strokeWidth={2} className={`w-4 h-4 mt-0.5 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </div>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[120px] bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col py-1.5 z-50 transition-all duration-300 ${isLangOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
              >
                <button
                  onClick={() => { switchLanguage('en'); setIsLangOpen(false); }}
                  className="px-4 py-2 text-center text-[#333333] text-[15px] font-medium hover:bg-gray-50 hover:text-[#84CC16] transition-colors"
                >
                  English
                </button>
                <button
                  onClick={() => { switchLanguage('ar'); setIsLangOpen(false); }}
                  className="px-4 py-2 text-center text-[#333333] text-[15px] font-medium hover:bg-gray-50 hover:text-[#84CC16] transition-colors"
                >
                  العربية
                </button>
              </div>
            </div>
            <Link href="https://www.webuydeadstock.com/get-free-valuation-dead-stocks" className="text-white text-sm font-semibold tracking-wider uppercase hover:text-gray-300 transition-colors">
              GET A FREE VALUATION
            </Link>
            <Link href="https://calendly.com/webuydeadstocks-info/30min?primary_color=80d741" className="flex items-center justify-center bg-white text-black text-sm font-bold tracking-wider uppercase px-6 py-2.5 hover:bg-gray-100">
              BOOK A CALL
            </Link>
          </div>

          <Link href="#" className="flex items-center justify-center bg-white text-black text-sm font-bold tracking-wider uppercase px-6 py-2.5 hover:bg-gray-100 transition-colors">
            CONTACT US
          </Link>
          <button onClick={toggleSidebar} className="flex flex-col cursor-pointer gap-[6px] focus:outline-none lg:ml-4">
            <div className="w-8 h-[2px] bg-white"></div>
            <div className="w-8 h-[2px] bg-white"></div>
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={toggleSidebar}
      />

      {/* SIDEBAR CONTAINER */}
      <div
        ref={container}
        className={`fixed top-0 right-0 h-screen w-full md:w-[480px] bg-[#118B50] z-50 transform transition-transform duration-500 ease-in-out flex flex-col ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex flex-col justify-end">
          <div className="opacity-[0.05] text-white font-black leading-[0.85] tracking-tighter w-full pb-8 whitespace-nowrap" style={{ fontSize: 'clamp(3rem, 15vw, 6rem)' }}>
            <div className="pl-4">WE BUY DEAD</div>
            <div className="pl-4">STOCKS</div>
          </div>
        </div>

        <div className="flex justify-end p-6 md:p-8 relative z-10">
          <button onClick={toggleSidebar} className="text-white hover:text-gray-200 transition-colors cursor-pointer">
            <X className="w-10 h-10" strokeWidth={1} />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 md:px-12 relative z-10">
          <nav className="flex flex-col items-end gap-6 md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex flex-col cursor-pointer text-white text-3xl md:text-[40px] font-normal tracking-wide hover:text-gray-200 transition-colors uppercase text-left leading-tight"
                onClick={toggleSidebar}
              >
                {link.label.split('\n').map((line, index) => (
                  <div key={index} className="overflow-hidden">
                    <div className="nav-link-item translate-y-full">
                      {line}
                    </div>
                  </div>
                ))}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-end gap-4 p-8 md:p-12 relative z-10">
          <div className="flex items-center gap-6 mb-2">
            <div className="overflow-hidden">
              <button onClick={() => { switchLanguage('en'); toggleSidebar(); }} className="nav-link-item translate-y-full text-[#84CC16] font-bold text-sm tracking-widest uppercase hover:text-white transition-colors">
                ENGLISH
              </button>
            </div>
            <div className="overflow-hidden">
              <span className="nav-link-item translate-y-full text-[#84CC16] text-sm">/</span>
            </div>
            <div className="overflow-hidden">
              <button onClick={() => { switchLanguage('ar'); toggleSidebar(); }} className="nav-link-item translate-y-full text-[#84CC16] font-bold text-sm tracking-widest uppercase hover:text-white transition-colors">
                العربية
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/career" className="overflow-hidden">
              <div className="nav-link-item translate-y-full text-white text-sm tracking-widest uppercase hover:text-gray-200">
                CAREERS
              </div>
            </Link>
            <Link href="/environment" className="overflow-hidden">
              <div className="nav-link-item translate-y-full text-white text-sm tracking-widest uppercase hover:text-gray-200">
                ENVIRONMENT IMPACT
              </div>
            </Link>
          </div>
          <div className="overflow-hidden">
            <p className="nav-link-item translate-y-full text-white text-xs tracking-widest uppercase">
              © POLICIES
            </p>
          </div>
          <div className="overflow-hidden mt-6">
            <div className="nav-link-item translate-y-full flex items-center gap-6">
              <Link href="https://www.instagram.com/webuydeadstocks?utm_source=ig_web_button_share_sheet" target="_blank" className="text-white hover:text-gray-300 transition-colors">
                <Instagram className="w-6 h-6" strokeWidth={1.5} />
              </Link>
              <Link href="https://www.linkedin.com/company/chaudary-anwar-tr.-co-llc/posts/?feedView=all" target="_blank" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin className="w-6 h-6" strokeWidth={1.5} />
              </Link>
              <Link href="https://www.facebook.com/webuydeadstocks/" target="_blank" className="text-white hover:text-gray-300 transition-colors">
                <Facebook className="w-6 h-6" strokeWidth={1.5} />
              </Link>
              <Link href="https://www.tiktok.com/@webuydeadstocks.com?is_from_webapp=1&sender_device=pc" target="_blank" className="text-white hover:text-gray-300 transition-colors">
                <Image src="/images/tiktok-outline.svg" alt="Tiktok" className="w-6 h-6 invert" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;