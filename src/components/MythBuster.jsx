import { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const cards = [
  {
    myth: 'Myth: Carrying a balance boosts your credit score.',
    fact: 'Fact: You never need to carry a balance to build credit. Paying in full each month improves your score while avoiding interest charges entirely.',
    term: 'Credit Utilization Ratio',
    icon: '💳',
    color: 'from-blue-600 to-blue-800',
    backColor: 'from-emerald-600 to-emerald-800',
  },
  {
    myth: 'Myth: Overdraft protection means free money.',
    fact: 'Fact: Overdraft fees average $35 per transaction. Using a linked account with $0 in it 3× a month costs $1,260/year — more than some credit cards charge in interest!',
    term: 'Overdraft Fees',
    icon: '🏦',
    color: 'from-orange-600 to-red-700',
    backColor: 'from-teal-600 to-teal-800',
  },
  {
    myth: 'Myth: Minimum payments are fine if you\'re tight on cash.',
    fact: 'Fact: A $5,000 balance at 22% APR with minimum payments takes over 20 years to pay off and costs more than $7,000 in interest.',
    term: 'Minimum Payment Trap',
    icon: '⚠️',
    color: 'from-rose-600 to-pink-800',
    backColor: 'from-violet-600 to-violet-800',
  },
  {
    myth: 'Myth: Closing old credit cards improves your score.',
    fact: 'Fact: Closing cards reduces your available credit, which raises your utilization ratio — actually hurting your score. Older accounts also boost your credit history length.',
    term: 'Credit History Length',
    icon: '📊',
    color: 'from-purple-600 to-purple-900',
    backColor: 'from-sky-600 to-sky-800',
  },
  {
    myth: 'Myth: Debit cards offer the same fraud protection as credit cards.',
    fact: 'Fact: The Fair Credit Billing Act caps credit card fraud liability at $50 (often $0). Debit card liability can be unlimited if not reported within 60 days.',
    term: 'Fraud Liability',
    icon: '🔒',
    color: 'from-slate-600 to-slate-800',
    backColor: 'from-green-600 to-green-800',
  },
  {
    myth: 'Myth: Having many credit cards is always bad.',
    fact: 'Fact: Multiple cards can actually lower your utilization ratio and broaden your credit mix — two key scoring factors — as long as you manage them responsibly.',
    term: 'Credit Mix',
    icon: '🎯',
    color: 'from-cyan-600 to-blue-700',
    backColor: 'from-amber-600 to-orange-700',
  },
];

export default function MythBuster() {
  const [flipped, setFlipped] = useState({});

  const toggle = (index) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-purple-700 uppercase bg-purple-50 rounded-full mb-4">
            Financial Literacy
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a2952] mb-4">
            Myth-Buster Cards
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-3">
            Tap or hover any card to reveal the financial truth behind common credit myths.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-slate-400">
            <RefreshCw size={14} />
            Click to flip
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.term}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div
                className={`flip-card ${flipped[index] ? 'flipped' : ''}`}
                onClick={() => toggle(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggle(index)}
                aria-label={`Flip card: ${card.term}`}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className={`flip-card-front bg-gradient-to-br ${card.color} text-white`}>
                    <div className="text-4xl mb-3">{card.icon}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">
                      {card.term}
                    </div>
                    <p className="text-sm font-medium leading-snug">{card.myth}</p>
                    <div className="mt-4 text-xs text-white/50">Tap to reveal the truth →</div>
                  </div>
                  {/* Back */}
                  <div className={`flip-card-back bg-gradient-to-br ${card.backColor} text-white`}>
                    <div className="text-2xl mb-3">✅</div>
                    <p className="text-sm font-medium leading-snug">{card.fact}</p>
                    <div className="mt-4 text-xs text-white/50">← Tap to go back</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
