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
  <section className="border-y border-border/60 bg-background py-14">
    <div className="container">
      <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
        {stats.map(({ icon: Icon, ...s }) => (
          <div key={s.label} className="flex items-center justify-center gap-4 reveal">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-primary-soft text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display text-3xl font-extrabold tracking-tight text-primary">
                {s.prefix}<Counter to={s.value} />{s.suffix}
              </div>
              <div className="text-sm text-ink-soft">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
