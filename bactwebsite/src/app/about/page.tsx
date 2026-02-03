import React from "react";
import CompanyAbout from "@/components/about/CompanyAbout";
import AboutSection from "@/components/about/AboutSection";
import OurCompany from "@/components/about/OurCompany";
import StatisticSection from "@/components/about/StatisticSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
        <AboutSection />
        <CompanyAbout />
        <StatisticSection />
        <OurCompany />
    </main>
  );
}
