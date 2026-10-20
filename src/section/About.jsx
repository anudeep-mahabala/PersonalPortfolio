import {
  ArrowUpDown,
  Code2,
  Globe,
  RocketIcon,
  ShieldAlertIcon,
  UserPen,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing readable, maintainable code that stands the test of time.",
  },
  {
    icon: RocketIcon,
    title: "Performance",
    description:
      "Building fast, efficient apps, from optimized queries to responsive interfaces.",
  },
  {
    icon: ShieldAlertIcon,
    title: "Type Safety",
    description:
      "Using TypeScript across the stack to catch bugs early and keep codebases reliable.",
  },
  {
    icon: UserPen,
    title: "End-to-End Ownership",
    description:
      "Taking features from UI to API to database, with testing and deployment in mind.",
  },
  {
    icon: ArrowUpDown,
    title: "API Design",
    description:
      "Crafting clean, well-documented REST APIs that other developers enjoy using.",
  },
  {
    icon: Globe,
    title: "Real-Time Systems",
    description:
      "Building live features with WebSockets and event-driven backends.",
  },
];

const About = () => {
  return (
    <section id="about" py-32 relative overflow-hidden>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-200 text-secondary-foreground">
              I turn ideas into
              <span className="font-serif italic font-normal text-white">
                {" "}
                full stack product
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-300">
              <p>
                I’m Anudeep, a full-stack developer based in Bengaluru with an
                MTech in Computer Science from Dayananda Sagar College of
                Engineering. I enjoy owning a feature end to end: designing the
                interface in React, shaping the API in Node.js and TypeScript,
                and modelling the data in PostgreSQL.
              </p>
              <p>
                I completed my BTech in 2024 and began focusing on backend
                development that same year, interning as a backend developer
                where I built RESTful APIs with Node.js and Express, handled
                request validation and error handling, and worked with MongoDB.
                That experience taught me that good software is mostly the
                unglamorous parts: clean structure, sensible error handling, and
                code the next person can read.
              </p>
              <p>
                Outside coursework, I build projects that push me into harder
                territory, from a multi-layer ransomware-resilient backup system
                to a fully local RAG pipeline that runs LLMs without any cloud
                dependency. I’m now looking for a full-stack or backend role
                where I can keep shipping, learning, and working with a team
                that cares about quality.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-400">
              <p className="text-lg font-medium italic text-foreground">
                "I want to build full-stack products that people enjoy using and
                teams enjoy maintaining: clean interfaces, reliable APIs, and
                data models that hold up as things grow."
              </p>
            </div>
          </div>
          {/* Right Columns */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
