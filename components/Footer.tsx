import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-blue-400 text-white text-center py-4 fixed bottom-0 w-full">
      <p>&copy; {new Date().getFullYear()} Héctor | Next.js Course</p>
    </footer>
  )
}