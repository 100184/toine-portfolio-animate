
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  introCompleted: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ introCompleted }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background opacity based on scroll position
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects"];
      
      const scrollPosition = window.scrollY + 100; // Offset to account for navbar height

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 bg-dark-gray/90 backdrop-blur-md shadow-md" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div 
            className={cn(
              "relative overflow-hidden rounded-full border-2 border-accent-red h-12 w-12 transition-all duration-500",
              introCompleted ? "animate-photo-to-navbar" : "opacity-0"
            )}
          >
            <img 
              src="/placeholder.svg" 
              alt="Toine Louis Heijstek" 
              className="h-full w-full object-cover"
            />
          </div>
          <h2 
            className={cn(
              "text-white font-serif text-lg md:text-xl transition-all duration-500",
              introCompleted ? "animate-name-to-navbar" : "opacity-0"
            )}
          >
            Toine Louis Heijstek
          </h2>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["home", "about", "skills", "projects"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={cn(
                    "nav-link capitalize",
                    activeSection === section && "active"
                  )}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu (simplified for this implementation) */}
        <nav className="block md:hidden">
          <ul className="flex space-x-4">
            {["home", "about", "skills", "projects"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={cn(
                    "nav-link text-xs capitalize",
                    activeSection === section && "active"
                  )}
                >
                  {section.charAt(0).toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
