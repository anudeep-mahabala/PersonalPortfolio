import { SiGithub } from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Tags, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimationBorderButton";

const projects = [
  {
    title: "ReviewPilot | AI-Powered Pull Request Reviewer",
    description:
      "ReviewPilot is an AI-powered pull request reviewer that analyzes code changes and gives developers automated feedback on bugs, code quality, and best practices, so reviews are faster and more consistent.",
    image: "/ReviewPilot.png",
    tags: [
      "Typescript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Fastify",
      "Github API",
    ],
    github: "https://github.com/anudeep-mahabala/ReviewPilot",
  },
  {
    title: "DurableFlow — Crash-Proof Workflow Engine",
    description:
      "DurableFlow is a crash-proof workflow engine that runs multi-step processes reliably. It persists the state of every step, so if a process or server crashes midway, the workflow resumes from where it stopped instead of restarting or losing work.",
    image: "/DurableFlow.png",
    tags: [
      "Typescript",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Vitest",
    ],
    github: "https://github.com/anudeep-mahabala/DurableFlow",
  },
  {
    title: "Local RAG Fusion AI Assistant — Private Document Q&A Pipeline",
    description:
      "Local RAG Fusion AI Assistant is a fully local document Q&A pipeline. It ingests your private documents, retrieves relevant passages with hybrid (keyword + vector) search and re-ranking, and generates grounded answers with a locally hosted LLM. Nothing leaves your machine, and answer quality is measured with a Ragas evaluation report.",
    image: "/LocalRAG.png",
    tags: ["Typescript", "React", "Node.js", "Ollama", , "PostgreSQL"],
    github: "https://github.com/anudeep-mahabala/local-rag",
  },
];

const Projects = () => {
  return (
    <section className="mb-32 relative overflow-hidden" id="projects">
      <div className="container mx-auto px-6 relative z-10">
        {/* bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in anitmation-delay-400 text-secondary-foreground">
              Projects that
              <span className="font-serif italic text-white font-normal">
                {" "}
                make an impact.
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Backend and AI-focused projects built around reliability and
              privacy: an AI pull request reviewer, a crash-proof workflow
              engine, and a fully local document Q&A pipeline.
            </p>
          </div>
          {/* Project display */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-background/20 to-background" />
                  {/* overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass hover:bg-primary text-primary-foreground transition-all"
                    >
                      <SiGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <SiGithub className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
