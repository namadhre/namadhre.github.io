
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
    title: "Biasket Clone",
    description: "A full-stack e-commerce platform with user authentication, product management, cart functionality, and payment processing using Stripe.",
    image: "/public/bb_clone.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    github: "https://github.com/namadhre/Big_Basket_Clone",
    demo: "https://namadhre-big-basket-clone.vercel.app/",
    featured: true
  },
  {
    title: "Image Processing",
    description: "Developed an asynchronous image processing system (Complete Backend project) that takes a CSV file containing image URLs, compresses the images, stores them, and returns a processed CSV file.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Node.js", "Express.js", "BullMQ (Redis)", "PostgreSQL", "Sharp"],
    github: "https://github.com/namadhre/image-compressor",
    demo: "https://image-compressor-app.up.railway.app/",
    featured: true
  },
  {
    title: "Memory Game",
    description: "Created a dynamic, interactive memory game with multiple difficulty levels. Implemented game logic using JavaScript and DOM manipulations..",
    image: "/public/Memorygame.png",
    tags: ["JavaScript", "CSS", "HTML", "DOM", "Local Storage"],
    github: "https://github.com/namadhre/Memory-Game",
    demo: "https://namadhre-memory-game.vercel.app/",
    featured: false
  },
  {
    title: "Fake Store",
    description: "Created a dynamic, interactive memory game with multiple difficulty levels. Implemented game logic using JavaScript and DOM manipulations.",
    image: "/public/fake_store.png",
    tags: ["React", "Node.js", "CSS", "CRUD Operations"],
    github: "https://github.com/namadhre/CRUD_APP",
    demo: "https://namadhre-crud-appe.vercel.app/",
    featured: true
  },
  {
    title: "Calculator App",
    description: "Developed a weather dashboard that displays current weather conditions and forecasts for multiple locations using OpenWeather API.",
    image: "/public/calculator.png",
    tags: ["JavaScript", "CSS", "React", "Redux"],
    github: "https://github.com/namadhre/Calculator_App",
    demo: "https://namadhre-calculator.vercel.app/",
    featured: false
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading mb-12">
          <span className="font-mono text-highlight mr-2">03.</span> Some Things I've Built
        </h2>

        <div className="space-y-20 mb-20">
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
