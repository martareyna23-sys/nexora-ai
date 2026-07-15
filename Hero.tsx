import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Now launching in Guatemala
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
          Hire Your First <span className="gradient-text">AI Employee.</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Your business deserves more than a chatbot. AI Employees that answer customers, qualify leads, schedule appointments, and help your business grow 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 shadow-lg">
            Book a Free Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="#demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark font-semibold rounded-xl border-2 border-gray-200 hover:border-primary">
            Watch Live Demo
          </Link>
        </div>
      </div>
    </section>
  )
}
