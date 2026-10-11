import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

const sections = ["experience", "projects", "blog", "contact"];

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
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