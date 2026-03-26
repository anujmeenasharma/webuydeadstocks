"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    if (pathname === "/arabic" || pathname.startsWith("/arabic/")) {
      setCurrentLang("ar");
    } else {
      setCurrentLang("en");
    }
  }, [pathname]);

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    
    // Set cookie so proxy remembers preference
    document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000`; // 1 year expiry

    // Calculate new path based on our clean URL structure
    let newPath;
    if (newLang === "ar") {
      // English -> Arabic
      // Prepend /arabic to the current path
      newPath = pathname === "/" ? "/arabic" : `/arabic${pathname}`;
    } else {
      // Arabic -> English
      // Remove /arabic from the path
      newPath = pathname.replace(/^\/arabic/, "") || "/";
    }

    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`px-4 py-2 font-semibold text-sm rounded transition-colors ${
        currentLang === "ar" 
          ? "bg-[#8CC63F] text-white" 
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      {currentLang === "en" ? "العربية" : "English"}
    </button>
  );
}
