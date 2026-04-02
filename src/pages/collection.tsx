import React, { useState } from 'react';
import Head from 'next/head';
import IndexSectionCustomComponents1 from '../components/custom-components/IndexSectionCustomComponents1';
import IndexSectionCustomComponents7 from '../components/custom-components/IndexSectionCustomComponents7';

const CATEGORIES = ['All', 'Scroll', 'Parallax', 'Text', 'Hover', 'Drag', 'Sticky', 'Morphing', 'Loader'];

const EFFECTS = [
  { id: 1, title: 'Velvet Drift', category: 'Scroll', color: 'from-purple-500 to-violet-700', difficulty: 'Beginner' },
  { id: 2, title: 'Echo Phase', category: 'Parallax', color: 'from-orange-400 to-red-500', difficulty: 'Intermediate' },
  { id: 3, title: 'Thunder Cat', category: 'Text', color: 'from-yellow-300 to-amber-500', difficulty: 'Beginner' },
  { id: 4, title: 'Neon Pulse', category: 'Hover', color: 'from-cyan-400 to-blue-500', difficulty: 'Beginner' },
  { id: 5, title: 'Gravity Pull', category: 'Drag', color: 'from-lime-400 to-green-500', difficulty: 'Intermediate' },
  { id: 6, title: 'Silk Reveal', category: 'Scroll', color: 'from-pink-400 to-rose-500', difficulty: 'Advanced' },
  { id: 7, title: 'Orbit Loop', category: 'Loader', color: 'from-indigo-400 to-purple-600', difficulty: 'Beginner' },
  { id: 8, title: 'Stagger Wave', category: 'Text', color: 'from-emerald-400 to-teal-600', difficulty: 'Intermediate' },
  { id: 9, title: 'Magnetic Field', category: 'Hover', color: 'from-red-400 to-orange-500', difficulty: 'Advanced' },
  { id: 10, title: 'Liquid Morph', category: 'Morphing', color: 'from-sky-400 to-cyan-600', difficulty: 'Advanced' },
  { id: 11, title: 'Sticky Ghost', category: 'Sticky', color: 'from-violet-400 to-indigo-600', difficulty: 'Intermediate' },
  { id: 12, title: 'Parallax Depth', category: 'Parallax', color: 'from-amber-400 to-yellow-600', difficulty: 'Beginner' },
  { id: 13, title: 'Text Scramble', category: 'Text', color: 'from-fuchsia-400 to-pink-600', difficulty: 'Intermediate' },
  { id: 14, title: 'Draggable Cards', category: 'Drag', color: 'from-teal-400 to-emerald-600', difficulty: 'Intermediate' },
  { id: 15, title: 'Scroll Clamp', category: 'Scroll', color: 'from-blue-400 to-indigo-500', difficulty: 'Beginner' },
  { id: 16, title: 'Blob Shift', category: 'Morphing', color: 'from-rose-400 to-red-600', difficulty: 'Advanced' },
  { id: 17, title: 'Pin Section', category: 'Sticky', color: 'from-green-400 to-lime-600', difficulty: 'Beginner' },
  { id: 18, title: 'Fade Timeline', category: 'Loader', color: 'from-orange-300 to-amber-500', difficulty: 'Beginner' },
  { id: 19, title: 'Cursor Trail', category: 'Hover', color: 'from-purple-300 to-violet-500', difficulty: 'Intermediate' },
  { id: 20, title: 'Horizontal Scroll', category: 'Scroll', color: 'from-cyan-300 to-sky-500', difficulty: 'Intermediate' },
  { id: 21, title: 'Split Text', category: 'Text', color: 'from-lime-300 to-green-500', difficulty: 'Beginner' },
  { id: 22, title: 'Counter Up', category: 'Scroll', color: 'from-red-300 to-rose-500', difficulty: 'Beginner' },
  { id: 23, title: 'Flip Card', category: 'Hover', color: 'from-yellow-400 to-amber-600', difficulty: 'Beginner' },
  { id: 24, title: 'Scroll Velocity', category: 'Parallax', color: 'from-indigo-300 to-blue-500', difficulty: 'Advanced' },
  { id: 25, title: 'Path Draw', category: 'Loader', color: 'from-emerald-300 to-teal-500', difficulty: 'Intermediate' },
  { id: 26, title: 'Marquee Drag', category: 'Drag', color: 'from-pink-300 to-fuchsia-500', difficulty: 'Intermediate' },
  { id: 27, title: 'Progress Bar', category: 'Scroll', color: 'from-sky-300 to-cyan-500', difficulty: 'Beginner' },
  { id: 28, title: 'Tilt Hover', category: 'Hover', color: 'from-violet-300 to-purple-500', difficulty: 'Beginner' },
  { id: 29, title: 'Slide In', category: 'Scroll', color: 'from-orange-400 to-red-400', difficulty: 'Beginner' },
  { id: 30, title: 'Morph SVG', category: 'Morphing', color: 'from-teal-300 to-green-500', difficulty: 'Advanced' },
  { id: 31, title: 'Sticky Nav', category: 'Sticky', color: 'from-blue-300 to-indigo-400', difficulty: 'Beginner' },
  { id: 32, title: 'Scatter', category: 'Drag', color: 'from-fuchsia-300 to-pink-500', difficulty: 'Advanced' },
  { id: 33, title: 'Word By Word', category: 'Text', color: 'from-amber-300 to-orange-500', difficulty: 'Intermediate' },
  { id: 34, title: 'Reveal Mask', category: 'Scroll', color: 'from-cyan-400 to-blue-400', difficulty: 'Intermediate' },
  { id: 35, title: 'Spinning Loader', category: 'Loader', color: 'from-rose-300 to-red-500', difficulty: 'Beginner' },
  { id: 36, title: 'Depth Scroll', category: 'Parallax', color: 'from-green-300 to-emerald-500', difficulty: 'Intermediate' },
  { id: 37, title: 'Hover Distort', category: 'Hover', color: 'from-purple-400 to-indigo-500', difficulty: 'Advanced' },
  { id: 38, title: 'Ticker Text', category: 'Text', color: 'from-lime-400 to-green-400', difficulty: 'Beginner' },
  { id: 39, title: 'Sticky Panel', category: 'Sticky', color: 'from-yellow-300 to-lime-400', difficulty: 'Intermediate' },
  { id: 40, title: 'Shape Morph', category: 'Morphing', color: 'from-sky-400 to-blue-600', difficulty: 'Advanced' },
  { id: 41, title: 'Drag Scroll', category: 'Drag', color: 'from-red-400 to-pink-500', difficulty: 'Intermediate' },
  { id: 42, title: 'Clip Reveal', category: 'Scroll', color: 'from-violet-400 to-fuchsia-500', difficulty: 'Intermediate' },
  { id: 43, title: 'Type Writer', category: 'Text', color: 'from-teal-400 to-cyan-500', difficulty: 'Beginner' },
  { id: 44, title: 'Rotate On Scroll', category: 'Scroll', color: 'from-orange-300 to-yellow-400', difficulty: 'Beginner' },
  { id: 45, title: 'Floating Dots', category: 'Loader', color: 'from-indigo-400 to-violet-500', difficulty: 'Beginner' },
  { id: 46, title: 'Cursor Follower', category: 'Hover', color: 'from-emerald-400 to-green-600', difficulty: 'Intermediate' },
  { id: 47, title: 'Skew On Scroll', category: 'Parallax', color: 'from-pink-400 to-rose-600', difficulty: 'Intermediate' },
  { id: 48, title: 'Accordion', category: 'Hover', color: 'from-blue-400 to-sky-500', difficulty: 'Beginner' },
  { id: 49, title: 'Path Follow', category: 'Morphing', color: 'from-lime-300 to-teal-400', difficulty: 'Advanced' },
  { id: 50, title: 'Scramble Reveal', category: 'Text', color: 'from-amber-400 to-orange-600', difficulty: 'Advanced' },
  { id: 51, title: 'Snap Scroll', category: 'Scroll', color: 'from-purple-300 to-indigo-400', difficulty: 'Intermediate' },
  { id: 52, title: 'Elastic Drag', category: 'Drag', color: 'from-rose-400 to-pink-600', difficulty: 'Advanced' },
  { id: 53, title: 'Scale On Enter', category: 'Scroll', color: 'from-cyan-300 to-blue-400', difficulty: 'Beginner' },
  { id: 54, title: 'Ripple Effect', category: 'Hover', color: 'from-yellow-400 to-lime-500', difficulty: 'Intermediate' },
  { id: 55, title: 'Infinite Loop', category: 'Loader', color: 'from-violet-300 to-purple-400', difficulty: 'Beginner' },
  { id: 56, title: 'Parallax Cards', category: 'Parallax', color: 'from-teal-400 to-emerald-500', difficulty: 'Intermediate' },
  { id: 57, title: 'Char Reveal', category: 'Text', color: 'from-orange-400 to-amber-600', difficulty: 'Beginner' },
  { id: 58, title: 'Floating Menu', category: 'Sticky', color: 'from-sky-300 to-indigo-500', difficulty: 'Intermediate' },
  { id: 59, title: 'Blob Cursor', category: 'Hover', color: 'from-fuchsia-400 to-purple-600', difficulty: 'Advanced' },
  { id: 60, title: 'Smooth Scroll', category: 'Scroll', color: 'from-green-400 to-teal-500', difficulty: 'Beginner' },
  { id: 61, title: 'Perspective Tilt', category: 'Hover', color: 'from-red-300 to-orange-400', difficulty: 'Advanced' },
  { id: 62, title: 'Line Draw', category: 'Loader', color: 'from-blue-300 to-cyan-400', difficulty: 'Intermediate' },
];

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: 'bg-lime-400/10 text-lime-400',
  Intermediate: 'bg-amber-400/10 text-amber-400',
  Advanced: 'bg-red-400/10 text-red-400',
};

const CollectionPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = EFFECTS.filter((e) => {
    const matchCat = activeCategory === 'All' || e.category === activeCategory;
    const matchSearch = e.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Head>
        <title>Collection — Made With GSAP</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/shuffle-for-bootstrap.png" />
      </Head>
      <IndexSectionCustomComponents1 />
      <main className="bg-white min-h-screen">
        <section className="bg-black text-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-heading text-6xl md:text-8xl leading-none tracking-tight mb-4">Collection</h1>
            <p className="text-zinc-400 text-lg">{EFFECTS.length}+ effets GSAP — scroll, parallax, texte, et plus encore.</p>
          </div>
        </section>

        <section className="py-12 px-6 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-black text-white'
                      : 'bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search effects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white border border-zinc-200 rounded-full px-5 py-2 text-sm focus:outline-none focus:border-black transition-colors w-full sm:w-56"
            />
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            {filtered.length === 0 ? (
              <p className="text-zinc-400 text-center py-24">Aucun effet trouvé pour &ldquo;{search}&rdquo;.</p>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filtered.map((effect) => (
                  <div
                    key={effect.id}
                    className="group rounded-2xl overflow-hidden border border-zinc-100 hover:border-zinc-300 transition-all hover:shadow-lg cursor-pointer"
                  >
                    <div className={`bg-linear-to-br ${effect.color} aspect-4/3 p-5 flex flex-col justify-between`}>
                      <span className="text-black/40 text-xs font-mono">{String(effect.id).padStart(2, '0')}</span>
                      <span className="text-black font-bold text-lg leading-tight">{effect.title.toUpperCase()}</span>
                    </div>
                    <div className="p-4 flex items-center justify-between bg-white">
                      <span className="text-zinc-500 text-xs">{effect.category}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${DIFFICULTY_COLORS[effect.difficulty]}`}>
                        {effect.difficulty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <IndexSectionCustomComponents7 />
    </>
  );
};

export default CollectionPage;
