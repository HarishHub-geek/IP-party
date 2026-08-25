import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import CoreIdea from "@/components/CoreIdea";
import SprintEngine from "@/components/SprintEngine";
import WhatYouGet from "@/components/WhatYouGet";
import SpeakersSection from "@/components/SpeakersSection";
import DetailsSection from "@/components/DetailsSection";
import Expectations from "@/components/Expectations";
import WaitlistSection from "@/components/WaitlistSection";
import WeDeliver from "@/components/WeDeliver";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <CoreIdea />
        <SprintEngine />
        <Marquee />
        <WhatYouGet />
        <SpeakersSection />
        <DetailsSection />
        <Expectations />
        <WaitlistSection />
        <WeDeliver />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
