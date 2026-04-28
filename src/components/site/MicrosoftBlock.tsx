import { Play } from "lucide-react";

export const MicrosoftBlock = () => (
  <section className="py-28">
    <div className="container">
      <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-brand text-primary-foreground shadow-premium">
        <div className="grid items-stretch gap-0 lg:grid-cols-2">
          <div className="p-10 lg:p-16 reveal">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">
              Depoimento de parceiro
            </span>
            <div className="mt-6 flex items-center gap-3">
              {/* Microsoft mark */}
              <div className="grid grid-cols-2 gap-0.5">
                <span className="block h-4 w-4 bg-[#F25022]" />
                <span className="block h-4 w-4 bg-[#7FBA00]" />
                <span className="block h-4 w-4 bg-[#00A4EF]" />
                <span className="block h-4 w-4 bg-[#FFB900]" />
              </div>
              <span className="font-display text-3xl font-semibold">Microsoft</span>
            </div>

            <blockquote className="mt-8 font-display text-2xl leading-relaxed md:text-3xl text-balance">
              "A Lector é nosso parceiro estratégico de educação na América Latina. Em um tema tão sério, qualquer descuido pode impactar pessoas — e por isso confiamos."
            </blockquote>

            <div className="mt-8 border-t border-primary-foreground/15 pt-6">
              <div className="font-semibold text-accent-glow">Paulo Lima da Silveira</div>
              <div className="text-sm text-primary-foreground/70">Sr. Partner Development Manager — Microsoft</div>
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-0 reveal">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/40 to-accent/30" />
            <div className="absolute inset-0 grid place-items-center">
              <button className="group grid h-24 w-24 place-items-center rounded-full bg-white/95 shadow-elevated transition-all hover:scale-110" aria-label="Assistir vídeo">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-gradient shadow-glow-accent">
                  <Play className="h-6 w-6 fill-white text-white" />
                </span>
              </button>
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-black/30 p-4 backdrop-blur-md">
              <div className="text-sm font-medium">Lector é o único parceiro Microsoft da América Latina em nosso segmento.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
