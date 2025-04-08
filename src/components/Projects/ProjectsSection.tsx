
import React from "react";
import AnimatedSection from "../AnimatedSection";

const projects = [
  {
    id: 1,
    title: "Ziekenhuis schermen",
    description: "Een website waarop je 5 animaties ziet voor mensen in het ziekenhuis.",
    image: "/placeholder.svg",
    url: "https://100207.stu.sd-lab.nl/BeroepsZiekenhuis/homepage/homepage.html?classId=fc88c06a-8c99-40f6-82e7-a32694394b39&assignmentId=de56cb20-e590-4ff2-b9c7-e3354c704bbb&submissionId=95c7b605-76f0-0a0b-2abe-9496849b4ac9"
  },
  {
    id: 2,
    title: "Muziek Magazine",
    description: "Een Muziek magazine in een groep gemaakt van 2. Dit project werkt niet meer helemaal, maar het design en een paar functies werken nog.",
    image: "/placeholder.svg",
    url: "#"
  },
  {
    id: 3,
    title: "Gezond eten App",
    description: "Een mooie gemaakte app gemaakt in een team van 3. Op deze app kan je allemaal recepten bekijken die gezond zijn en gemaakt zijn door andere gebruikers.",
    image: "/placeholder.svg",
    url: "#"
  },
  {
    id: 4,
    title: "Toetsweek over Space ",
    description: "Het eindresultaat van de toetsweek over space.",
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
