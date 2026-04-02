import React, { useState } from 'react';
import Link from 'next/link';

const IndexSectionCustomComponents1: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white py-4 px-6 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-lg font-bold tracking-tight">Made With Gsap</Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
            <Link href="/collection" className="hover:text-white transition-colors">Collection</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Log in</a>
          <a href="#" className="bg-lime-400 text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-lime-300 transition-colors">Join now</a>
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-zinc-900 px-6 py-6 flex flex-col gap-4">
          <Link href="/collection" className="text-sm text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Collection</Link>
          <Link href="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <Link href="/blog" className="text-sm text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>Blog</Link>
          <div className="flex items-center gap-4 pt-2 border-t border-zinc-900">
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Log in</a>
            <a href="#" className="bg-lime-400 text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-lime-300 transition-colors">Join now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default IndexSectionCustomComponents1;
