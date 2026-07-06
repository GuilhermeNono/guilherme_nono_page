import { projects } from "@/app/_lib/data";

export default function Projects() {
  return (
    <section id="projetos" className="bg-panel/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow text-sm">Invenções da Oficina</p>
        <h2 className="mt-2 font-display text-3xl brass-text sm:text-4xl">
          Projetos em Destaque
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rivet-panel group flex flex-col rounded-lg p-6 transition-transform hover:-translate-y-1"
            >
              <span className="rivet left-3 top-3" />
              <span className="rivet right-3 top-3" />
              <span className="rivet bottom-3 left-3" />
              <span className="rivet bottom-3 right-3" />

              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg text-brass-light group-hover:text-brass-light">
                  {project.name}
                </h3>
                {project.featured && (
                  <span className="section-eyebrow text-[0.65rem] text-copper-light">
                    Destaque
                  </span>
                )}
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brass-dark/70 bg-void/60 px-3 py-1 font-display text-[0.65rem] tracking-wide text-copper-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brass transition-colors group-hover:text-brass-light">
                Ver no GitHub
                <span aria-hidden="true">&rarr;</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
