
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  onIntroComplete: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onIntroComplete }) => {
  const [introState, setIntroState] = useState<"initial" | "animated" | "completed">("initial");

  useEffect(() => {
    // Start initial animation after a short delay
    const initialTimer = setTimeout(() => {
      setIntroState("animated");
      
      // After animation completes, move to completed state
      const completionTimer = setTimeout(() => {
        setIntroState("completed");
        onIntroComplete();
      }, 3000); // Duration of the animation plus some buffer
      
      return () => clearTimeout(completionTimer);
    }, 500);
    
    return () => clearTimeout(initialTimer);
  }, [onIntroComplete]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <div className={cn(
        "flex flex-col items-center transition-all duration-1000",
        introState === "initial" ? "opacity-0" : "opacity-100",
        introState === "completed" ? "translate-y-[-40vh]" : "translate-y-0"
      )}>
        <div className="mb-6 relative">
          <div className={cn(
            "rounded-full h-40 w-40 md:h-48 md:w-48 border-4 border-accent-red overflow-hidden",
            introState !== "initial" && "animate-photo-entry"
          )}>
            <img 
              src="/toineportofoto.png" 
              alt="Toine Louis Heijstek" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        
        <h1 className={cn(
          "text-4xl md:text-5xl lg:text-6xl text-white font-serif font-semibold mb-4",
          introState !== "initial" && "animate-name-entry"
        )}>
          Toine Louis Heijstek
        </h1>
        
        <div className={cn(
          "flex flex-col md:flex-row items-center gap-4 text-white/80 opacity-0",
          introState === "animated" && "animate-fade-in delay-500"
        )}>
          <a href="mailto:email@example.com" className="flex items-center gap-2 hover:text-accent-red transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>toineheijstek@gmail.com</span>
          </a>
          <span className="hidden md:inline">•</span>
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent-red transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>06 13633623</span>
          </a>
        </div>
      </div>

      <div className={cn(
        "absolute bottom-10 opacity-0",
        introState === "animated" && "animate-fade-in delay-500"
      )}>
        <div className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
