import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, DollarSign, Users, Phone, Globe, Award } from 'lucide-react';

const resources = [
  {
    icon: BookOpen,
    title: 'NYC Financial Empowerment Centers',
    description:
      'Free one-on-one financial counseling to help NYC residents tackle debt, build credit, and open bank accounts.',
    link: 'https://www1.nyc.gov/site/dca/consumers/financial-empowerment-centers.page',
    linkLabel: 'Find a Center',
    tag: 'Free Counseling',
    color: 'bg-blue-500',
    border: 'border-blue-100',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: DollarSign,
    title: 'Bank On NYC',
    description:
      'Connect with safe, low-fee bank accounts at participating NYC banks — avoid predatory payday lenders and check cashers.',
    link: 'https://www1.nyc.gov/site/dca/consumers/bank-on-nyc.page',
    linkLabel: 'Open an Account',
    tag: 'Banking Access',
    color: 'bg-emerald-500',
    border: 'border-emerald-100',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: Award,
    title: 'NFCC Credit Counseling',
    description:
      'National non-profit credit counseling network offering debt management plans, credit report reviews, and budget coaching.',
    link: 'https://www.nfcc.org/',
    linkLabel: 'Get Counseling',
    tag: 'Credit Building',
    color: 'bg-purple-500',
    border: 'border-purple-100',
    tagColor: 'bg-purple-100 text-purple-700',
  },
  {
    icon: Users,
    title: 'NYC Credit-Building Workshops',
    description:
      'The NYC Department of Consumer and Worker Protection hosts free workshops on credit building and financial planning throughout the year.',
    link: 'https://www1.nyc.gov/site/dca/consumers/get-consumer-help.page',
    linkLabel: 'Find a Workshop',
    tag: 'Workshops',
    color: 'bg-orange-500',
    border: 'border-orange-100',
    tagColor: 'bg-orange-100 text-orange-700',
  },
  {
    icon: Globe,
    title: 'Consumer Financial Protection Bureau',
    description:
      'Federal resource for understanding your rights, disputing credit report errors, and filing complaints against predatory lenders.',
    link: 'https://www.consumerfinance.gov/',
    linkLabel: 'Learn More',
    tag: 'Federal Resource',
    color: 'bg-slate-600',
    border: 'border-slate-200',
    tagColor: 'bg-slate-100 text-slate-700',
  },
  {
    icon: Phone,
    title: 'NYC 311 Financial Assistance',
    description:
      'Call or text 311 to be connected with local financial assistance programs, emergency rental help, and debt relief resources.',
    link: 'https://portal.311.nyc.gov/',
    linkLabel: 'Call 311',
    tag: 'Emergency Help',
    color: 'bg-red-500',
    border: 'border-red-100',
    tagColor: 'bg-red-100 text-red-700',
  },
];

export default function ActionSection() {
  return (
    <section id="action" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-emerald-700 uppercase bg-emerald-50 rounded-full mb-4">
            Take Action
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a2952] mb-4">
            Resources & Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Financial literacy is the first step — but access to the right tools and people
            makes the real difference. Here are trusted resources for NYC residents.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`bg-white rounded-2xl p-6 border ${resource.border} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col`}
              >
                <div className={`w-11 h-11 ${resource.color} rounded-xl flex items-center justify-center mb-4 flex-shrink-0`}>
                  <Icon size={20} className="text-white" />
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${resource.tagColor} w-fit mb-3`}>
                  {resource.tag}
                </span>
                <h3 className="font-bold text-[#0a2952] mb-2 text-base">{resource.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1e4d8c] hover:text-emerald-600 transition-colors duration-200"
                >
                  {resource.linkLabel}
                  <ExternalLink size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center bg-gradient-to-br from-[#0a2952] to-[#1e4d8c] rounded-2xl p-10 text-white"
        >
          <div className="text-4xl mb-4">🌱</div>
          <h3 className="text-2xl font-black mb-3">Every Dollar Has a Choice</h3>
          <p className="text-blue-200 max-w-xl mx-auto mb-6">
            Financial literacy isn&apos;t about having more money — it&apos;s about making better decisions
            with what you have. Start with one resource today.
          </p>
          <a
            href="https://www1.nyc.gov/site/dca/consumers/financial-empowerment-centers.page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-105"
          >
            Get Free Financial Counseling
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
