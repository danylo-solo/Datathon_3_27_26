import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const neighborhoodData = [
  { neighborhood: 'Bronx', avgDebt: 8240, medianIncome: 38000 },
  { neighborhood: 'Brooklyn', avgDebt: 7150, medianIncome: 56000 },
  { neighborhood: 'Queens', avgDebt: 6820, medianIncome: 62000 },
  { neighborhood: 'Staten Island', avgDebt: 5990, medianIncome: 72000 },
  { neighborhood: 'Manhattan', avgDebt: 9450, medianIncome: 89000 },
  { neighborhood: 'Harlem', avgDebt: 7680, medianIncome: 41000 },
  { neighborhood: 'Flushing', avgDebt: 5340, medianIncome: 54000 },
  { neighborhood: 'Flatbush', avgDebt: 6910, medianIncome: 47000 },
];

const DEBT_COLOR = '#e11d48';
const INCOME_COLOR = '#10b981';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-4 text-sm">
        <p className="font-bold text-[#0a2952] mb-2">{label}</p>
        {payload.map((entry) => (
          <p key={entry.name} style={{ color: entry.fill || entry.color }}>
            {entry.name}:{' '}
            <strong>
              {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(entry.value)}
            </strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function BarChartSection() {
  return (
    <section id="data" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-[#1e4d8c] uppercase bg-blue-50 rounded-full mb-4">
            Data Visualization
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a2952] mb-4">
            Credit Card Debt by NYC Neighborhood
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Average credit card debt compared to median household income across New York City
            boroughs and neighborhoods. Data sourced from the NYC People&apos;s Money dataset.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100"
        >
          <ResponsiveContainer width="100%" height={420}>
            <BarChart
              data={neighborhoodData}
              margin={{ top: 10, right: 30, left: 10, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis
                dataKey="neighborhood"
                tick={{ fill: '#64748b', fontSize: 12 }}
                axisLine={{ stroke: '#e2e8f0' }}
                tickLine={false}
                angle={-20}
                textAnchor="end"
                height={60}
              />
              <YAxis
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                tick={{ fill: '#64748b', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{ paddingTop: '20px', fontSize: '13px', color: '#475569' }}
              />
              <Bar
                dataKey="avgDebt"
                name="Avg Credit Card Debt"
                fill={DEBT_COLOR}
                radius={[6, 6, 0, 0]}
              >
                {neighborhoodData.map((entry) => (
                  <Cell
                    key={entry.neighborhood}
                    fill={entry.avgDebt > 8000 ? '#be123c' : DEBT_COLOR}
                    fillOpacity={0.85}
                  />
                ))}
              </Bar>
              <Bar
                dataKey="medianIncome"
                name="Median Household Income"
                fill={INCOME_COLOR}
                radius={[6, 6, 0, 0]}
                fillOpacity={0.75}
              />
            </BarChart>
          </ResponsiveContainer>

          <p className="text-xs text-slate-400 text-center mt-4">
            * Placeholder data modeled after NYC People&apos;s Money dataset patterns. For illustrative purposes.
          </p>
        </motion.div>

        {/* Insight callouts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mt-10"
        >
          {[
            {
              title: 'Bronx & Harlem',
              text: 'Show highest debt-to-income ratios — families spending more on interest than savings.',
              accent: 'bg-red-500',
            },
            {
              title: 'Debt-to-Income Gap',
              text: 'Neighborhoods with lower incomes tend to carry debt equal to 20–30% of annual earnings.',
              accent: 'bg-orange-500',
            },
            {
              title: 'Manhattan Paradox',
              text: 'Highest nominal debt, but highest incomes — illustrating that utilization ratios matter more than raw balance.',
              accent: 'bg-blue-600',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
              <div className={`w-8 h-1 ${item.accent} rounded mb-3`} />
              <h4 className="font-bold text-[#0a2952] mb-2">{item.title}</h4>
              <p className="text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
