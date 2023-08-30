import WhoHaveIImpacted from "@/WhoHaveIImpacted/Portfolio";
import AboutMeSection from "./components/AboutMeSection";
import HeroSection from "./components/HeroSection";
import WhatCanIdoSection from "./components/WhatCanIdoSection/WhatCanIdoSection";
import WhatHaveIDone from "@/WhatHaveIDone";
import Contact from "@/Contact";
import Footer from "@/Footer"
import Modal from "@/Modal";

export default function Home() {
  return (
    <main className="max-w-[100vw]">
      {/* <Modal> */}
      <HeroSection />
      <AboutMeSection />
      <WhatCanIdoSection />
      <WhoHaveIImpacted />
      <WhatHaveIDone />
      <Contact />
      <Footer />
      {/* <Modal /> */}
      {/* </Modal> */}
    </main>
  )
} 