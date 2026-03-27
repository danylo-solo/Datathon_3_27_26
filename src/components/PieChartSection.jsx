import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const debitData = [
  { name: 'Groceries & Food', value: 28 },
  { name: 'Housing & Utilities', value: 35 },
  { name: 'Transport', value: 15 },
  { name: 'Healthcare', value: 10 },
  { name: 'Clothing', value: 7 },
  { name: 'Entertainment', value: 5 },
];

const creditData = [
  { name: 'Dining & Delivery', value: 22 },
  { name: 'Online Shopping', value: 24 },
  { name: 'Travel & Hotels', value: 18 },
  { name: 'Subscriptions', value: 12 },
  { name: 'Electronics', value: 14 },
  { name: 'Other', value: 10 },
];

const COLORS_DEBIT = ['#1e4d8c', '#2d5fa8', '#3d6fbf', '#5a85cb', '#789bd4', '#9fb8e0'];
const COLORS_CREDIT = ['#be123c', '#e11d48', '#f43f5e', '#fb7185', '#fda4af', '#fecdd3'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const item = payload[0];
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-3 text-sm">
        <p className="font-semibold text-[#0a2952]">{item.name}</p>
        <p style={{ color: item.payload.fill }}>{item.value}% of spending</p>
      </div>
    );
  }
  return null;
};

const RADIAN = Math.PI / 180;
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  if (percent < 0.06) return null;
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="bold">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartSection() {
  const [active, setActive] = useState('both');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-emerald-700 uppercase bg-emerald-50 rounded-full mb-4">
            Spending Patterns
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a2952] mb-4">
            Where Does the Money Go?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Debit users and credit users spend money on vastly different categories.
            Compare how each group allocates their budget.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-3 mb-12">
          {[
            { key: 'both', label: 'Side by Side' },
            { key: 'debit', label: 'Debit Users' },
            { key: 'credit', label: 'Credit Users' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === key
                  ? key === 'credit'
                    ? 'bg-red-600 text-white shadow-md'
                    : key === 'debit'
                    ? 'bg-[#1e4d8c] text-white shadow-md'
                    : 'bg-[#0a2952] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`grid ${active === 'both' ? 'md:grid-cols-2' : 'grid-cols-1 max-w-xl mx-auto'} gap-8`}
        >
          {(active === 'debit' || active === 'both') && (
            <PiePanel
              title="Debit Users"
              subtitle="Essential-first spending"
              data={debitData}
              colors={COLORS_DEBIT}
              accent="text-[#1e4d8c]"
              bg="bg-blue-50"
              border="border-blue-100"
            />
          )}
          {(active === 'credit' || active === 'both') && (
            <PiePanel
              title="Credit Users"
              subtitle="Lifestyle & discretionary spending"
              data={creditData}
              colors={COLORS_CREDIT}
              accent="text-red-600"
              bg="bg-red-50"
              border="border-red-100"
            />
          )}
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-[#0a2952] to-[#1e4d8c] rounded-2xl p-6 md:p-8 text-white text-center"
        >
          <h3 className="text-xl font-bold mb-3">💡 Key Insight</h3>
          <p className="text-blue-200 max-w-3xl mx-auto">
            Debit users allocate <strong className="text-white">63%</strong> of spending to
            essentials (housing, groceries, transport), while credit users spread their budget
            across discretionary categories — dining, travel, shopping, and subscriptions — rather
            than building savings. This lifestyle spending on credit is the primary driver of high
            utilization and compounding interest charges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PiePanel({ title, subtitle, data, colors, accent, bg, border }) {
  return (
    <div className={`${bg} border ${border} rounded-2xl p-6`}>
      <div className="text-center mb-4">
        <h3 className={`text-lg font-bold ${accent}`}>{title}</h3>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={120}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            formatter={(value) => (
              <span style={{ color: '#475569', fontSize: '12px' }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
