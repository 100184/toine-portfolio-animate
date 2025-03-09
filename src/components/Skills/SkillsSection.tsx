
import React, { useState, useRef, useEffect } from "react";
import AnimatedSection from "../AnimatedSection";
import SkillSlider from "../ui/SkillSlider";

const skills = [
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 85 },
  { name: "JavaScript", percentage: 75 },
  { name: "PHP", percentage: 65 },
];

const SkillsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once we've seen it, no need to observe anymore
          if (currentRef) observer.unobserve(currentRef);
        }
      },
      { threshold: 0.3 }
    );
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <AnimatedSection id="skills" className="max-w-4xl mx-auto">
      <div ref={sectionRef}>
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
          {skills.map((skill, index) => (
            <SkillSlider
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              delay={index * 200}
              isVisible={isVisible}
            />
          ))}
        </div>
        
        <div className="bg-medium-gray p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4">Wat ik wil leren</h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-white/80 mb-4">
              Ik wil graag mijn vaardigheden verbeteren op het gebied van:
            </p>
            <ul className="list-disc pl-5 text-white/80 space-y-2">
              <li>React en moderne JavaScript frameworks</li>
              <li>UI/UX design principles</li>
              <li>Backend development met Node.js</li>
              <li>Database management en optimalisatie</li>
              <li>Responsive design technieken</li> 
              <li>Beter begrijpen hoe php werkt</li> 
              <li>beginnen met Python code leren</li> 
            </ul>
            <p className="text-white/80 mt-4">
              Door blijvend te leren en nieuwe technologieën te verkennen, kan ik professioneel blijven groeien en betere oplossingen ontwikkelen voor complexe problemen.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
