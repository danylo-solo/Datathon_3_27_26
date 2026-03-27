import Hero from './components/Hero';
import DebtCalculator from './components/DebtCalculator';
import BarChartSection from './components/BarChartSection';
import PieChartSection from './components/PieChartSection';
import MythBuster from './components/MythBuster';
import ActionSection from './components/ActionSection';

function Navbar() {
  const sections = [
    { href: '#problem', label: 'Calculator' },
    { href: '#data', label: 'Data' },
    { href: '#action', label: 'Resources' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a2952]/90 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-black text-lg">
          <span className="text-emerald-400">💰</span> FinanceStory NYC
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {sections.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-blue-200 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#action"
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-full transition-all duration-300"
            >
              Get Help
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a2952] text-blue-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="text-white font-black text-lg mb-2">
          <span className="text-emerald-400">💰</span> FinanceStory NYC
        </div>
        <p className="text-sm text-blue-400 mb-4">
          A data story about financial literacy in New York City.
          Built for the 2026 Datathon.
        </p>
        <p className="text-xs text-blue-500">
          Data is representative / illustrative, modeled after the NYC People&apos;s Money dataset.
          Not financial advice. © 2026
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <DebtCalculator />
        <BarChartSection />
        <PieChartSection />
        <MythBuster />
        <ActionSection />
      </main>
      <Footer />
    </div>
  );
}
