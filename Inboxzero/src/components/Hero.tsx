import React from 'react';
import { SubscribeForm } from './SubscribeForm';

export function Hero() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-sky-500 text-transparent bg-clip-text">
        Reclaim Your Inbox in One Click
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Mass-unsubscribe from unwanted emails and newsletters instantly.
        Join our waitlist to be among the first to experience inbox freedom.
      </p>
      <SubscribeForm />
    </div>
  );
}