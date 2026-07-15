'use client'
import { Headphones, TrendingUp, MessageCircle, RefreshCw, Calendar, CheckCircle2 } from 'lucide-react'

const employees = [
  { icon: Headphones, title: 'AI Receptionist', desc: 'Never miss another customer. Greets callers and directs calls 24/7.', features: ['Call Handling', 'Call Routing', 'Voice AI'] },
  { icon: TrendingUp, title: 'AI Sales Assistant', desc: 'Qualify leads and increase appointments automatically.', features: ['Lead Qualification', 'Objection Handling', 'Book Sales Calls'] },
  { icon: MessageCircle, title: 'AI Customer Support', desc: 'Provide instant answers 24/7 across multiple channels.', features: ['Multi-channel', '24/7 Support', 'Smart Escalation'] },
  { icon: RefreshCw, title: 'AI Follow-up Assistant', desc: 'Recover lost opportunities with automated follow-ups.', features: ['Automated Follow-up', 'Smart Reminders', 'Pipeline Nurturing'] },
  { icon: Calendar, title: 'AI Appointment Manager', desc: 'Books appointments while your team sleeps.', features: ['Smart Scheduling', 'Reminders', 'No-Show Reduction'] },
]

export default function AIEmployeeCards() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Meet Your New <span className="gradient-text">Team</span></h2>
          <p className="text-gray-600">Not just chatbots. Purpose-built AI employees ready to handle specific roles.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {employees.slice(0, 3).map((emp) => (
            <div key={emp.title} className="bg-surface rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><emp.icon className="w-6 h-6 text-primary" /></div>
              <h3 className="text-lg font-bold text-dark mb-2">{emp.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{emp.desc}</p>
              <div className="flex flex-wrap gap-2">
                {emp.features.map((f) => <span key={f} className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded-full text-xs text-gray-600"><CheckCircle2 className="w-3 h-3 text-success" />{f}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {employees.slice(3, 5).map((emp) => (
            <div key={emp.title} className="bg-surface rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><emp.icon className="w-6 h-6 text-primary" /></div>
              <h3 className="text-lg font-bold text-dark mb-2">{emp.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{emp.desc}</p>
              <div className="flex flex-wrap gap-2">
                {emp.features.map((f) => <span key={f} className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded-full text-xs text-gray-600"><CheckCircle2 className="w-3 h-3 text-success" />{f}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
