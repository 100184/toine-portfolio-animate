
import React from "react";
import AnimatedSection from "../AnimatedSection";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Een responsive portfolio website gebouwd met React en Tailwind CSS.",
    image: "/placeholder.svg",
    url: "#"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Een volledig functioneel e-commerce platform met productcatalogus en betalingssysteem.",
    image: "/placeholder.svg",
    url: "#"
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "Een elegante website voor een lokaal restaurant met online reserveringssysteem.",
    image: "/placeholder.svg",
    url: "#"
  },
  {
    id: 4,
    title: "Dashboard App",
    description: "Een interactief dashboard voor data visualisatie met real-time updates.",
    image: "/placeholder.svg",
    url: "#"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <AnimatedSection id="projects" className="max-w-6xl mx-auto">
      <h2 className="section-title">Projecten</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="group bg-medium-gray rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300 shadow-lg"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-red transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {project.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
