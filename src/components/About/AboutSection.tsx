
import React from "react";
import AnimatedSection from "../AnimatedSection";

const AboutSection: React.FC = () => {
  return (
    <AnimatedSection id="about" className="max-w-4xl mx-auto">
      <h2 className="section-title">Over Mij</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <div className="rounded-xl overflow-hidden h-full">
            <img 
              src="/placeholder.svg" 
              alt="Toine Louis Heijstek" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col justify-center">
          <div className="prose prose-invert max-w-none">
            <p className="text-white/80 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique.
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
