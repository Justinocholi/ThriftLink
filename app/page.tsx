// app/page.tsx
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Categories from "@/components/Categories";
import Stats from "@/components/Stats";
import FeaturedVendors from "@/components/FeaturedVendors";
import Search from "@/components/Search";
import Style from "./app/globals.css";

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
