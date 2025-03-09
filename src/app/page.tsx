import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col">
      <h1 className="text-4xl font-bold text-blue-600">¡Bienvenido a Next.js! 🚀</h1>
      <p className="mt-4 text-lg text-gray-700">Explora la navegación entre páginas.</p>
      <Link href="/about" className="mt-6 text-blue-500 underline">
        Ir a la página "Acerca de"
      </Link>
    </main>
  );
}