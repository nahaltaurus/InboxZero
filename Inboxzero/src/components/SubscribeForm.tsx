import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // First check if email exists
      const { data: existingEmail } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', email)
        .single();

      if (existingEmail) {
        setStatus('error');
        setErrorMessage('This email is already on the waitlist!');
        return;
      }

      // If email doesn't exist, insert it
      const { error } = await supabase
        .from('waitlist')
        .insert([{ 
          email, 
          signed_up_at: new Date().toISOString() 
        }]);

      if (error) throw error;

      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for early access"
          className="px-6 py-3 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 flex-grow max-w-md"
          required
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors text-white ${
            status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
          <ArrowRight size={20} />
        </button>
      </form>

      {status === 'success' && (
        <p className="text-green-600 mt-4 flex items-center justify-center gap-2">
          <CheckCircle size={20} />
          You're on the list! We'll notify you when we launch.
        </p>
      )}

      {status === 'error' && (
        <p className="text-red-500 mt-4 flex items-center justify-center gap-2">
          <AlertCircle size={20} />
          {errorMessage}
        </p>
      )}
    </div>
  );
}