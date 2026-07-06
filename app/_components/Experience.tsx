import Gear from "./Gear";
import { experience } from "@/app/_lib/data";

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-6 py-24">
      <p className="section-eyebrow text-sm">O Maquinário</p>
      <h2 className="mt-2 font-display text-3xl brass-text sm:text-4xl">
        Experiência Profissional
      </h2>

      <div className="relative mt-12 space-y-12 border-l-2 border-brass-dark/60 pl-8 sm:pl-12">
        {experience.map((entry) => (
          <div key={entry.company} className="relative">
            <span className="absolute -left-[3.05rem] top-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-brass bg-void sm:-left-[3.55rem]">
              <Gear className="h-5 w-5 text-brass-light" teeth={8} />
            </span>

            <div className="rivet-panel rounded-lg p-6 sm:p-8">
              <span className="rivet left-3 top-3" />
              <span className="rivet right-3 top-3" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl text-brass-light">
                  {entry.role}
                </h3>
                <span className="section-eyebrow text-xs text-copper-light">
                  {entry.period}
                </span>
              </div>
              <p className="mt-1 font-display text-base text-copper-light">
                {entry.company}
              </p>
              <ul className="mt-4 space-y-2">
                {entry.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-ink"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
