import { languages, profile } from "@/app/_lib/data";

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-24">
      <p className="section-eyebrow text-sm">A Engrenagem Mestra</p>
      <h2 className="mt-2 font-display text-3xl brass-text sm:text-4xl">
        Sobre Mim
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr]">
        <div className="rivet-panel rounded-lg p-8">
          <span className="rivet left-3 top-3" />
          <span className="rivet right-3 top-3" />
          <span className="rivet bottom-3 left-3" />
          <span className="rivet bottom-3 right-3" />
          <p className="text-lg leading-relaxed text-parchment">
            {profile.summary}
          </p>
          <p className="mt-4 text-sm text-ink-dim">{profile.location}</p>
        </div>

        <div className="rivet-panel rounded-lg p-8">
          <span className="rivet left-3 top-3" />
          <span className="rivet right-3 top-3" />
          <span className="rivet bottom-3 left-3" />
          <span className="rivet bottom-3 right-3" />
          <h3 className="font-display text-lg text-brass-light">Idiomas</h3>
          <ul className="mt-4 space-y-3">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="flex items-center justify-between border-b border-brass-dark/40 pb-2 text-sm"
              >
                <span className="text-parchment">{lang.name}</span>
                <span className="section-eyebrow text-xs text-copper-light">
                  {lang.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
