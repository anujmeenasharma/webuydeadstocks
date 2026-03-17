import Landing from "@/components/pages/Home/Landing";
import LatestBlogs from "@/components/pages/Home/LatestBlogs";
import TextReveal from "@/components/pages/Home/TextReveal";
import Services from "@/components/pages/Home/Services";
import Pricing from "@/components/pages/Home/Pricing";
import TrustedSection from "@/components/pages/Home/TrustedSection";
import OurProcess from "@/components/pages/Home/OurProcess";
import Recycling from "@/components/pages/Home/Recycling";
import MapSection from "@/components/pages/Home/MapSection";
import ScrollMaps from "@/components/pages/Home/ScrollMaps";

export const metadata = {
  title: {
    absolute: "We Buy Dead Stocks | Dead stock buyer in the UAE and GCC region",
  },
  description:
    "We Buy Dead Stocks is a leading dead stock buyer in the UAE and GCC region. We purchase surplus inventory, expired goods, and excess stock.",
  alternates: {
    canonical: "https://www.webuydeadstocks.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const page = () => {
  return (
    <div>
      <Landing />
      <TextReveal />
      <ScrollMaps />
      <OurProcess />
      <Services />
      <Pricing />
      <TrustedSection />
      <Recycling />
      <LatestBlogs />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "We Buy Dead Stocks",
            "url": "https://www.webuydeadstocks.com/",
            "description": "We Buy Dead Stocks is a leading dead stock buyer in the UAE and GCC region.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.webuydeadstocks.com/services/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </div>
  )
}

export default page