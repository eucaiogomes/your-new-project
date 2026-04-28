import { Play, ArrowRight, ShieldCheck } from "lucide-react";

const clients = [
  "Microsoft",
  "SESI / SENAI",
  "SICOOB",
  "Hospital Sapiranga",
  "Liderança",
  "Unimed",
  "ACATS",
  "Grupo KKoch",
  "Sebrae",
  "Bradesco Seguros",
  "Randon",
  "Fundação Bradesco",
];

export const MicrosoftBlock = () => (
  <section
    id="clientes"
    className="relative z-20 -mt-24 pb-28 pt-0"
  >
    {/* fundo claro com leve gradiente azul vindo da seção anterior (Stats escura) */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-24 bottom-0 -z-10 bg-[radial-gradient(ellipse_at_top,_hsl(222_70%_96%)_0%,_hsl(0_0%_100%)_55%,_hsl(220_30%_99%)_100%)]"
    />
    {/* fade que mistura com o topo escuro do Stats, criando "tela infinita" */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[hsl(222_90%_6%)]/0 via-transparent to-transparent"
    />

    <div className="container relative">
      {/* Card principal — propositalmente sobreposto à seção Stats acima */}
      <div className="relative reveal">
        <div className="relative rounded-[2rem]">
          {/* sheen superior */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />

          <div className="grid items-stretch gap-0 lg:grid-cols-[1.15fr_1fr]">
            {/* ESQUERDA — Depoimento */}
            <div className="relative p-10 lg:p-14">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  Clientes que confiam na Lector
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="grid grid-cols-2 gap-0.5">
                  <span className="block h-4 w-4 bg-[#F25022]" />
                  <span className="block h-4 w-4 bg-[#7FBA00]" />
                  <span className="block h-4 w-4 bg-[#00A4EF]" />
                  <span className="block h-4 w-4 bg-[#FFB900]" />
                </div>
                <span className="font-display text-3xl font-semibold text-ink">Microsoft</span>
              </div>

              <blockquote className="relative mt-7">
                <span
                  aria-hidden
                  className="absolute -left-2 -top-4 font-display text-7xl leading-none text-primary/10 select-none"
                >
                  &ldquo;
                </span>
                <p className="font-display text-xl leading-relaxed text-ink md:text-2xl text-balance">
                  Na vertical de educação, escolhemos a Lector como{" "}
                  <span className="text-primary">parceira estratégica na América Latina</span>.
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  A Lector entrega uma plataforma robusta, flexível e alinhada às necessidades reais do mercado, gerando impacto direto na forma como as empresas treinam e desenvolvem suas equipes.
                </p>
              </blockquote>

              <div className="mt-8 flex items-center gap-4 border-t border-border/60 pt-6">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-accent-gradient text-white font-display font-bold shadow-glow-accent">
                  PT
                </div>
                <div>
                  <div className="font-semibold text-accent">Paulo Tonin da Silveira</div>
                  <div className="text-xs italic text-muted-foreground">
                    Sr. Partner Development Manager LATAM — Microsoft
                  </div>
                </div>
              </div>
            </div>

            {/* DIREITA — Card visual */}
            <div className="relative min-h-[380px] overflow-hidden bg-brand text-primary-foreground lg:min-h-0">
              {/* gradient mesh */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-80"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 20%, hsl(222 90% 55% / 0.55), transparent 55%), radial-gradient(circle at 20% 90%, hsl(22 95% 55% / 0.35), transparent 50%)",
                }}
              />
              {/* Atomo orbital — DNA do hero */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] opacity-60" aria-hidden>
                <svg viewBox="0 0 600 600" className="h-full w-full animate-[spin_70s_linear_infinite]">
                  <ellipse cx="300" cy="300" rx="260" ry="110" stroke="hsl(30 100% 62% / 0.5)" strokeWidth="1.5" fill="none" transform="rotate(35 300 300)" />
                  <ellipse cx="300" cy="300" rx="260" ry="110" stroke="hsl(0 0% 100% / 0.25)" strokeWidth="1" fill="none" transform="rotate(-35 300 300)" />
                </svg>
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between p-10 lg:p-12">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-glow ring-1 ring-white/15 backdrop-blur">
                    <ShieldCheck className="h-3.5 w-3.5" /> Parceria estratégica
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold leading-tight md:text-3xl text-balance">
                    Lector é parceira{" "}
                    <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                      Microsoft
                    </span>{" "}
                    na América Latina
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75 md:text-base">
                    Tecnologia, escala e confiança para impulsionar o aprendizado corporativo.
                  </p>
                </div>

                {/* CTA + play */}
                <div className="mt-8 flex items-center justify-between gap-6">
                  <button className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow-accent transition-transform hover:scale-[1.03]">
                    Ver cases
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <button
                    aria-label="Assistir vídeo"
                    className="group grid h-16 w-16 place-items-center rounded-full bg-white/95 shadow-elevated transition-transform hover:scale-110"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-gradient shadow-glow-accent">
                      <Play className="h-4 w-4 fill-white text-white" />
                    </span>
                  </button>
                </div>

                <div className="mt-6 border-t border-white/15 pt-4 text-xs text-primary-foreground/70">
                  Único parceiro Microsoft do segmento de educação na LATAM.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* glow inferior do card */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-16 -bottom-8 -z-10 h-12 rounded-full bg-primary/30 blur-3xl"
        />
      </div>

      {/* Faixa de logos — passando atrás, efeito tela infinita */}
      <div className="relative mt-16 reveal">
        <div className="flex items-center gap-3 px-2">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Alguns clientes
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="marquee mt-8 py-4">
          <div className="marquee-track">
            {[...clients, ...clients].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 select-none font-display text-2xl font-bold uppercase tracking-tight text-ink/30 grayscale transition-all duration-500 hover:scale-105 hover:text-primary hover:grayscale-0 md:text-3xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
