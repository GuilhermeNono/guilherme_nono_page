import Gear from "./Gear";
import { profile } from "@/app/_lib/data";

const channels = [
  { label: "GitHub", value: "github.com/GuilhermeNono", href: profile.github },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/guilherme-nono",
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden py-24">
      <Gear
        className="pointer-events-none absolute -left-10 bottom-0 -z-10 h-48 w-48 text-brass-dark/20 animate-spin-slow"
        teeth={12}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="section-eyebrow text-sm">Envie um Telegrama</p>
        <h2 className="mt-2 font-display text-3xl brass-text sm:text-4xl">
          Vamos Conversar
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink">
          Aberto a novas oportunidades e desafios em arquitetura de software.
          Entre em contato por qualquer um dos canais abaixo.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={
                channel.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="rivet-panel rounded-lg px-6 py-5 text-left transition-transform hover:-translate-y-1"
            >
              <span className="section-eyebrow text-[0.65rem] text-copper-light">
                {channel.label}
              </span>
              <p className="mt-1 truncate font-display text-sm text-parchment sm:text-base">
                {channel.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
