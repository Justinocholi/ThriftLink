// app/page.tsx
'use client';

import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Categories from "@/components/Categories";
import Stats from "@/components/Stats";
import FeaturedVendors from "@/components/FeaturedVendors";
import Search from "@/components/Search";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Search />
      <HowItWorks />
      <Categories />
      <Stats />
      <FeaturedVendors />
      <CTA />
    </>
  );
}
