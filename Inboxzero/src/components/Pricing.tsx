import React from 'react';
import { Check, Zap, Shield, Clock, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Monthly',
    price: '$4.99',
    period: 'per month',
    subtitle: 'Most flexible',
    features: [
      'Unlimited unsubscribes',
      'Smart inbox analysis',
      'Priority support',
      'Automated cleanup schedules',
      'Privacy protection'
    ],
    cta: 'Start Monthly',
    popular: false,
    savings: null
  },
  {
    name: 'Annual',
    price: '$49.99',
    period: 'per year',
    subtitle: 'Best value',
    features: [
      'Everything in Monthly',
      'Personal cleanup consultant',
      'Advanced analytics dashboard',
      'Custom unsubscribe rules',
      'Early access to features'
    ],
    cta: 'Get Best Value',
    popular: true,
    savings: 'Save 17%'
  }
];

const competitorComparison = [
  { feature: 'Price', us: '$4.99/mo', others: '$15-20/mo' },
  { feature: 'Unsubscribe Speed', us: 'Instant', others: '24-48 hours' },
  { feature: 'Success Rate', us: '99.9%', others: '85-90%' }
];

export function Pricing() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-emerald-400 font-semibold">PRICING</span>
          <h2 className="text-3xl font-bold mt-2">Simple, Transparent Pricing</h2>
          <p className="text-slate-300 mt-4">
            3x more affordable than competitors with better features
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-800/50 p-8 rounded-xl border ${
                plan.popular ? 'border-emerald-400' : 'border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-emerald-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Zap size={14} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-emerald-400 text-sm mb-4">{plan.subtitle}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-400">/{plan.period}</span>
                </div>
                {plan.savings && (
                  <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                    {plan.savings}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="text-emerald-400" size={20} />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-emerald-500 hover:bg-emerald-600'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Why We're Better</h3>
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-left">InboxZero</th>
                  <th className="py-4 px-6 text-left">Others</th>
                </tr>
              </thead>
              <tbody>
                {competitorComparison.map((row, index) => (
                  <tr key={index} className="border-b border-slate-700 last:border-0">
                    <td className="py-4 px-6 text-slate-300">{row.feature}</td>
                    <td className="py-4 px-6">
                      <span className="text-emerald-400 font-semibold">{row.us}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-400">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-800/50 rounded-xl border border-slate-700 p-6">
            <h3 className="text-xl font-semibold mb-2">Need a One-Time Cleanup?</h3>
            <p className="text-slate-300 mb-4">
              Try our deep clean service without subscription
            </p>
            <button className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-full font-semibold transition-colors">
              One-Time Clean for $9.99
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}