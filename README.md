# 💰 FinanceStory NYC — Financial Literacy Data Story

A responsive, single-page **Data Story** website built with **Vite + React** focused on **Financial Literacy**, specifically comparing Credit vs. Debit usage and their long-term economic impacts.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Tech Stack

| Tool | Purpose |
|------|---------|
| **Vite + React** | Framework & build tool |
| **Tailwind CSS** | Styling & responsive design |
| **Recharts** | Bar chart & pie chart visualizations |
| **Framer Motion** | Scroll-reveal animations |
| **Lucide React** | Icons |

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx           # Hero section with headline & stats
│   ├── DebtCalculator.jsx # Interactive Debt vs. Savings calculator
│   ├── BarChartSection.jsx# Credit card debt by NYC neighborhood
│   ├── PieChartSection.jsx# Spending categories comparison (pie charts)
│   ├── MythBuster.jsx     # Interactive flip cards for financial myths
│   └── ActionSection.jsx  # Resources & solutions grid
├── App.jsx                # Root component with navbar & layout
├── App.css                # App-level styles
└── index.css              # Tailwind directives & global styles
```

## 🎨 Design

- **Theme:** Civic & Trustworthy — deep blues, emerald greens, slate grays
- **Interactivity:** Scroll-reveal animations via Framer Motion
- **Accessibility:** High-contrast text, ARIA labels on interactive elements
- **Responsive:** Mobile-first layout across all breakpoints

## 📊 Sections

1. **Hero** — Bold headline "The Invisible Cost of Credit" with NYC stats
2. **Debt vs. Savings Calculator** — Interactive sliders to compare credit debt payoff vs. savings growth
3. **Bar Chart** — Average credit card debt by NYC neighborhood vs. median income
4. **Pie Charts** — Spending categories for Debit vs. Credit users (togglable view)
5. **Myth-Buster Cards** — 6 flip cards debunking common financial myths
6. **Resources** — Grid of trusted NYC financial counseling & literacy resources

## 📈 Data

Data is representative/illustrative, modeled after the [NYC People's Money dataset](https://data.cityofnewyork.us/) patterns. All figures are for educational purposes only and do not constitute financial advice.

---

Built for the **2026 Datathon** — March 27, 2026
