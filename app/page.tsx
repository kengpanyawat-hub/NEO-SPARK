// app/page.tsx
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
import SkewGallery from "@/components/gallery/SkewGallery";
import ServiceCategories from "@/components/sections/ServiceCategories";
import SmmShowcase from "@/components/SmmShowcase";

import { buildMeta, jsonLd, SITE } from "./lib/seo";

export const metadata = buildMeta({
  // ใช้ absolute จะไม่ต่อ template
  title: { absolute: "NEO SPARK — เอเจนซี่ดิจิทัลครบวงจร" } as any,
  description: "ทำเว็บ Next.js เร็ว สวย แรง + คอนเทนต์/โมชั่น + ยิงแอดวัดผลครบวงจร",
  canonical: "/",
  image: "/og/og-home.jpg",
});

export default function Home() {
  const org = jsonLd.organization();
  const breadcrumb = jsonLd.breadcrumb([{ name: "Home", item: `${SITE.url}/` }]);

  const works = Array.from({ length: 10 }).map(() => ({ src: "/graphics/g1.jpg" }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <Hero />
      <SubHero />
      <Services />
      <ServiceCategories />
      <SkewGallery id="work" title="Selected works" items={works} rows={3} cardWidth={560} cardHeight={315} gap={24} duration={26} skewDeg={4} className="mx-auto max-w-[1440px]" />
      <WhyUs />
      <Partners />
      <GraphicShowcase />
      <MicroFeatures />
      <HowWeHelp />
      <SmmShowcase />
      <TechTools />
      <MarketingSystem />
      <EcomBoost />
      <ProcessSteps />
      <Portfolio />
      <BlogPreview />
      <Testimonials />
      <FAQ />
      <Compare />
      <CTA />
    </>
  );
}
