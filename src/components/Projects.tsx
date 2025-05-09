
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, cart functionality, and payment processing using Stripe.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "Task Management System",
    description: "A collaborative task management application featuring real-time updates, task assignments, priority levels, and progress tracking.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["TypeScript", "React", "Firebase", "Redux", "Material UI"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application that displays current conditions and 5-day forecasts for multiple locations with interactive maps.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["JavaScript", "React", "OpenWeather API", "Chart.js", "Leaflet"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "Social Media Analytics Tool",
    description: "Analytics dashboard for social media managers to track engagement, audience demographics, and content performance.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Python", "Django", "React", "PostgreSQL", "Data Visualization"],
    github: "#",
    demo: "#",
    featured: false
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading mb-12">
          <span className="font-mono text-highlight mr-2">03.</span> Some Things I've Built
        </h2>

        <div className="space-y-32 mb-24">
          {featuredProjects.map((project, i) => (
            <div 
              key={i}
              className={`relative md:grid md:grid-cols-12 gap-4 items-center ${
                i % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              <div 
                className={`md:col-span-7 relative group ${
                  i % 2 === 0 ? "md:col-start-6" : "md:col-start-1"
                }`}
              >
                <div className="absolute inset-0 bg-highlight/20 rounded opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded shadow-lg"
                />
              </div>
              <div 
                className={`md:col-span-6 ${
                  i % 2 === 0 
                    ? "md:col-start-1 md:text-left" 
                    : "md:col-start-7 md:text-right"
                } md:z-10`}
              >
                <p className="font-mono text-highlight text-sm mb-1">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-light mb-4">
                  {project.title}
                </h3>
                <div className="bg-navy p-6 rounded shadow-xl mb-4">
                  <p className="text-slate">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-2 mb-6 ${
                  i % 2 === 0 ? "" : "md:justify-end"
                }`}>
                  {project.tags.map((tag, j) => (
                    <Badge key={j} variant="outline" className="font-mono text-xs bg-transparent">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className={`flex gap-4 ${
                  i % 2 === 0 ? "" : "md:justify-end"
                }`}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-light hover:text-highlight transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-light hover:text-highlight transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl text-slate-light text-center font-semibold mb-8">Other Noteworthy Projects</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, i) => (
            <Card key={i} className="bg-navy border-navy-light hover:border-highlight/50 transition-all h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="text-highlight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate hover:text-highlight transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate hover:text-highlight transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <CardTitle className="text-slate-light">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="pt-2 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, j) => (
                    <span key={j} className="text-xs font-mono text-slate">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-xs font-mono text-slate">+{project.tags.length - 4}</span>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
