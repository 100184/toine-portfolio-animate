
import React from "react";
import AnimatedSection from "../AnimatedSection";

const projects = [
  {
    id: 1,
    title: "Ziekenhuis schermen",
    description: "Een website waarop je 5 animaties ziet voor mensen in het ziekenhuis.",
    image: "/superman.png",
    url: "https://100207.stu.sd-lab.nl/BeroepsZiekenhuis/homepage/homepage.html?classId=fc88c06a-8c99-40f6-82e7-a32694394b39&assignmentId=de56cb20-e590-4ff2-b9c7-e3354c704bbb&submissionId=95c7b605-76f0-0a0b-2abe-9496849b4ac9"
  },
  {
    id: 2,
    title: "Muziek Magazine",
    description: "Een Muziek magazine in een groep gemaakt van 2. Dit project werkt niet meer helemaal, maar het design en een paar functies werken nog.",
    image: "/foto1.png",
    url: "https://100187.stu.sd-lab.nl/beroeps2/musicmagnetmagazine/register.php?classId=fc88c06a-8c99-40f6-82e7-a32694394b39&assignmentId=f5050ad5-79ef-4709-84b6-1df0e5433102&submissionId=849d0ef7-6fdf-d532-37f8-5a9a392d2e07"
  },
  {
    id: 3,
    title: "Gezond eten App",
    description: "Een mooie gemaakte app gemaakt in een team van 3. Op deze app kan je allemaal recepten bekijken die gezond zijn en gemaakt zijn door andere gebruikers.",
    image: "/food.png",
    url: "https://088484.stu.sd-lab.nl/Ontkoking/php/index.php?classId=fc88c06a-8c99-40f6-82e7-a32694394b39&assignmentId=affcf9f4-3056-4ecf-816e-6e4e2756015f&submissionId=c7da4641-982b-0968-bb5b-2bc91f55dbe1"
  },
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
