
import { Code, Database, Layout } from "lucide-react";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "MongoDB",
  "ExpressJs",
  "React",
  "Node.js",
  "Python",
  "ReduxJs",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Redis",
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading mb-8">
          <span className="font-mono text-highlight mr-2">01.</span> About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="space-y-4 text-base">
              <p>
              I'm a passionate software development engineer with over 2 years of experience in Full Stack Development (Back-End heavy)
              in a SaaS product-based company. I specialize in building scalable web applications using JavaScript, Python, Node.js, and React.js.
              I enjoy problem-solving, working under pressure, and constantly learning new technologies to improve both my personal
               and professional skillset.
              </p>
              <p>
                My approach to development is guided by curiosity, attention to detail, and a commitment to writing
                clean, maintainable code. I enjoy solving complex problems and continuously expanding my skillset
                to stay at the forefront of technology trends.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-6">
              {skills.map((skill, i) => (
                <li key={i} className="flex items-center text-sm">
                  <span className="text-highlight mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-highlight rounded opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Developer" 
              className="relative z-10 rounded grayscale hover:grayscale-0 transition-all duration-300 w-full"
            />
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-navy p-6 rounded-lg border border-navy-light hover:border-highlight/30 transition-all">
            <div className="mb-4 text-highlight">
              <Code size={24} />
            </div>
            <h3 className="text-slate-light text-xl font-semibold mb-2">
              Frontend Development
            </h3>
            <p className="text-slate">
              I enjoy crafting intuitive UIs with modern frontend frameworks,
              focusing on performance and accessibility.
            </p>
          </div>

          <div className="bg-navy p-6 rounded-lg border border-navy-light hover:border-highlight/30 transition-all">
            <div className="mb-4 text-highlight">
              <Database size={24} />
            </div>
            <h3 className="text-slate-light text-xl font-semibold mb-2">
              Backend Engineering
            </h3>
            <p className="text-slate">
              Building robust APIs, optimizing database performance, and ensuring 
              scalable architecture for seamless operations.
            </p>
          </div>

          <div className="bg-navy p-6 rounded-lg border border-navy-light hover:border-highlight/30 transition-all">
            <div className="mb-4 text-highlight">
              <Layout size={24} />
            </div>
            <h3 className="text-slate-light text-xl font-semibold mb-2">
              Full Stack Solutions
            </h3>
            <p className="text-slate">
              Delivering end-to-end solutions, from concept to deployment, with
              a focus on clean code and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
