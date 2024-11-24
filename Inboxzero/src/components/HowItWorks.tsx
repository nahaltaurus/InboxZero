import React from 'react';
import { Mail, Search, MousePointerClick } from 'lucide-react';

const steps = [
  {
    icon: Mail,
    title: 'Connect Your Email',
    description: 'Securely connect your email account with just a few clicks'
  },
  {
    icon: Search,
    title: 'Scan Subscriptions',
    description: 'We analyze your inbox to identify all newsletter subscriptions'
  },
  {
    icon: MousePointerClick,
    title: 'One-Click Cleanup',
    description: 'Select all unwanted subscriptions and unsubscribe instantly'
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-50 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <step.icon className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}