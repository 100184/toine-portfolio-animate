
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
              Dit is een test voor het bijwerken van de content. Als je deze tekst ziet, dan werken de updates.
            </p>
            <p className="text-white/80 mb-4">
              Nunc ut sem vitae risus tristique posuere. Aliquam erat volutpat. Fusce tincidunt quis nibh eu fermentum. Curabitur vitae nunc sed velit dignissim sodales ut eu. Donec id elit non mi porta gravida at eget metus.
            </p>
            <p className="text-white/80">
              Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
