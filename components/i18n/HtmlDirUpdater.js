"use client";
import { useEffect } from "react";

/**
 * This component updates <html lang="..."> and <html dir="..."> on the client side.
 * The root layout sets a default "en" / "ltr". This component synchronizes the
 * actual lang/dir based on the URL's [lang] segment.
 */
export default function HtmlDirUpdater({ lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // Ensure Google Translate is synced with the current route
    const domain = window.location.hostname;
    const gLang = lang === "ar" ? "ar" : "en";
    
    document.cookie = `googtrans=/en/${gLang}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/${gLang}; path=/; domain=.${domain}`;

    const select = document.querySelector(".goog-te-combo");
    if (select && select.value !== gLang) {
      select.value = gLang;
      select.dispatchEvent(new Event("change"));
    }
  }, [lang]);

  return null;
}
