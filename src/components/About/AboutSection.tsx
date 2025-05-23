
import React, { useState, useEffect } from "react";
import AnimatedSection from "../AnimatedSection";

const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  
  useEffect(() => {
    console.log("AboutSection rendered - v1");
  }, []);

  return (
    <AnimatedSection id="about" className="max-w-4xl mx-auto">
      <h2 className="section-title">Over Mij</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <div className="rounded-xl overflow-hidden h-full bg-light-gray/10">
            {imageError ? (
              <div className="flex items-center justify-center h-full p-4 text-white/60">
                <p>Afbeelding niet beschikbaar</p>
              </div>
            ) : (
              <img 
                src="/fotoporto.jpg" 
                alt="Toine Louis Heijstek" 
                className="h-full w-full object-cover"
                onError={(e) => {
                  console.error("Error loading image path:", e.currentTarget.src);
                  setImageError(true);
                }}
              />
            )}
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col justify-center">
          <div className="prose prose-invert max-w-none">
            <p className="text-white/80 mb-4">
             Ik ben Toine Louis Heijstek. Ik 18 jaar en zit op de opleiding Software Developing op het Grafisch Lyceum Rotterdam.
            </p>
            <p className="text-white/80 mb-4">
              Ik ben geboren op 9 Maart 2007. Ik woon in Vlaardingen en ik heb op het Mavo Schravenlant XL mijn mavo diploma techniek gehaald. Ik had nog niet eerder gecoded, dus de inschrijving van het GLR, was de eerste keer dat ik ging coderen.
            </p>
            <p className="text-white/80">
              Nog overige informatie over mijzelf. Met mijn talen ben ik heel goed in Engels en ik ben de laatste 100 dagen al bezig met Zweeds leren. Ik heb ook in de zomervakantie van 2024 mijn rijbewijs gehaald. Ik vind mijzelf creatief, want ik hou van bedenken van een idee.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
