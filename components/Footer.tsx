import {cacheLife} from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default async function Footer() {
    const year = await getCurrentYear();

      return (
    <footer className="mt-24 border-t border-border">
      <p className="py-8 text-center font-mono text-xs text-muted">
        © {year} Esther · Built with Next.js
      </p>
    </footer>
  );
}