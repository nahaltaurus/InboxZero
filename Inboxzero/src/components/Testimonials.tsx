import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    content: 'Finally found a solution that actually works! Cleaned up my inbox in minutes.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format'
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    content: 'The one-click unsubscribe feature is a game-changer. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Digital Marketer',
    content: 'This tool saved me hours of manual unsubscribing. Worth every penny!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format'
  }
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-emerald-400 font-semibold">TESTIMONIALS</span>
          <h2 className="text-3xl font-bold mt-2">What Our Users Say</h2>
          <p className="text-slate-300 mt-4">Join over 500 happy users who've reclaimed their inbox</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}