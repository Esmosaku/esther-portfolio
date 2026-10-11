import Hero from "@/components/sections/Hero";

const sections = ["about", "experience", "projects", "blog", "contact"];

export default function Home() {
  return (
    <main>
      <Hero />
      {sections.map((id) => (
        <section
          key={id}
          id={id}
          className="flex min-h-screen items-center justify-center border-b border-border"
        >
          <h2 className="text-3xl font-semibold capitalize">{id}</h2>
        </section>
      ))}
    </main>
  );
}