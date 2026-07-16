cd /Users/martareyna/nexora-ai && cat > components/Hero.tsx << 'HEROEOF'
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-bold mb-6">
              Hire Your First <span className="text-blue-600">AI Employee.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Never miss another customer again. Nexora AI builds AI Employees that instantly respond to leads, qualify prospects, schedule appointments, and follow up automatically—24/7.
            </p>
            <div className="flex gap-4">
              <Link href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center">
                Book My Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="#demo" className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg">
                Meet an AI Employee
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
HEROEOF