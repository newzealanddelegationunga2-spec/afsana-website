import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/explore", label: "Explore" },
  { to: "/timeline", label: "Timeline" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-x">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"
          }`}
        >
          <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
            <BrandMark />
          </Link>
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-[var(--ink)]/80 transition-colors hover:bg-[var(--royal)]/5 hover:text-[var(--royal)]"
                  activeProps={{ className: "bg-[var(--royal)]/5 text-[var(--royal)]" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block">
            <Link
              to="/events"
              className="inline-flex items-center rounded-full bg-[var(--royal)] px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Explore Festival
            </Link>
          </div>
          <button
            aria-label="Toggle menu"
            className="rounded-full p-2 text-[var(--royal)] lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl glass p-3 shadow-[var(--shadow-soft)] lg:hidden">
            <ul className="grid gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-[var(--ink)] hover:bg-[var(--royal)]/5"
                    activeProps={{ className: "bg-[var(--royal)]/5 text-[var(--royal)]" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
