import { education } from "@/app/_lib/data";

export default function Education() {
  return (
    <section id="formacao" className="mx-auto max-w-6xl px-6 py-24">
      <p className="section-eyebrow text-sm">Plantas &amp; Diplomas</p>
      <h2 className="mt-2 font-display text-3xl brass-text sm:text-4xl">
        Formação Acadêmica
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {education.map((entry) => (
          <div key={entry.course} className="rivet-panel rounded-lg p-6">
            <span className="rivet left-3 top-3" />
            <span className="rivet right-3 top-3" />
            <span className="rivet bottom-3 left-3" />
            <span className="rivet bottom-3 right-3" />
            <h3 className="font-display text-base text-brass-light">
              {entry.course}
            </h3>
            <p className="mt-2 text-sm text-ink">{entry.school}</p>
            <p className="section-eyebrow mt-4 text-[0.65rem] text-copper-light">
              {entry.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
