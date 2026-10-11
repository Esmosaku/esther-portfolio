import Image from "next/image";
import type { IconType } from "react-icons";

import {
  SiPython, SiC, SiTypescript, SiJavascript,
  SiReact, SiNextdotjs, SiPandas, SiScikitlearn,
  SiGit, SiGithub, SiLinux, SiGooglecloud, SiCircleci,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

const communities = [
  "ColorStack",
  "Code2040",
  "Rewriting the Code",
  "AI4ALL Ignite",
  "Technovation Girls Mentor",
  "Habitat for Humanity",
  "Policy Debate",
];

type Tech = { name: string; icon: IconType };

const techStack: { category: string; items: Tech[] }[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "C", icon: SiC },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Pandas", icon: SiPandas },
      { name: "Scikit-learn", icon: SiScikitlearn },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Linux", icon: SiLinux },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "CircleCI", icon: SiCircleci },
    ],
  },
];

const tagStyles = [
  "bg-primary-soft text-primary-deep",
  "bg-mint-soft text-mint-deep",
  "bg-blush-soft text-blush-deep",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-sm text-primary">// about</p>
        <h2 className="text-4xl font-semibold md:text-5xl">About me</h2>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-[1fr_280px]">
          <Image
            src="/headshot.jpeg"
            alt="Photo of Esther"
            width={280}
            height={280}
            className="mx-auto aspect-square rounded-full object-cover shadow-lg shadow-primary/10 md:order-last"
            />

          <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              My first exposure to tech was building GoFindMe, a safety
              monitoring app aimed at reducing kidnapping rates back home in
              Nigeria. The app went on to be a Technovation Girls Regional
              Winner for Africa in 2023. From that experience, I realized how
              much I enjoyed building something that could have an impact, and
              I became curious about how software works and how tech could be
              the best avenue for solving problems.
            </p>
            <p>
              I&apos;m a junior studying CS and Econ at the University of Puget
              Sound. Outside of tech, I enjoy writing, doing crosswords,
              debating on my school&apos;s collegiate policy debate team, and
              reading.
            </p>
          </div>
        </div>

        <div className="mt-14">
            <h3 className="text-lg font-semibold">Tech stack</h3>
            <div className="mt-6 space-y-8">
                {techStack.map((group) => (
                <div key={group.category}>
                    <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    {group.category}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-4">
                    {group.items.map(({ name, icon: Icon }) => (
                        <li
                        key={name}
                        className="flex w-24 flex-col items-center gap-2 rounded-xl border border-border bg-surface p-3 text-muted transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                        >
                        <Icon className="text-2xl" aria-hidden="true" />
                        <span className="text-xs">{name}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
        </div>

        <div className="mt-14">
          <h3 className="text-lg font-semibold">Communities I&apos;m part of</h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {communities.map((community, i) => (
              <li
                key={community}
                className={`rounded-full px-4 py-1.5 text-sm ${tagStyles[i % tagStyles.length]}`}
              >
                {community}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}