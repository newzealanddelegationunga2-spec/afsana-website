import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  align = "left",
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <section id={id} className={`section-y ${className}`}>
      <div className="container-x">
        {(eyebrow || title || intro) && (
          <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <Reveal>
                <span className="eyebrow">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--lime)]" />
                  {eyebrow}
                </span>
              </Reveal>
            )}
            {title && (
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-4xl leading-[1.05] text-[var(--royal)] md:text-6xl">
                  {title}
                </h2>
              </Reveal>
            )}
            {intro && (
              <Reveal delay={160}>
                <p className="mt-5 text-lg text-[var(--mute)] md:text-xl">{intro}</p>
              </Reveal>
            )}
          </div>
        )}
        {children && <div className="mt-14">{children}</div>}
      </div>
    </section>
  );
}
