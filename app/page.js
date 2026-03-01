import Landing from "@/components/pages/Home/Landing";
import LatestBlogs from "@/components/pages/Home/LatestBlogs";
import TextReveal from "@/components/pages/Home/TextReveal";
import OurInterest from "@/components/pages/Home/OurInterest";
import Pricing from "@/components/pages/Home/Pricing";
import TrustedSection from "@/components/pages/Home/TrustedSection";
import OurProcess from "@/components/pages/Home/OurProcess";
import Recycling from "@/components/pages/Home/Recycling";

const page = () => {
  return (
    <div>
      <Landing />
      {/* <TextReveal />
      <OurInterest />
      <LatestBlogs />
      <Pricing />
      <TrustedSection />
      <OurProcess /> */}
      <Recycling />
    </div>
  )
}

export default page