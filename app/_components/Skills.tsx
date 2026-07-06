import { skillGroups } from "@/app/_lib/data";

export default function Skills() {
  return (
    <section id="habilidades" className="bg-panel/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow text-sm">Pressão do Vapor</p>
        <h2 className="mt-2 font-display text-3xl brass-text sm:text-4xl">
          Habilidades Técnicas
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="rivet-panel rounded-lg p-8">
              <span className="rivet left-3 top-3" />
              <span className="rivet right-3 top-3" />
              <span className="rivet bottom-3 left-3" />
              <span className="rivet bottom-3 right-3" />
              <h3 className="font-display text-lg text-brass-light">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-parchment">{skill.name}</span>
                      <span className="font-display text-xs text-copper-light">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="gauge-track h-2.5 rounded-full">
                      <div
                        className="gauge-fill h-full rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
