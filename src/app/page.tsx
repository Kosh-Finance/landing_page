import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import WhyMidnight from "@/components/WhyMidnight";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <WhyMidnight />
        <Stats />
        <FAQ />
        <CTAFooter />
      </main>
    </>
  );
}
