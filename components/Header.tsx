import Link from 'next/link'

export default function Header() {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">🚀 Héctor Dev</h1>
      <div className="space-x-6">
        <Link href="/" className="hover:underline">Inicio</Link>
        <Link href="/imc" className="hover:underline">IMC Calculator</Link>
        <Link href="/about" className="hover:underline">Sobre Mí</Link>
      </div>
    </div>
  </nav>
  )
}