import React from 'react';

const IndexSectionCustomComponents2: React.FC = () => {
    return (
        <section className="bg-black text-white py-24 px-6 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight hero-title">
          <span className="block hero-line">A collection</span>
          <span className="block hero-line">of JS effects</span>
          <span className="block text-lime-400 hero-line">Made With Gsap</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-md hero-fade">MWG is a collection of 60+ JS effects to help you implement smooth motion in your projects.</p>
        <div className="flex flex-wrap gap-4 hero-fade">
          <a href="#" className="bg-lime-400 text-black font-medium px-6 py-3 rounded-full hover:bg-lime-300 transition-all hover:scale-105">Get started</a>
          <a href="#" className="border border-zinc-700 text-white font-medium px-6 py-3 rounded-full hover:border-zinc-500 transition-all flex items-center gap-2"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Intro video</a>
        </div>
      </div>
      <div className="relative">
        <div className="grid grid-cols-3 gap-4 transform rotate-3 hover:rotate-0 transition-transform duration-700 card-stack">
          <div className="bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl p-4 aspect-[3/4] transform hover:-translate-y-4 transition-transform duration-500 shadow-2xl card-item">
            <div className="text-black font-bold text-sm">SCROLL</div>
            <div className="mt-auto text-black/60 text-xs">01</div>
          </div>
          <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-4 aspect-[3/4] transform hover:-translate-y-4 transition-transform duration-500 shadow-2xl -mt-8 card-item">
            <div className="text-black font-bold text-sm">THUNDER CAT</div>
            <div className="mt-auto text-black/60 text-xs">02</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-300 to-amber-500 rounded-2xl p-4 aspect-[3/4] transform hover:-translate-y-4 transition-transform duration-500 shadow-2xl card-item">
            <div className="text-black font-bold text-sm">MOTION</div>
            <div className="mt-auto text-black/60 text-xs">03</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-4 aspect-[3/4] transform hover:-translate-y-4 transition-transform duration-500 shadow-2xl -mt-4 card-item">
            <div className="text-black font-bold text-sm">EFFECTS</div>
            <div className="mt-auto text-black/60 text-xs">04</div>
          </div>
          <div className="bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl p-4 aspect-[3/4] transform hover:-translate-y-4 transition-transform duration-500 shadow-2xl card-item">
            <div className="text-black font-bold text-sm">ANIMATE</div>
            <div className="mt-auto text-black/60 text-xs">05</div>
          </div>
          <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl p-4 aspect-[3/4] transform hover:-translate-y-4 transition-transform duration-500 shadow-2xl -mt-8 card-item">
            <div className="text-black font-bold text-sm">GSAP</div>
            <div className="mt-auto text-black/60 text-xs">06</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-32 text-center">
    <p className="text-zinc-500 text-sm mb-8">Scroll to see collection</p>
    <div className="w-px h-16 bg-gradient-to-b from-lime-400 to-transparent mx-auto scroll-indicator" />
  </div>
</section>


    );
};

export default IndexSectionCustomComponents2;