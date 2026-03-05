"use client";

import { useEffect } from "react";

export default function GoogleTranslate() {
    useEffect(() => {
        // Only load if it's not already there
        if (!window.googleTranslateElementInit) {
            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "en",
                        includedLanguages: "en,ar",
                        autoDisplay: false,
                    },
                    "google_translate_element"
                );
            };

            const script = document.createElement("script");
            script.id = "google-translate-script";
            script.src =
                "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return <div id="google_translate_element" style={{ display: "none" }}></div>;
}

export const switchLanguage = (lang) => {
    // lang should be 'en' or 'ar'
    // When switching back to English from Arabic, Google Translate uses 'en' or clears it
    const select = document.querySelector(".goog-te-combo");
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
    } else {
        // If the widget is not fully loaded or select doesn't exist, we fallback to cookie approach
        const domain = window.location.hostname;
        document.cookie = `googtrans=/en/${lang}; path=/; domain=${domain}`;
        document.cookie = `googtrans=/en/${lang}; path=/; domain=.${domain}`;
        window.location.reload();
    }
};
