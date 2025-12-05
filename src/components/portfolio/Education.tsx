import { GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const educationData = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "SNS College Of Engineering",
    year: "2022 - 2026",
    description: "Specialized in software engineering and web development",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Santiniketan Matriculation Higher Secondary School",
    year: "2020 - 2022",
    description: "Percentage: 70%",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Santiniketan Matriculation Higher Secondary School",
    year: "2019 - 2020",
    description: "Percentage: 94%",
  },
];

const Education = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section id="education" className="py-24 px-4 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <div
          ref={headerRef}
          className={cn("text-center mb-16 reveal", headerVisible && "visible")}
        >
          <span className="inline-block px-3 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full mb-4 uppercase tracking-wider">
            Education
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Academic Background
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {educationData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({
  item,
  index,
}: {
  item: (typeof educationData)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0",
        isEven ? "md:flex-row-reverse" : ""
      )}
    >
      {/* Timeline Dot */}
      <div
        className={cn(
          "absolute left-0 md:left-1/2 w-3 h-3 bg-foreground rounded-full -translate-x-1/2 mt-2 z-10 transition-transform duration-500",
          isVisible ? "scale-100" : "scale-0"
        )}
      />

      {/* Content */}
      <div
        className={cn(
          "ml-8 md:ml-0 md:w-1/2",
          isEven ? "md:pl-12 reveal-left" : "md:pr-12 md:text-right reveal-right",
          isVisible && "visible"
        )}
      >
        <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-card transition-all duration-300">
          <div
            className={cn(
              "flex items-center gap-3 mb-4",
              !isEven && "md:justify-end"
            )}
          >
            <div className="p-2 bg-muted rounded-lg">
              <GraduationCap className="text-foreground" size={18} />
            </div>
            <span className="text-muted-foreground text-sm font-medium">
              {item.year}
            </span>
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">
            {item.degree}
          </h3>
          <p className="text-muted-foreground font-medium text-sm mb-2">
            {item.institution}
          </p>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2" />
    </div>
  );
};

export default Education;
