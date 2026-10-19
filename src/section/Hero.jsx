import Button from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimationBorderButton";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";

const skills = [
  "React",
  "Next.js",
  "Typescript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Redis",
  "Redux",
  "gRPC",
  "Websocket",
  "Git",
  "TailwindCSS",
  "Linux",
  "BullMQ",
  "Figma",
];

const Hero = () => {
  return (
    <section className="reltive min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero-image"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            key={index}
          ></div>
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Text Contet */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-primary glass">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full Stack Developer
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-300">
                Hi, I'm <span className="text-primary glow-text">Anudeep</span>.
                <br />
                I'm a
                <br />
                <span className="font-serif italic font-normal text-white">
                  full stack developer
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-500">
                Full-stack developer and MTech CS student in Bengaluru. I build
                real-time, type-safe web apps with React, TypeScript, Node.js,
                WebSockets, and PostgreSQL.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-600">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            <div className="flex gap-4 items-center animate-fade-in animation-delay-600">
              <span className="text-sm text-muted-foreground">Follow: </span>
              {[
                {
                  icon: SiGithub,
                  href: "https://www.github.com/anudeep-mahabala",
                },
                {
                  icon: SiX,
                  href: "https://www.linkedin.com/in/anudeep-m-ba658020a",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-fullglass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-700">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse " />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-pic (1).png"
                  alt="Anudeep"
                  className="w-full h-150 aspect-4/5 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background " />
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for Work
                    </span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">M.Tech</div>
                  <div className="text-xs text-muted-foreground">
                    in Computer Science
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skill Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-color">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
