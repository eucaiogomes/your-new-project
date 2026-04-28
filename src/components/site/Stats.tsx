import { useEffect, useRef, useState } from "react";
import { BarChart3, UserPlus, Clock, ThumbsUp } from "lucide-react";

const stats = [
  { value: 500, prefix: "+", suffix: "", label: "empresas atendidas", icon: BarChart3 },
  { value: 1, prefix: "+", suffix: " milhão", label: "de usuários ativos", icon: UserPlus },
  { value: 10, prefix: "+", suffix: " anos", label: "de experiência", icon: Clock },
  { value: 98, prefix: "", suffix: "%", label: "de satisfação", icon: ThumbsUp },
];

const Counter = ({ to }: { to: number }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1500;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);

  return <span ref={ref}>{Math.round(val)}</span>;
};

export const Stats = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary-soft/40 to-background py-20">
    {/* decorative blobs */}
    <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
    <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

    <div className="container relative">
      <div className="mx-auto mb-12 max-w-2xl text-center reveal">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          Nossos números
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          Resultados que falam por nós
        </h2>
        <p className="mt-3 text-ink-soft">
          Mais de uma década transformando a educação corporativa no Brasil.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ icon: Icon, ...s }, i) => (
          <div
            key={s.label}
            className="group relative reveal"
            style={{ transitionDelay: `${i * 80}ms`, perspective: "1000px" }}
          >
            {/* glow underneath */}
            <div
              aria-hidden
              className="absolute inset-x-4 -bottom-2 h-8 rounded-full bg-primary/30 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            <div
              className="relative h-full rounded-2xl border border-white/60 bg-gradient-to-br from-white to-primary-soft/60 p-6 shadow-card transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-premium"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(2deg)",
              }}
            >
              {/* top sheen */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
              />

              <div className="flex items-start justify-between">
                <div
                  className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow-brand transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <Icon className="h-7 w-7" strokeWidth={2.2} />
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/40 to-transparent"
                  />
                </div>
                <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent))] animate-pulse-soft" />
              </div>

              <div className="mt-6" style={{ transform: "translateZ(10px)" }}>
                <div className="font-display text-4xl font-extrabold tracking-tight">
                  <span className="bg-gradient-to-br from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                    {s.prefix}<Counter to={s.value} />{s.suffix}
                  </span>
                </div>
                <div className="mt-2 text-sm font-medium text-ink-soft">{s.label}</div>
              </div>

              {/* bottom accent bar */}
              <div
                aria-hidden
                className="absolute inset-x-6 bottom-0 h-1 origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary via-primary-glow to-accent transition-transform duration-500 group-hover:scale-x-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
