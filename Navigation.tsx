import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur z-50 border-b">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="https://a.lovart.ai/artifacts/agent/x03d4ggz2t3Md2px.png" alt="Nexora AI" width={36} height={36} className="rounded-lg" />
          <span className="font-manrope font-bold text-lg">Nexora AI</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="#solutions" className="hover:text-primary">Solutions</Link>
          <Link href="#industries" className="hover:text-primary">Industries</Link>
          <Link href="#pricing" className="hover:text-primary">Pricing</Link>
          <Link href="#contact" className="hover:text-primary">Contact</Link>
        </div>
        <Link href="#contact" className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-700">Book Demo</Link>
      </nav>
    </header>
  )
}
