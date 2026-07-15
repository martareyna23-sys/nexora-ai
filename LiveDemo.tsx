'use client'
import { useState } from 'react'
import { Send, Bot, User } from 'lucide-react'

export default function LiveDemo() {
  const [messages, setMessages] = useState([{ id: 1, text: "Hello! I'm your AI Employee. How can I help you today?", isUser: false }])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, { id: Date.now(), text: input, isUser: true }])
    setInput('')
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), text: "I'd be happy to help! What would you like to know?", isUser: false }])
    }, 1000)
  }

  return (
    <section id="demo" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Experience an <span className="gradient-text">AI Employee</span></h2>
          <p className="text-gray-600">Try our AI Employee demo. Ask questions or book an appointment.</p>
        </div>
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-primary px-4 py-3 flex items-center gap-2">
              <Bot className="w-5 h-5 text-white" />
              <span className="text-white font-medium">AI Employee</span>
              <span className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((m) => (
                <div key={m.id} className={`flex gap-2 ${m.isUser ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${m.isUser ? 'bg-primary' : 'bg-gray-200'}`}>
                    {m.isUser ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-gray-600" />}
                  </div>
                  <div className={`max-w-[75%] rounded-xl px-3 py-2 text-sm ${m.isUser ? 'bg-primary text-white' : 'bg-white'}`}>{m.text}</div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t flex gap-2">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} placeholder="Type your message..." className="flex-1 px-3 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <button onClick={sendMessage} className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary-700"><Send className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
