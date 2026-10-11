"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
    {label: "Home", href: "/#home"},
    {label: "About", href: "/#about"},
    {label: "Experience", href: "/#experience"},
    {label: "Projects", href: "/#projects"},
    {label: "Blog", href: "/#blog"},
    {label: "Contact", href: "/#contact"},
];

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-5xl items-center justify-end px-6 py-4 md:justify-center">
                {/* Desktop links */}
                <ul className="hidden gap-8 md:flex">
                {links.map((link) => (
                    <li key={link.href}>
                    <Link
                        href={link.href}
                        className="text-sm font-medium text-muted transition-colors hover:text-primary"
                    >
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="flex flex-col border-t border-border/60 px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
    );
}