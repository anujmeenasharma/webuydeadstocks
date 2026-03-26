import ClientLayout from "./clientLayout";
import Navbar from "@/components/Partials/Navbar";
import Footer from "@/components/Partials/Footer";
import GoogleTranslate from "@/components/GoogleTranslate";
import HtmlDirUpdater from "@/components/i18n/HtmlDirUpdater";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://webuydeadstocks.com"),
  description: "We Buy Dead Stocks is a leading dead stock buyer in the UAE and GCC region.",
  robots: { index: true, follow: true },
};

// This is the ROOT layout for all [lang] routes.
// Next.js 14+ allows a dynamic segment to be the root layout (no app/layout.js needed).
export default async function LangLayout({ children, params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir}>
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1443902503720485');
              fbq('track', 'PageView');
            `,
          }}
        />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "We Buy Dead Stocks",
              url: "https://webuydeadstocks.com",
              logo: "https://webuydeadstocks.com/images/logo.png",
              sameAs: [
                "https://www.facebook.com/webuydeadstocks/",
                "https://www.instagram.com/webuydeadstocks",
                "https://www.linkedin.com/company/chaudary-anwar-tr.-co-llc/",
              ],
            }),
          }}
        />
      </head>
      <body className={montserrat.variable}>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} alt=""
            src="https://www.facebook.com/tr?id=1443902503720485&ev=PageView&noscript=1"
          />
        </noscript>
        {/* HtmlDirUpdater keeps lang/dir in sync on client-side navigation */}
        <HtmlDirUpdater lang={lang} />
        <ClientLayout>
          <GoogleTranslate />
          <Navbar lang={lang} />
          {children}
          <Footer lang={lang} />
        </ClientLayout>
      </body>
    </html>
  );
}