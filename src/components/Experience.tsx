
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Development Engineer",
    company: "Tech Company Inc.",
    date: "January 2023 - Present",
    points: [
      "Led the development of a microservices architecture, resulting in a 40% improvement in system scalability.",
      "Collaborated with UX designers to implement responsive frontend components using React and TypeScript.",
      "Implemented automated testing workflows that reduced bug report rates by 25%.",
      "Mentored junior developers and conducted code reviews to ensure code quality and standards."
    ]
  },
  {
    title: "Associate Software Engineer",
    company: "Digital Solutions Ltd.",
    date: "June 2021 - December 2022",
    points: [
      "Developed and maintained RESTful APIs using Node.js and Express, servicing over 10,000 daily users.",
      "Optimized database queries that reduced page load times by 30%.",
      "Implemented authentication and authorization systems using JWT and OAuth2.0.",
      "Participated in agile development processes, including daily standups and sprint planning."
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Future Tech Corp",
    date: "January 2021 - May 2021",
    points: [
      "Assisted in developing features for the company's main web application using React and Redux.",
      "Created automated scripts that improved deployment efficiency by 15%.",
      "Participated in UI/UX improvements that positively impacted user engagement metrics.",
      "Collaborated with senior engineers to debug and resolve critical production issues."
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading mb-12">
          <span className="font-mono text-highlight mr-2">02.</span> Where I've Worked
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-32 mb-6 md:mb-0">
            <div className="flex md:flex-col overflow-x-auto whitespace-nowrap md:whitespace-normal">
              {experiences.map((exp, i) => (
                <Button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  variant="ghost"
                  className={`justify-start font-mono text-sm px-4 py-2 border-b-2 md:border-b-0 md:border-l-2 rounded-none transition-all ${
                    activeTab === i
                      ? "text-highlight border-highlight"
                      : "text-slate border-navy-light hover:bg-navy-light/20 hover:text-slate-light"
                  }`}
                >
                  {exp.company.split(' ')[0]}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="animate-fade-in" key={activeTab}>
              <h3 className="text-xl text-slate-light font-semibold mb-1">
                {experiences[activeTab].title}{" "}
                <span className="text-highlight">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-slate mb-4">
                {experiences[activeTab].date}
              </p>
              <ul className="space-y-4">
                {experiences[activeTab].points.map((point, i) => (
                  <li key={i} className="flex">
                    <span className="text-highlight mr-2 mt-1.5 flex-shrink-0">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
