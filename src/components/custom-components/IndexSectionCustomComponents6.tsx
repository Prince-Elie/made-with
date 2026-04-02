import React, { useState } from 'react';

const IndexSectionCustomComponents6: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json() as { message: string };
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
      setMessage(data.message);
    } catch {
      setStatus('error');
      setMessage('Une erreur est survenue. Réessayez.');
    }
  };

  return (
    <section className="bg-black text-white py-32 px-6 overflow-hidden">
      <div className="relative">
        <div className="marquee-container">
          <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
            <span className="font-heading text-6xl md:text-8xl">Get ready to animate</span>
            <span className="text-lime-400 text-6xl md:text-8xl">✦</span>
            <span className="font-heading text-6xl md:text-8xl">Get ready to animate</span>
            <span className="text-lime-400 text-6xl md:text-8xl">✦</span>
            <span className="font-heading text-6xl md:text-8xl">Get ready to animate</span>
            <span className="text-lime-400 text-6xl md:text-8xl">✦</span>
            <span className="font-heading text-6xl md:text-8xl">Get ready to animate</span>
            <span className="text-lime-400 text-6xl md:text-8xl">✦</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 text-center">
        <p className="text-zinc-400 mb-4">Never miss what&apos;s next</p>
        {status === 'success' ? (
          <p className="text-lime-400 font-medium">{message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-zinc-900 border border-zinc-800 rounded-full px-6 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-lime-400 text-black font-medium px-8 py-3 rounded-full hover:bg-lime-300 transition-colors whitespace-nowrap disabled:opacity-60"
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm mt-3">{message}</p>
        )}
      </div>
    </section>
  );
};

export default IndexSectionCustomComponents6;
