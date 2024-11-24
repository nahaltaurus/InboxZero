import React from 'react';
import { Inbox } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-16">
      <div className="flex items-center gap-2 text-xl font-bold">
        <Inbox className="text-blue-500" size={28} />
        <span>InboxZero</span>
      </div>
    </nav>
  );
}