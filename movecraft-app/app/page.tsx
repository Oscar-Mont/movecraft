import Link from "next/link";

const exercises = [
  { name: "Sentadillas", detail: "3 series · 12 repeticiones", progress: "w-3/4" },
  { name: "Flexiones", detail: "3 series · 10 repeticiones", progress: "w-1/2" },
  { name: "Plancha", detail: "3 series · 30 segundos", progress: "w-2/3" },
];

export default function Home() {
  return (
    <main className="relative isolate flex min-h-[calc(100vh-4.5rem)] flex-1 items-center overflow-hidden bg-slate-900 px-6 py-16 text-white sm:px-10 lg:px-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-44 h-[34rem] w-[34rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-52 left-[-8rem] h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#a7f3d0_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <section className="relative z-10 max-w-2xl">
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-200">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_2px_rgba(110,231,183,0.55)]" />
            Tu próximo entrenamiento empieza aquí
          </p>

          <h1 className="text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl">
            Movecraft<span className="text-emerald-300">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl">
            Tu creador gratuito de rutinas de ejercicio.
          </p>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
            Convierte tus objetivos en un plan de entrenamiento hecho para ti.
            Elige cómo quieres moverte y empieza a progresar a tu ritmo.
          </p>

          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Link
              href="/auth/signup"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
            >
              Crea tu cuenta gratis
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/auth/login"
              className="rounded-lg px-2 py-3 text-sm font-medium text-slate-300 transition hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
            >
              ¿Ya tienes cuenta? <span className="text-emerald-300">Inicia sesión</span>
            </Link>
          </div>
        </section>

        <section aria-label="Vista previa de una rutina de ejercicio" className="relative mx-auto w-full max-w-lg lg:ml-auto">
          <div aria-hidden="true" className="absolute -right-5 -top-7 h-24 w-24 rounded-3xl border border-emerald-300/20 sm:-right-8 sm:-top-9" />
          <div aria-hidden="true" className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full border border-blue-300/20" />

          <div className="relative rotate-1 rounded-[2rem] border border-white/10 bg-slate-800/90 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-emerald-300">TU PLAN DE HOY</p>
                <h2 className="mt-2 text-2xl font-bold">Fuerza total</h2>
                <p className="mt-1 text-sm text-slate-400">Una rutina hecha para ti</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300/10 text-2xl text-emerald-300" aria-hidden="true">
                ✦
              </div>
            </div>

            <div className="my-6 flex items-center gap-3 rounded-2xl bg-slate-900/80 p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/15 text-xl text-emerald-300" aria-hidden="true">
                ↗
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">Tu progreso, a tu ritmo</p>
                <p className="mt-1 text-xs text-slate-400">Cada entrenamiento cuenta</p>
              </div>
              <span className="text-sm font-bold text-emerald-300">+1</span>
            </div>

            <div className="space-y-3">
              {exercises.map((exercise, index) => (
                <div key={exercise.name} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-700 text-sm font-bold text-emerald-200">
                    0{index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold">{exercise.name}</p>
                      <span aria-hidden="true" className="text-emerald-300">✓</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{exercise.detail}</p>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-700">
                      <div className={`h-full rounded-full bg-emerald-400 ${exercise.progress}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5 text-sm">
              <span className="text-slate-400">Tu siguiente paso</span>
              <span className="font-semibold text-emerald-300">Empezar fuerte →</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
