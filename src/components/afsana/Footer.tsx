import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--royal-deep)] text-white">
      <div className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-[var(--cyan-brand)]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[var(--lime)]/20 blur-3xl" />
      <div className="container-x relative py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandMark className="[&_span:last-child]:text-white" />
            <p className="mt-4 max-w-xs text-sm text-white/70">
              The Annual Inter-School Arts Festival of Shiv Nadar School, Gurgaon.
              A student-led celebration of storytelling through art.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["/about", "About"],
                ["/explore", "Artistic Worlds"],
                ["/timeline", "3-Day Experience"],
                ["/events", "Events"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/80 transition-colors hover:text-[var(--lime)]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">Visit</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["/gallery", "Gallery"],
                ["/team", "Team"],
                ["/faq", "FAQ"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/80 transition-colors hover:text-[var(--lime)]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">Reach us</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-3"><Mail size={16} /> afsana.ggn@sns.edu.in</li>
              <li className="flex items-center gap-3"><Instagram size={16} /> @afsanasnsggn</li>
              <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5" /> Shiv Nadar School, Gurgaon, Haryana</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="font-display text-2xl italic text-white/90 md:text-3xl">
            "Find Your Story"
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-white/50 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Afsana · Shiv Nadar School, Gurgaon</span>
            <span>Crafted with care by the Afsana Student Committee.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
