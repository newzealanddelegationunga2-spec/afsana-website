import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed top-0 left-0 z-[60] h-[3px] w-full bg-transparent">
      <div
        className="h-full origin-left"
        style={{
          width: `${p}%`,
          background: "linear-gradient(90deg, var(--royal), var(--cyan-brand), var(--lime))",
        }}
      />
    </div>
  );
}
