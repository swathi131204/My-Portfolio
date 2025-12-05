import { Download, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";
import resumeFile from "@/assets/Resume25.pdf";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4"
    >
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="animate-fade-up opacity-0">
                <span className="inline-block px-4 py-1.5 bg-secondary text-muted-foreground text-sm font-medium rounded-full mb-6">
                  Full Stack Developer
                </span>
              </div>

              <h1 className="animate-fade-up opacity-0 animation-delay-100 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="relative">
                  Swathi S
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-foreground/20 rounded-full" />
                </span>
              </h1>

              <div className="animate-fade-up opacity-0 animation-delay-200">
                <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                  Passionate about building elegant, user-centric web applications
                  that solve real-world problems. I transform ideas into seamless
                  digital experiences.
                </p>
              </div>

              <div className="animate-fade-up opacity-0 animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" asChild>
  <a href={resumeFile} download="Resume25.pdf">
    <Download size={18} />
    Download Resume
  </a>
</Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="#contact">
                    <Mail size={18} />
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="animate-scale-in opacity-0 relative">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-br from-muted to-accent rounded-full blur-2xl opacity-60" />
                
                {/* Profile image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-card">
                  <img
                    src={profileImage}
                    alt="Swathi S - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 bg-card px-4 py-2 rounded-full shadow-soft border border-border">
                  <span className="text-sm font-medium text-foreground">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-up opacity-0 animation-delay-500 mt-16 flex justify-center">
            <a
              href="#education"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm font-medium">Scroll down</span>
              <ArrowDown size={20} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
