import Image from "next/image";
import Gear from "./Gear";
import { profile } from "@/app/_lib/data";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <Gear
        className="pointer-events-none absolute -left-16 -top-16 -z-10 h-64 w-64 text-brass-dark/30 animate-spin-slow-reverse"
        teeth={14}
      />
      <Gear
        className="pointer-events-none absolute -bottom-24 -right-10 -z-10 h-80 w-80 text-copper/20 animate-spin-slow"
        teeth={16}
      />
      <Gear
        className="pointer-events-none absolute right-1/4 top-10 -z-10 h-24 w-24 text-brass/20 animate-spin-slow"
        teeth={10}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="section-eyebrow mb-4 text-sm">
            Forjado em C# &amp; .NET
          </p>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            <span className="brass-text">{profile.name}</span>
          </h1>
          <p className="mt-4 font-display text-xl text-copper-light sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="rounded border-2 border-brass bg-brass/10 px-6 py-3 font-display text-sm uppercase tracking-widest text-brass-light transition-colors hover:bg-brass hover:text-void"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="rounded border-2 border-copper/60 px-6 py-3 font-display text-sm uppercase tracking-widest text-copper-light transition-colors hover:border-copper hover:bg-copper/10"
            >
              Entrar em Contato
            </a>
          </div>
        </div>

        <div className="relative mx-auto">
          <div className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-brass-dark/60 animate-spin-slow" />
          <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-brass shadow-[0_0_40px_rgba(184,134,11,0.35)] sm:h-72 sm:w-72">
            <Image
              src={profile.avatar}
              alt={`Foto de perfil de ${profile.name}`}
              fill
              sizes="(min-width: 640px) 288px, 224px"
              className="object-cover sepia-[0.35] contrast-110"
              preload
            />
          </div>
        </div>
      </div>
    </section>
  );
}
