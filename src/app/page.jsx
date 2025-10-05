'use client';
import React from "react";
import Projects from "../components/Projects";
import HeroSection from "@/components/WhyUs";

const HomePage = () => {
  return (
    <main>
      <HeroSection/>
      <Projects />
    </main>
  );
};

export default HomePage;
