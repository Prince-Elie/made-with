import React from 'react';

const IndexSectionCustomComponents6: React.FC = () => {
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
    <p className="text-zinc-400 mb-4">Never miss what's next</p>
    <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
      <input type="email" placeholder="Your email address" className="w-full bg-zinc-900 border border-zinc-800 rounded-full px-6 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 transition-colors" />
      <button type="submit" className="bg-lime-400 text-black font-medium px-8 py-3 rounded-full hover:bg-lime-300 transition-colors whitespace-nowrap">Subscribe</button>
    </form>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents6;