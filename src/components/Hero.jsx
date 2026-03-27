import { motion } from 'framer-motion';
import { TrendingDown, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToExplore = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a2952] via-[#1e4d8c] to-[#133b70]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-400 opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-800 opacity-20 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 bg-opacity-20 border border-emerald-500 border-opacity-40 text-emerald-400 text-sm font-medium mb-8"
        >
          <TrendingDown size={16} />
          NYC People&apos;s Money — Financial Literacy Data Story
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
        >
          The{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
            Invisible Cost
          </span>
          <br />
          of Credit
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          How credit card debt silently drains NYC neighborhoods — and what data reveals
          about the growing divide between credit users and savers.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 mb-14"
        >
          {[
            { value: '$6,360', label: 'Avg. Credit Card Debt per Household' },
            { value: '22.8%', label: 'Avg. Credit Card APR (2025)' },
            { value: '34%', label: 'NYC Residents with High Utilization' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-emerald-400">{stat.value}</div>
              <div className="text-sm text-blue-300 mt-1 max-w-[140px] mx-auto">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          onClick={scrollToExplore}
          className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 hover:scale-105 active:scale-95"
        >
          Explore the Data
          <ChevronDown size={20} className="animate-bounce" />
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300 text-xs"
      >
        <span>Scroll to explore</span>
        <div className="w-px h-10 bg-gradient-to-b from-blue-300 to-transparent" />
      </motion.div>
    </section>
  );
}
