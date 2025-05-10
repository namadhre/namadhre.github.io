
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
}

const projectsData: Project[] = [
  {
    title: "Memory Game",
    description:
      "A fun memory card matching game built with React. Test your memory by finding matching pairs of cards.",
    technologies: ["React", "JavaScript", "CSS"],
    imageUrl: "/portfolio/images/Memorygame.png",
    liveUrl: "https://memory-game-react-smoky.vercel.app/",
    githubUrl: "https://github.com/Namadhre/Memory-game-React",
  },
  {
    title: "E-commerce Store",
    description:
      "A fully responsive e-commerce store with product filtering, cart functionality, and checkout process.",
    technologies: ["React", "Redux", "Tailwind CSS"],
    imageUrl: "/portfolio/images/fake_store.png",
    liveUrl: "https://fakestorenamad.netlify.app/",
    githubUrl: "https://github.com/Namadhre/fakeStore",
  },
  {
    title: "Breaking Bad Clone",
    description:
      "A Breaking Bad themed website that displays character information using the Breaking Bad API.",
    technologies: ["React", "API", "Styled Components"],
    imageUrl: "/portfolio/images/bb_clone.png",
    liveUrl: "https://breaking-bad-clone-ts.netlify.app/",
    githubUrl: "https://github.com/Namadhre/Breaking-Bad-Clone-TS",
  },
  {
    title: "React Calculator",
    description:
      "A fully functional calculator application built with React featuring basic and advanced operations.",
    technologies: ["React", "JavaScript", "CSS"],
    imageUrl: "/portfolio/images/calculator.png",
    liveUrl: "https://namads-calculator.netlify.app/",
    githubUrl: "https://github.com/Namadhre/Calculator-React-App",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:max-w-4xl xl:max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-green mb-2 numbered-heading before:content-['03.'] before:mr-2 before:text-green before:font-mono">
          Some Things I've Built
        </h2>
        <div className="mt-10 grid gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-navy p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-800"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/5 w-full">
                  <div className="overflow-hidden rounded-md aspect-video bg-slate-800">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="md:w-3/5 w-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-lightest-slate">
                      {project.title}
                    </h3>
                    <div className="flex space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lightest-slate hover:text-green transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lightest-slate hover:text-green transition-colors"
                        aria-label={`Live site for ${project.title}`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-slate mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-navy-light text-green border-green text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
