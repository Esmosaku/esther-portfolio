import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-[90vh] items-center justify-center px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          Hi, I&apos;m <span className="text-primary">Esther</span>.
        </h1>

        <p className="mt-6 text-xl text-foreground md:text-2xl">
          Curious about tech and everything it touches.
        </p>

        <p className="mt-3 text-lg text-muted">
          CS + Econ student and former Intuit Credit Karma SWE Intern who loves building impactful projects.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-primary-deep hover:shadow-lg hover:shadow-primary/20"
          >
            Resume
          </a>
          <Link
            href="/#projects"
            className="rounded-lg border border-primary px-6 py-3 font-medium text-primary transition hover:-translate-y-0.5 hover:bg-primary-soft"
          >
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}