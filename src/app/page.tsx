import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import ChainSupport from "@/components/ChainSupport";
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
        <ChainSupport />
        <Stats />
        <FAQ />
        <CTAFooter />
      </main>
    </>
  );
}
