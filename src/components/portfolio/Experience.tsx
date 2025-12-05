import { Briefcase, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "SYNCNER",
    duration: "Feb 2025 - Nov 2025",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js",
      "Contributed to real time collaboration features",
      "Implemented RESTful APIs and integrated third-party services",
      
    ],
  },
  {
    role: "Web Developement Intern",
    company: "INFOTACT SOLUTIONS",
    duration: "Apr 2025 - July 2025",
    responsibilities: [
      "Built responsive user interfaces using HTML, CSS, and JavaScript",
      "Assisted in backend development with Express.js and MongoDB",
      "Fixed bugs and implemented new features based on client requirements",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "SOFTWARE TECH SOLUTION PVT LTD",
    duration: "July 2024 - Aug 2024",
    responsibilities: [
      "Learned modern web development frameworks and best practices",
      "Created landing pages and simple web applications",
      "Worked with Git for version control and team collaboration",
    ],
  },
];

const Experience = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div
          ref={headerRef}
          className={cn("text-center mb-16 reveal", headerVisible && "visible")}
        >
          <span className="inline-block px-3 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full mb-4 uppercase tracking-wider">
            Experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Work History
          </h2>
        </div>

        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({
  item,
  index,
}: {
  item: (typeof experienceData)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={cn(
        "group bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border hover:shadow-card transition-all duration-300 reveal",
        isVisible && "visible"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-muted rounded-lg">
              <Briefcase className="text-foreground" size={18} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              {item.role}
            </h3>
          </div>
          <p className="text-muted-foreground font-medium">{item.company}</p>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground bg-muted px-3 py-1.5 rounded-full w-fit">
          <Calendar size={14} />
          <span className="text-sm font-medium">{item.duration}</span>
        </div>
      </div>

      <ul className="space-y-3">
        {item.responsibilities.map((resp, respIndex) => (
          <li key={respIndex} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
            <span className="text-muted-foreground text-sm leading-relaxed">
              {resp}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
