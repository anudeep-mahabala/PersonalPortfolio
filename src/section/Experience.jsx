const journey = [
  {
    period: "2024-2026",
    title: "M.Tech",
    company: "Dayananda Sagar College of Engineering",
    type: "Education",
    description:
      "Had a hands on experience over Artificail Intellignece and Deep Learning, and passed out with a CGPA of 8.9/10",
    technologies: [
      "Hadoop",
      "Python for Data Analytics",
      "Tensorflow",
      "Blockchain",
      "Packet Tracing",
      "Deep Learning",
      "Agentic AI",
    ],
    current: true,
  },
  {
    period: "Oct 2023- Dec 2023",
    title: "Backend Intern",
    company: "Aquamenz Automation Pvt. Ltd",
    type: "Internship",
    description:
      "Backend intern at Aquamenz Automation, where I built REST APIs and background job processing with Node.js, Express, MongoDB, and Redis.",
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Redis",
      "BullMQ",
    ],
    current: false,
  },
  {
    period: "2020-2024",
    title: "B.E",
    company: "B M S Institute of Technology",
    type: "Education",
    description:
      "Completed my BTech in Computer Science in 2024, building a strong foundation in programming, data structures, databases, and software engineering.",
    technologies: [
      "Data Structure",
      "OOP's",
      "Web development",
      "Internet of Things",
      "Artificial Intelligence",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="mb-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm uppercase font-medium tracking-wider animate-fade-in">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            From fundamental to
            <span className="text-white italic font-normal font-serif">
              {" "}
              real world systems.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my growth, from curious learner to backend engineer
            building reliable, AI-powered systems.
          </p>
        </div>
        {/* TimeLine */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          {/* Timeline Journey */}
          <div className="space-y-12">
            {journey.map((jrny, index) => (
              <div
                key={index}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {jrny.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                  )}
                </div>
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {jrny.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{jrny.title}</h3>
                    <p className="text-muted-foreground">{jrny.company}</p>
                    <span className="px-3 py-1 bg-primary text-sm rounded-full text-muted">
                      {jrny.type}
                    </span>
                    <p className="text-sm text-muted-foreground mt-4">
                      {jrny.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${index % 2 == 0 ? "md:justify-end" : ""}`}
                    >
                      {jrny.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-surface text-sm rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
export default Experience;
