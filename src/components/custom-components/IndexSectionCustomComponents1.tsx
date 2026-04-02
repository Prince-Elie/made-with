import React from 'react';

const IndexSectionCustomComponents1: React.FC = () => {
    return (
        <nav className="w-full bg-black text-white py-4 px-6">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <div className="flex items-center gap-8">
      <a href="#" className="text-lg font-bold tracking-tight">Made With Gsap</a>
      <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
        <a href="#" className="hover:text-white transition-colors">Collection</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
        <a href="#" className="hover:text-white transition-colors">Blog</a>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Log in</a>
      <a href="#" className="bg-lime-400 text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-lime-300 transition-colors">Join now</a>
    </div>
  </div>
</nav>


    );
};

export default IndexSectionCustomComponents1;