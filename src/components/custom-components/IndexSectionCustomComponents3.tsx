import React from 'react';

const IndexSectionCustomComponents3: React.FC = () => {
    return (
        <section className="bg-white text-black py-32 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-3 border-2 border-black px-6 py-3 rounded-full mb-8 feature-reveal">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span className="font-medium">Explore Collection</span>
      </div>
      <div className="w-full h-px bg-black/10 feature-line" />
    </div>
    <div className="grid md:grid-cols-3 gap-16 text-center">
      <div className="space-y-6 feature-card">
        <div className="flex justify-center">
          <svg className="w-16 h-16 text-black" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 32h8M18 24h8M28 40h8M38 16h8M48 48h8" />
            <path d="M12 28v8M22 20v8M32 36v8M42 12v8M52 44v8" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl">Beginners friendly</h3>
        <p className="text-zinc-600 text-sm leading-relaxed">A curated list of 60+ effects from basic scroll triggered animations to more advanced techniques that look and feel great.</p>
      </div>
      <div className="space-y-6 feature-card">
        <div className="flex justify-center">
          <svg className="w-16 h-16 text-black" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M32 8v48M8 32h48" />
            <circle cx={32} cy={32} r={8} />
          </svg>
        </div>
        <h3 className="font-heading text-2xl">Easy to implement</h3>
        <p className="text-zinc-600 text-sm leading-relaxed">Each effect comes with a clean, downloadable zip file containing the final code with a clear sample to follow.</p>
      </div>
      <div className="space-y-6 feature-card">
        <div className="flex justify-center">
          <svg className="w-16 h-16 text-black" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 48l16-32 16 32" />
            <path d="M20 40h24" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl">Performance optimized</h3>
        <p className="text-zinc-600 text-sm leading-relaxed">All animations are optimized for smooth 60fps performance across all modern browsers and devices.</p>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents3;