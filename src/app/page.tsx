import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import WhyMidnight from "@/components/WhyMidnight";
import FAQ from "@/components/FAQ";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <WhyMidnight />
        <FAQ />
      </main>
      <CTAFooter />
    </>
  );
}
