import Hero from "@/components/home/Hero";
import SubHero from "@/components/home/SubHero";
import Services from "@/components/home/Services";
import Partners from "@/components/Partners";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import ProcessSteps from "@/components/home/ProcessSteps";
import Portfolio from "@/components/home/Portfolio";
import EcomBoost from "@/components/EcomBoost";
import Testimonials from "@/components/home/Testimonials";
import GraphicShowcase from "@/components/home/GraphicShowcase";
import WhyUs from "@/components/home/WhyUs";
import TechTools from "@/components/home/TechTools";
import BlogPreview from "@/components/home/BlogPreview";
import MarketingSystem from "@/components/home/MarketingSystem";
import MicroFeatures from "@/components/home/MicroFeatures";
import HowWeHelp from "@/components/home/HowWeHelp";
import Compare from "@/components/home/Compare";


export default function Home(){
  return (
    <>
      <Hero />
      <SubHero />
      <Services />
	  <WhyUs />
      <Partners />
	  <Portfolio />
	  <GraphicShowcase />
	  <TechTools />
	  <MarketingSystem />
	  <MicroFeatures />
	  <HowWeHelp /> 
	  <EcomBoost />
	  <ProcessSteps />
	  <BlogPreview />
	  <Testimonials />
      <FAQ />
	  <Compare />
      <CTA />
    </>
  );
}
