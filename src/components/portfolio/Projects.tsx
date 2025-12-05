import { Github, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const projectsData = [
  {
    title: "CLIMATE DASH",
    description:
      " A Weather dashboard that displays real time temperature and weather details of selected cities.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/swathi131204/ClimateDash",
  },
  {
    title: "BLOOD DONATION SYSTEM",
    description:
      "Improve donor engagement, Managing donor registrations and Blood requests efficiently.",
    techStack: ["React", "Express", "MongoDB"],
    github: "https://github.com/swathi131204/Blood-Donation-System",
  },
  {
    title: "GREATERGO",
    description:
      "Vehicle Management System that transforms the way we travel connects users to variety of vehicles from taxis to rentals, offering unmatched convenience.",
    techStack: ["React", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com",
  },
  {
    title: "MEDIFINDER",
    description:
      "Medifinder could offer a tool that allows users to identify unknown pills or tablets by entering basic informations.",
    techStack: ["HTML", "CSS", "JavaScript", "API Integration"],
    github: "https://github.com",
  },
  {
    title: "TASK MANAGER",
    description:
      "Users create, track, and organize tasks with secure authentication and a clean, responsive UI.",
    techStack: ["React", "Express", "MongoDB",],
    github: "https://github.com",
  },
  {
    title: "ONLINE QUIZ",
    description:
      "An interactive online quiz platform that delivers timed quizzes, auto-evaluates answers, and provides instant results with secure user management.",
    techStack: ["React", "Node.js", "GitHub", "MongoDB", "Postman"],
    github: "https://github.com",
  },
];

const Projects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-4 bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={headerRef}
          className={cn("text-center mb-16 reveal", headerVisible && "visible")}
        >
          <span className="inline-block px-3 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full mb-4 uppercase tracking-wider">
            Projects
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Featured Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projectsData)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        "group bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 flex flex-col reveal-scale",
        isVisible && "visible"
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
          <span className="text-lg font-display font-bold text-foreground">
            {index + 1}
          </span>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
        >
          <Github size={20} />
        </a>
      </div>

      <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors flex items-center gap-2">
        {project.title}
        <ArrowUpRight
          size={16}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2.5 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Projects;
