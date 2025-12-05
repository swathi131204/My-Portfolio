import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express"],
  },
  {
    title: "Database",
    skills: ["MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman"],
  },
];

const Skills = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div
          ref={headerRef}
          className={cn("text-center mb-16 reveal", headerVisible && "visible")}
        >
          <span className="inline-block px-3 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full mb-4 uppercase tracking-wider">
            Skills
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Technical Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-card transition-all duration-300 reveal",
        isVisible && "visible"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="font-display text-lg font-semibold text-foreground mb-5">
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className={cn(
              "px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-lg hover:bg-accent transition-all duration-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}
            style={{ transitionDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
