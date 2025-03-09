
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import Footer from "@/components/Footer/Footer";

const Index = () => {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleIntroComplete = () => {
    setIntroCompleted(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-gray">
        <div className="w-12 h-12 rounded-full border-4 border-accent-red border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-gray text-white">
      <Navbar introCompleted={introCompleted} />
      
      <main>
        <HeroSection onIntroComplete={handleIntroComplete} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
