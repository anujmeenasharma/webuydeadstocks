import Landing from "@/components/pages/Home/Landing";
import LatestBlogs from "@/components/pages/Home/LatestBlogs";
import TextReveal from "@/components/pages/Home/TextReveal";
import OurInterest from "@/components/pages/Home/OurInterest";
import Pricing from "@/components/pages/Home/Pricing";
import TrustedSection from "@/components/pages/Home/TrustedSection";
import OurProcess from "@/components/pages/Home/OurProcess";
import Recycling from "@/components/pages/Home/Recycling";
import MapSection from "@/components/pages/Home/MapSection";
import ScrollMaps from "@/components/pages/Home/ScrollMaps";

const page = () => {
  return (
    <div>
      <Landing />
      <TextReveal />
      <ScrollMaps />
      <OurProcess />
      <OurInterest />
      <Pricing />
      <TrustedSection />
      <Recycling />
      <LatestBlogs />
    </div>
  )
}

export default page