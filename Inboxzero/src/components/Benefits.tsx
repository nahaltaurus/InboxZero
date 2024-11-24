import React from 'react';
import { Clock, Brain, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Unsubscribe from hundreds of emails in minutes, not hours'
  },
  {
    icon: Brain,
    title: 'Regain Focus',
    description: 'Stop getting distracted by endless newsletter notifications'
  },
  {
    icon: Shield,
    title: 'Protect Privacy',
    description: 'Reduce your digital footprint and enhance email security'
  }
];

export function Benefits() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
            <benefit.icon className="text-blue-500" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}