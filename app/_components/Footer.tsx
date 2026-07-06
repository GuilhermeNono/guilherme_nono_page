import Gear from "./Gear";

export default function Footer() {
  return (
    <footer className="border-t border-brass-dark/60 bg-void py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <Gear className="h-6 w-6 text-brass-dark animate-spin-slow" teeth={8} />
        <p className="text-xs text-ink-dim">
          &copy; {new Date().getFullYear()} Guilherme Nono. Forjado com
          Next.js.
        </p>
      </div>
    </footer>
  );
}
