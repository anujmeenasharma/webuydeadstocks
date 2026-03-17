import ClientLayout from "./clientLayout";
import Navbar from "@/components/Partials/Navbar";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Partials/Footer";
import GoogleTranslate from "@/components/GoogleTranslate";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.webuydeadstocks.com"),
  title: {
    template: "We Buy Dead Stocks | %s",
    default: "We Buy Dead Stocks",
  },
  description: "We Buy Dead Stocks is a leading dead stock buyer in the UAE and GCC region.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
              "name": "We Buy Dead Stocks",
              "url": "https://www.webuydeadstocks.com",
              "logo": "https://www.webuydeadstocks.com/images/logo.png",
              "sameAs": [
                "https://www.facebook.com/webuydeadstocks/",
                "https://www.instagram.com/webuydeadstocks",
                "https://www.linkedin.com/company/chaudary-anwar-tr.-co-llc/"
              ]
            })
          }}
        />
      </head>
      <body className={montserrat.variable}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1443902503720485&ev=PageView&noscript=1"
          />
        </noscript>
        <ClientLayout>
          <GoogleTranslate />
          <Navbar />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}