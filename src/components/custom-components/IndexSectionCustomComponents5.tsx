import React from 'react';

const IndexSectionCustomComponents5: React.FC = () => {
    return (
        <section className="bg-white text-black py-32 px-6">
  <div className="max-w-7xl mx-auto space-y-32">
    <div className="grid lg:grid-cols-2 gap-16 items-center content-row">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="text-lime-500 font-heading text-6xl">1</span>
          <h3 className="font-heading text-3xl">Effects</h3>
        </div>
        <p className="text-zinc-600 leading-relaxed">Made With Gsap brings together 60+ effects that showcase fundamental scroll motion techniques: scroll-triggered animations, parallax, sticky elements, drag movements, and more. Each effect is designed to inspire others.</p>
        <ul className="space-y-2 text-zinc-600">
          <li className="flex items-center gap-2"><svg className="w-4 h-4 text-lime-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Scroll-triggered animations</li>
          <li className="flex items-center gap-2"><svg className="w-4 h-4 text-lime-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Parallax effects</li>
          <li className="flex items-center gap-2"><svg className="w-4 h-4 text-lime-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Drag interactions</li>
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-purple-500 to-violet-700 rounded-2xl p-6 aspect-square flex items-end shadow-xl transform hover:scale-105 transition-transform">
          <span className="text-white font-bold text-lg">VELVET<br />DRIFT</span>
        </div>
        <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-6 aspect-square flex items-end shadow-xl transform hover:scale-105 transition-transform -mt-8">
          <span className="text-white font-bold text-lg">ECHO<br />PHASE</span>
        </div>
      </div>
    </div>
    <div className="grid lg:grid-cols-2 gap-16 items-center content-row">
      <div className="order-2 lg:order-1">
        <div className="bg-zinc-900 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="bg-black rounded-lg p-4 font-mono text-sm text-zinc-400">
            <pre className="overflow-x-auto">{"                    "}<code><span className="text-pink-400">gsap</span>.<span className="text-cyan-400">to</span>(<span className="text-yellow-300">".element"</span>, {"{"}{"\n"}{"        "}<span className="text-white">y</span>: <span className="text-lime-400">100</span>,{"\n"}{"        "}<span className="text-white">duration</span>: <span className="text-lime-400">1</span>,{"\n"}{"        "}<span className="text-white">ease</span>: <span className="text-yellow-300">"power2.out"</span>{"\n"}{"      "}{"}"});</code>{"\n"}{"                  "}</pre>
          </div>
        </div>
      </div>
      <div className="space-y-6 order-1 lg:order-2">
        <div className="flex items-center gap-4">
          <span className="text-lime-500 font-heading text-6xl">2</span>
          <h3 className="font-heading text-3xl">Learning</h3>
        </div>
        <p className="text-zinc-600 leading-relaxed">Each effect is paired with a detailed, step-by-step tutorial to help you recreate it and fully understand its mechanics. Plus, a downloadable zip file containing the final code with a clear example.</p>
      </div>
    </div>
    <div className="grid lg:grid-cols-2 gap-16 items-center content-row">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="text-lime-500 font-heading text-6xl">3</span>
          <h3 className="font-heading text-3xl">Our goal</h3>
        </div>
        <p className="text-zinc-600 leading-relaxed">Made with GSAP is meant to be accessible to everyone and continuously evolving. Right now, the collection features a set of 60 effects, but we're planning to release new additions very regularly in the future.</p>
      </div>
      <div className="bg-zinc-900 rounded-2xl p-8 text-center">
        <div className="text-lime-400 font-heading text-8xl counter-number">60+</div>
        <p className="text-zinc-400 mt-4">Effects and growing</p>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents5;