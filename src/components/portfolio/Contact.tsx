import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "swathisas2020@email.com",
    href: "mailto:swathisas2020@email.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9566832600",
    href: "tel:+919566832600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/swathi-sundar-",
    href: "https://www.linkedin.com/in/swathi-sundar-",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/swathi",
    href: "https://github.com/swathi131204",
  },
];

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 px-4 bg-muted/50">
      <div className="container mx-auto max-w-3xl">
        <div
          ref={headerRef}
          className={cn("text-center mb-16 reveal", headerVisible && "visible")}
        >
          <span className="inline-block px-3 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full mb-4 uppercase tracking-wider">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div
          ref={cardRef}
          className={cn(
            "bg-card rounded-2xl p-8 shadow-soft border border-border reveal-scale",
            cardVisible && "visible"
          )}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={cn(
                    "group flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-all duration-300",
                    cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="p-2.5 bg-muted rounded-lg group-hover:bg-accent transition-colors">
                    <Icon className="text-foreground" size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium text-sm">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div
            className={cn(
              "mt-6 pt-6 border-t border-border transition-all duration-500",
              cardVisible ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <MapPin size={16} />
              <span>Theni, Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
