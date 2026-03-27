import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, AlertCircle } from 'lucide-react';

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

export default function DebtCalculator() {
  const [balance, setBalance] = useState(5000);
  const [apr, setApr] = useState(22.8);
  const [monthlyPayment, setMonthlyPayment] = useState(150);
  const [savingsRate, setSavingsRate] = useState(4.5);

  const calculateCredit = useCallback(() => {
    const monthlyRate = apr / 100 / 12;
    let remaining = balance;
    let totalInterest = 0;
    let months = 0;
    const limit = 600; // cap at 50 years

    while (remaining > 0 && months < limit) {
      const interest = remaining * monthlyRate;
      totalInterest += interest;
      remaining = remaining + interest - monthlyPayment;
      months++;
      if (monthlyPayment <= interest) {
        // Never pays off
        return { months: Infinity, totalInterest: Infinity, totalPaid: Infinity };
      }
    }
    return { months, totalInterest, totalPaid: balance + totalInterest };
  }, [balance, apr, monthlyPayment]);

  const calculateSavings = useCallback(() => {
    const monthlyRate = savingsRate / 100 / 12;
    const months = 36; // compare over same period
    // Future value of monthly deposits
    const fv = monthlyPayment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    return { months, total: fv, interest: fv - monthlyPayment * months };
  }, [monthlyPayment, savingsRate]);

  const credit = calculateCredit();
  const savings = calculateSavings();
  const neverPaysOff = credit.months === Infinity;

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-full mb-4">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a2952] mb-4">
            Debt vs. Savings Calculator
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how the same monthly payment compares when used to pay off credit card debt
            versus building savings. The math might surprise you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
          >
            <h3 className="text-xl font-bold text-[#0a2952] mb-6 flex items-center gap-2">
              <Calculator size={20} className="text-emerald-500" />
              Adjust Your Numbers
            </h3>

            {[
              {
                label: 'Credit Card Balance',
                value: balance,
                setter: setBalance,
                min: 500,
                max: 30000,
                step: 500,
                format: formatCurrency,
                color: 'text-red-500',
              },
              {
                label: 'Annual Percentage Rate (APR)',
                value: apr,
                setter: setApr,
                min: 10,
                max: 35,
                step: 0.5,
                format: (v) => `${v}%`,
                color: 'text-orange-500',
              },
              {
                label: 'Monthly Payment / Deposit',
                value: monthlyPayment,
                setter: setMonthlyPayment,
                min: 50,
                max: 1000,
                step: 25,
                format: formatCurrency,
                color: 'text-blue-600',
              },
              {
                label: 'Savings APY',
                value: savingsRate,
                setter: setSavingsRate,
                min: 1,
                max: 8,
                step: 0.25,
                format: (v) => `${v}%`,
                color: 'text-emerald-600',
              },
            ].map(({ label, value, setter, min, max, step, format, color }) => (
              <div key={label} className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">{label}</label>
                  <span className={`text-sm font-bold ${color}`}>{format(value)}</span>
                </div>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={value}
                  onChange={(e) => setter(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1e4d8c]"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>{format(min)}</span>
                  <span>{format(max)}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Credit card result */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertCircle size={18} className="text-red-500" />
                </div>
                <h4 className="font-bold text-red-700">Credit Card Path</h4>
              </div>

              {neverPaysOff ? (
                <div className="text-red-600 font-semibold text-sm bg-red-100 p-3 rounded-lg">
                  ⚠️ Your monthly payment ({formatCurrency(monthlyPayment)}) is less than the monthly
                  interest — you will <strong>never</strong> pay off this debt at this rate!
                </div>
              ) : (
                <div className="space-y-3">
                  <ResultRow label="Time to pay off" value={`${credit.months} months (${(credit.months / 12).toFixed(1)} yrs)`} color="text-red-700" />
                  <ResultRow label="Total interest paid" value={formatCurrency(credit.totalInterest)} color="text-red-700" />
                  <ResultRow label="Total amount paid" value={formatCurrency(credit.totalPaid)} color="text-red-800" bold />
                </div>
              )}
            </div>

            {/* Savings result */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <TrendingUp size={18} className="text-emerald-600" />
                </div>
                <h4 className="font-bold text-emerald-700">Debit / Savings Path</h4>
              </div>
              <p className="text-xs text-slate-500 mb-3">
                Depositing {formatCurrency(monthlyPayment)}/mo at {savingsRate}% APY for 36 months:
              </p>
              <div className="space-y-3">
                <ResultRow label="Total saved" value={formatCurrency(savings.total)} color="text-emerald-700" bold />
                <ResultRow label="Interest earned" value={formatCurrency(savings.interest)} color="text-emerald-600" />
              </div>
            </div>

            {/* Difference callout */}
            {!neverPaysOff && (
              <div className="rounded-2xl p-5 bg-[#0a2952] text-white">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign size={18} className="text-emerald-400" />
                  <span className="font-bold text-emerald-400">The True Cost of Credit</span>
                </div>
                <p className="text-sm text-blue-200">
                  Over this period, credit costs you{' '}
                  <span className="font-bold text-white">{formatCurrency(credit.totalInterest)}</span>{' '}
                  in interest alone — money that could instead grow to{' '}
                  <span className="font-bold text-emerald-400">{formatCurrency(savings.total)}</span>{' '}
                  in savings.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ResultRow({ label, value, color, bold }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-slate-600">{label}</span>
      <span className={`text-sm ${color} ${bold ? 'font-bold text-base' : 'font-medium'}`}>{value}</span>
    </div>
  );
}
