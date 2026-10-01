import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-100 to-amber-200 px-6">
      {/* Floating accent blobs */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-yellow-300/50 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-orange-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-amber-400/40 blur-3xl" />

      <div className="relative z-10 text-center">
        <h1 className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent drop-shadow-sm sm:text-7xl md:text-8xl">
          Hello, World!
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-amber-900/80 sm:text-lg">
          Welcome — your app is up and running.
        </p>
      </div>
    </main>
  );
}
