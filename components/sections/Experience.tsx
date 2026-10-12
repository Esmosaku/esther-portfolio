type Role = {
  title: string;
  org: string;
  location: string;
  dates: string;
  points: string[];
};

type Category = "Industry" | "Research" | "Teaching" | "Leadership";

const experience: Record<Category, Role[]> = {
    Industry: [
        {
      title: "Full Stack Software Engineering Intern",
      org: "Intuit Credit Karma",
      location: "Charlotte, NC",
      dates: "May 2026 – Jul 2026",
      points: [
        "Built an AI-powered TypeScript pipeline that catches data quality issues before production, replacing a fully manual review of 700+ data fields.",
        "Shipped Slack alerts and a Next.js dashboard that flagged 370+ P2 and P3 issues across the product catalog.",
      ],
    },
    ],
    Research: [
    {
      title: "Undergraduate Research Assistant",
      org: "University of Puget Sound, CS Department",
      location: "Tacoma, WA",
      dates: "May 2025 – Aug 2025",
      points: [
        "Built graph-based RAG methods to reduce hallucinations in medical LLMs, constructing knowledge graphs from 30+ medical documents with Java and Stanford CoreNLP.",
        "Presented findings at IEEE MIT URTC and the Murdock College Science Research Conference.",
      ],
    },
    ],
    Teaching: [
    {
      title: "Math & Statistics Tutor",
      org: "Center for Writing and Learning (CWL) at University of Puget Sound",
      location: "Tacoma, WA",
      dates: "Sep 2026 – Present",
      points: [
        "Tutor students in math and statistics courses, breaking down tricky concepts into clear, step-by-step explanations.",
      ],
    },
    
    {
      title: "Computer Science Lab Teaching Assistant",
      org: "University of Puget Sound",
      location: "Tacoma, WA",
      dates: "Jan 2026 – May 2026",
      points: [
        "Supported weekly lab sessions for 10+ students, debugging code and turning core programming concepts into clear one-on-one explanations.",
      ],
    },
  ],
  Leadership: [
    {
      title: "Vice President & Co-founder",
      org: "Girls Who Code College Loop",
      location: "University of Puget Sound",
      dates: "Sep 2025 – Present",
      points: [
        "Co-founded our campus chapter, leading CS trivia nights, web-building workshops, and resume sessions.",
      ],
    },
    {
      title: "President",
      org: "Math Club",
      location: "University of Puget Sound",
      dates: "Sep 2025 – May 2026",
      points: [
        "Grew membership through engaging events and cross-club collaborations with the Physics Club.",
      ],
    },
  ],
};

const categories = Object.keys(experience) as Category[];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-semibold md:text-5xl">Experience</h2>

        <div className="mt-12 space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="font-mono text-sm uppercase tracking-wider text-primary">
                {category}
              </h3>

              <ol className="relative mt-6 border-l-2 border-primary-soft">
                {experience[category].map((role) => (
                  <li key={role.title + role.org} className="group relative mb-10 pl-8 last:mb-0">
                    <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background transition group-hover:bg-primary group-hover:ring-4 group-hover:ring-primary-soft" />
                    <p className="font-mono text-xs text-muted">{role.dates}</p>
                    <h4 className="mt-1 text-xl font-semibold">{role.title}</h4>
                    <p className="text-primary">
                      {role.org} <span className="text-muted">· {role.location}</span>
                    </p>
                    <div className="mt-3 space-y-2 text-foreground/90">
                      {role.points.map((point) => (
                        <p key={point}>{point}</p>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}